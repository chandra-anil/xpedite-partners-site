"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navItems = [
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Who We Serve", href: "/#who-we-serve" },
  { label: "Network Model", href: "/#network-model" },
  { label: "Frameworks", href: "/frameworks" },
  { label: "Why Us", href: "/#why-us" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const hash = item.href.split("#")[1];
        return hash || "";
      });
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium border rounded transition-all duration-300 ${
                activeSection === (item.href.split("#")[1] || item.href)
                  ? "bg-[#E8632B] border-[#E8632B] text-white"
                  : "border-white/40 text-white/90 hover:border-[#E8632B] hover:text-[#E8632B]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <nav className="md:hidden bg-[#1a1a1a] border-t border-[#333] px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2 text-sm font-medium border rounded transition-all duration-300 ${
                activeSection === (item.href.split("#")[1] || item.href)
                  ? "bg-[#E8632B] border-[#E8632B] text-white"
                  : "border-white/40 text-white/90 hover:border-[#E8632B] hover:text-[#E8632B]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
