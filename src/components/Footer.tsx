import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
            <div className="text-white/40 text-sm">
              &copy; 2026 by Expedite Partners Pty Ltd
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
