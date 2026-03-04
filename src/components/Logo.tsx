export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        {/* Top-left square */}
        <rect x="0" y="0" width="14" height="14" rx="1" fill="#E8632B" />
        {/* Top-right square */}
        <rect x="18" y="0" width="14" height="14" rx="1" fill="#E8632B" />
        {/* Bottom-left square */}
        <rect x="0" y="18" width="14" height="14" rx="1" fill="#E8632B" />
        {/* Bottom-right dot */}
        <rect x="18" y="18" width="8" height="8" rx="1" fill="#E8632B" />
      </svg>
      <span className="text-white text-2xl font-light tracking-wide">
        xpedite partners
      </span>
    </div>
  );
}
