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
    parallax: 0.25 + rand() * 0.4,
    spin: (rand() - 0.5) * 0.06,
    color: sprinkleColors[i % sprinkleColors.length],
  }));
}

export function SiteNav() {
  return (
    <nav className="fade-down mx-auto flex max-w-6xl items-center justify-between px-4 py-6 md:px-8">
      <Link href="/" className="logo-hover">
        <Image src="/icons/milkshakelogo-v2.webp" alt="Milkshake" width={140} height={36} style={{ height: 32, width: "auto" }} />
      </Link>
      <div className="flex gap-4 md:gap-7">
        <Link href="/#games" className="text-base font-medium text-[#1f1f1f] hover:text-[#25d6ba] md:text-lg">
          games
        </Link>
        <Link href="/#posts" className="text-base font-medium text-[#1f1f1f] hover:text-[#25d6ba] md:text-lg">
          posts
        </Link>
        <a href="mailto:hello@milkshake.io" className="text-base font-medium text-[#1f1f1f] hover:text-[#25d6ba] md:text-lg">
          contact
        </a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <div className="relative mt-2 md:mt-12">
      <div className="relative hidden h-24 w-full overflow-hidden md:block">
        <svg viewBox="0 0 2560 120" preserveAspectRatio="none" className="wave-loop absolute left-0 top-0 h-full" aria-hidden>
          <path
            d="M0,70 C53,45 107,45 160,70 C213,95 267,95 320,70 C373,45 427,45 480,70 C533,95 587,95 640,70 C693,45 747,45 800,70 C853,95 907,95 960,70 C1013,45 1067,45 1120,70 C1173,95 1227,95 1280,70 C1333,45 1387,45 1440,70 C1493,95 1547,95 1600,70 C1653,45 1707,45 1760,70 C1813,95 1867,95 1920,70 C1973,45 2027,45 2080,70 C2133,95 2187,95 2240,70 C2293,45 2347,45 2400,70 C2453,95 2507,95 2560,70 L2560,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="relative block h-16 w-full overflow-hidden md:hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-loop absolute left-0 top-0 h-full" aria-hidden>
          <path
            d="M0,70 C100,45 200,45 300,70 C400,95 500,95 600,70 C700,45 800,45 900,70 C1000,95 1100,95 1200,70 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <footer className="bg-white px-8 pb-12 pt-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
          <Link href="/">
            <Image src="/icons/milkshakelogo-v2.webp" alt="" width={120} height={32} style={{ height: 28, width: "auto" }} />
          </Link>
          <p className="text-base text-[#1f1f1f]">
            made with <span className="text-[#ff5e9b]">♥</span> by two people, somewhere on the internet.
          </p>
          <div className="flex gap-5 text-sm">
            <a href="mailto:hello@milkshake.io" className="underline decoration-2 underline-offset-4 hover:text-[#25d6ba]">
              hello@milkshake.io
            </a>
          </div>
          <p className="text-xs text-[#1f1f1f]/60">Copyright © Milkshake Games Ltd</p>
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
        layerRef.current.style.setProperty("--scroll-n", `${window.scrollY}`);
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
      <div ref={layerRef} className="pointer-events-none absolute inset-0 z-0">
        {sprinkles.map((s, i) => (
          <span
            key={i}
            className="sprinkle-fade absolute h-[14px] w-[40px] will-change-transform md:h-[26px] md:w-[70px]"
            style={{
              top: s.top,
              left: s.left,
              background: s.color,
              borderRadius: 999,
              transform: `translate3d(0, calc(var(--scroll-n, 0) * ${s.parallax} * 1px), 0) rotate(calc(${s.rot}deg + var(--scroll-n, 0) * ${s.spin} * 1deg))`,
              ["--delay" as string]: `${i * 10}ms`,
            } as React.CSSProperties}
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
