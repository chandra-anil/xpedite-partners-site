import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Xpedite Partners"
        width={220}
        height={60}
        className="h-12 w-auto"
        priority
      />
    </div>
  );
}
