import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand column */}
            <div>
              <Logo />
              <div className="mt-6 space-y-1">
                <a
                  href="mailto:info@xpeditepartners.com.au"
                  className="text-white/80 hover:text-[#E8632B] transition-colors block underline"
                >
                  info@xpeditepartners.com.au
                </a>
                <p className="text-white/60">Proudly Brisbane, Australia-based.</p>
                <p className="text-white/60">Delivering impact worldwide.</p>
              </div>
            </div>

            {/* Navigation column */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Explore
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/frameworks" className="text-white/60 hover:text-[#E8632B] transition-colors text-sm">
                    Delivery Frameworks
                  </Link>
                </li>
                <li>
                  <Link href="/path-to-value" className="text-white/60 hover:text-[#E8632B] transition-colors text-sm">
                    Path to Value
                  </Link>
                </li>
                <li>
                  <Link href="/frameworks/governance" className="text-white/60 hover:text-[#E8632B] transition-colors text-sm">
                    Governance Health Check
                  </Link>
                </li>
                <li>
                  <Link href="/frameworks/ai-readiness" className="text-white/60 hover:text-[#E8632B] transition-colors text-sm">
                    AI Readiness Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/frameworks/team-topology" className="text-white/60 hover:text-[#E8632B] transition-colors text-sm">
                    Team Topology Designer
                  </Link>
                </li>
                <li>
                  <Link href="/industries/construction" className="text-white/60 hover:text-[#E8632B] transition-colors text-sm">
                    Construction Industry
                  </Link>
                </li>
                <li>
                  <Link href="/industries/mining" className="text-white/60 hover:text-[#E8632B] transition-colors text-sm">
                    Mining Industry
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services column */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Delivery Governance &amp; PMO Consulting</li>
                <li>Agile Transformation</li>
                <li>Program &amp; Portfolio Management</li>
                <li>Digital Transformation Consultancy</li>
                <li>Delivery Operating Model Design</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-white/40 text-sm">
            &copy; 2026 Xpedite Partners Pty Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
