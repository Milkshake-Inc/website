import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

const sprinkleColors = ["#ff9aac", "#ffe14b", "#9ee5d3", "#a9d8ff", "#c9a9ff", "#ffc7a0", "#25d6ba"];

function generateSprinkles(seed: number, target: number, yRange: number) {
  const mulberry32 = (s: number) => () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const rand = mulberry32(seed);
  const minDist = 16;
  const points: { x: number; y: number }[] = [];
  for (let attempts = 0; attempts < 10000 && points.length < target; attempts++) {
    const x = 3 + rand() * 94;
    const y = 2 + rand() * (yRange - 4);
    let ok = true;
    for (const p of points) {
      const dx = p.x - x,
        dy = p.y - y;
      if (dx * dx + dy * dy < minDist * minDist) {
        ok = false;
        break;
      }
    }
    if (ok) points.push({ x, y });
  }
  return points.map((p, i) => ({
    top: `${(p.y / yRange) * 100}%`,
    left: `${p.x}%`,
    rot: rand() * 360,
    color: sprinkleColors[i % sprinkleColors.length],
  }));
}

export function SiteNav() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 md:px-8">
      <Link href="/">
        <Image src="/icons/milkshakelogo.webp" alt="Milkshake" width={140} height={36} style={{ height: 32, width: "auto" }} />
      </Link>
      <div className="flex gap-4 md:gap-7">
        <Link href="/#games" className="text-base font-medium text-[#1f1f1f] hover:text-[#25d6ba] md:text-lg">
          games
        </Link>
        <Link href="/#blog" className="text-base font-medium text-[#1f1f1f] hover:text-[#25d6ba] md:text-lg">
          blog
        </Link>
        <Link href="/#about" className="text-base font-medium text-[#1f1f1f] hover:text-[#25d6ba] md:text-lg">
          about
        </Link>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <div className="relative mt-2 md:mt-12">
      <svg viewBox="0 0 1280 120" preserveAspectRatio="none" className="hidden h-24 w-full md:block" aria-hidden>
        <path
          d="M0,80 C100,10 220,130 340,70 C460,10 580,130 700,70 C820,10 940,130 1060,70 C1180,20 1240,110 1280,80 L1280,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>
      <svg viewBox="0 0 600 120" preserveAspectRatio="none" className="block h-16 w-full md:hidden" aria-hidden>
        <path
          d="M0,80 C150,10 300,130 600,70 L600,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>
      <footer className="bg-white px-8 pb-12 pt-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
          <Link href="/">
            <Image src="/icons/milkshakelogo.webp" alt="" width={120} height={32} style={{ height: 28, width: "auto" }} />
          </Link>
          <p className="text-base text-[#1f1f1f]">
            made with <span className="text-[#ff5e9b]">♥</span> by two people, somewhere on the internet.
          </p>
          <div className="flex gap-5 text-sm">
            <Link href="/#games" className="underline decoration-2 underline-offset-4 hover:text-[#25d6ba]">
              games
            </Link>
            <Link href="/#blog" className="underline decoration-2 underline-offset-4 hover:text-[#25d6ba]">
              blog
            </Link>
            <Link href="/#about" className="underline decoration-2 underline-offset-4 hover:text-[#25d6ba]">
              about
            </Link>
            <a href="mailto:hello@milkshake.io" className="underline decoration-2 underline-offset-4 hover:text-[#25d6ba]">
              say hi
            </a>
          </div>
          <p className="mt-1 text-xs text-[#1f1f1f]/60">© milkshake games · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

type SiteLayoutProps = {
  children: ReactNode;
  /** Total page "height" relative to width — controls sprinkle vertical spread. */
  yRange?: number;
  /** Number of sprinkles. */
  count?: number;
  /** Seed so each page gets a different layout. */
  seed?: number;
};

export function SiteLayout({ children, yRange = 200, count = 32, seed = 7 }: SiteLayoutProps) {
  const sprinkles = generateSprinkles(seed, count, yRange);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.4}px, 0)`;
      }
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff8ee] text-[#1f1f1f]">
      <div ref={layerRef} className="pointer-events-none absolute inset-0 z-0 will-change-transform">
        {sprinkles.map((s, i) => (
          <span
            key={i}
            className="absolute h-[14px] w-[40px] md:h-[26px] md:w-[70px]"
            style={{
              top: s.top,
              left: s.left,
              background: s.color,
              borderRadius: 999,
              transform: `rotate(${s.rot}deg)`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <SiteNav />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
