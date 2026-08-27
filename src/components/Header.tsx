"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

/* Nav is split into the items that sit BEFORE the Industries dropdown and the
   items that sit AFTER it. This used to be one array sliced at a magic index of
   4, which silently reordered the menu the moment an item was added. */
const navItemsBeforeIndustries = [
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Who We Serve", href: "/#who-we-serve" },
  { label: "Network Model", href: "/#network-model" },
  { label: "Tools", href: "/frameworks" },
  { label: "AI Ready", href: "/ai-ready" },
];

const navItemsAfterIndustries = [
  { label: "Why Us", href: "/#why-us" },
  { label: "About", href: "/#about" },
];

const allNavItems = [...navItemsBeforeIndustries, ...navItemsAfterIndustries];

const industryLinks = [
  { label: "Construction", href: "/industries/construction" },
  { label: "Mining", href: "/industries/mining" },
  { label: "Utilities", href: "/industries/utilities" },
  { label: "Commercial Buildings", href: "/industries/commercial-buildings" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
];

const baseItem =
  "py-2 text-sm font-medium border rounded transition-all duration-300";
// #C5521F, not #E8632B: white text on #E8632B is ~3.4:1 and fails WCAG AA.
const activeItem = "bg-[#C5521F] border-[#C5521F] text-white";
const idleItem =
  "border-white/40 text-white/90 hover:border-[#E8632B] hover:text-[#E8632B]";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /* A hash item is active only when we are on the page that owns the anchor;
     a route item is active when the path matches. Previously route items such
     as Tools could never highlight at all. */
  const isActive = (href: string) => {
    const hash = href.split("#")[1];
    if (hash) return pathname === "/" && activeSection === hash;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = allNavItems.map((item) => item.href.split("#")[1] || "");
      for (let i = sections.length - 1; i >= 0; i--) {
        if (!sections[i]) continue;
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const desktopItem = (item: { label: string; href: string }) => (
    <a
      key={item.href}
      href={item.href}
      aria-current={isActive(item.href) ? "page" : undefined}
      className={`px-3 lg:px-4 ${baseItem} ${isActive(item.href) ? activeItem : idleItem}`}
    >
      {item.label}
    </a>
  );

  const mobileItem = (item: { label: string; href: string }) => (
    <a
      key={item.href}
      href={item.href}
      onClick={() => setMobileMenuOpen(false)}
      aria-current={isActive(item.href) ? "page" : undefined}
      className={`px-4 ${baseItem} ${isActive(item.href) ? activeItem : idleItem}`}
    >
      {item.label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* On the homepage this scrolls to the top; anywhere else it has to
            actually navigate home. */}
        {pathname === "/" ? (
          <a
            href="#"
            aria-label="Back to top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Logo />
          </a>
        ) : (
          <Link href="/" aria-label="Xpedite Partners home">
            <Logo />
          </Link>
        )}

        {/* Desktop Nav.
            Breakpoint is `xl` (1280px), not `md`. The full nav — six items plus
            the Industries dropdown — needs ~1120px of width alongside the logo
            before it wraps to a second row and pushes the header from 65px to
            83px. It was already wrapping below ~1037px before "AI Ready" was
            added. Anything narrower than `xl` gets the collapsed menu instead.
            If you add another nav item, re-measure before lowering this. */}
        <nav className="hidden xl:flex items-center gap-2">
          {navItemsBeforeIndustries.map(desktopItem)}

          {/* Industries dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              aria-expanded={industriesOpen}
              className={`px-3 lg:px-4 ${baseItem} flex items-center gap-1 ${
                industriesOpen ? activeItem : idleItem
              }`}
            >
              Industries
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={`transition-transform ${industriesOpen ? "rotate-180" : ""}`}>
                <path d="M2 4l4 4 4-4" />
              </svg>
            </button>
            {industriesOpen && (
              <div className="absolute top-full mt-2 left-0 bg-[#1a1a1a] border border-[#333] rounded-lg shadow-xl min-w-[180px] py-1 z-50">
                {industryLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIndustriesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/80 hover:text-[#E8632B] hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navItemsAfterIndustries.map(desktopItem)}
        </nav>

        {/* Mobile menu button */}
        <button
          className="xl:hidden text-white p-2"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {mobileMenuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="xl:hidden bg-[#1a1a1a] border-t border-[#333] px-6 py-4 flex flex-col gap-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navItemsBeforeIndustries.map(mobileItem)}
          <div className="pl-2 xr-label text-white/60 mt-1 mb-0.5">Industries</div>
          {industryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 ${baseItem} ${idleItem}`}
            >
              {link.label}
            </a>
          ))}
          {navItemsAfterIndustries.map(mobileItem)}
        </nav>
      )}
    </header>
  );
}
