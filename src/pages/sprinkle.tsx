import Image from "next/image";
import Head from "next/head";

const games = [
  {
    title: "GolfParty.io",
    image: "/images/work/golfparty_nologo.webp",
    logo: "/images/logos/golfparty.webp",
    tag: "Multiplayer · Web",
    desc: "Fast-paced multiplayer golf hosted on Poki.",
  },
  {
    title: "Seedle.io",
    image: "/images/work/seedle_nologo.webp",
    logo: "/images/logos/seedle.webp",
    tag: "Puzzle · Cozy",
    desc: "A cozy puzzle where you place tiles to grow crops.",
  },
  {
    title: "Crops And Robbers",
    image: "/images/work/cropsandrobbers_nologo.webp",
    logo: "/images/logos/cropsandrobbers.webp",
    tag: "Strategy · Multiplayer",
    desc: "Farmers vs robbers in a strategic multiplayer battle.",
  },
  {
    title: "Burgaagh!",
    image: "/images/work/burger_nologo.webp",
    logo: "/images/logos/burger.webp",
    tag: "Casual · Mobile",
    desc: "Stack burgers — timing, balance, style.",
  },
];

const pastels = ["#ffd6e0", "#ffe9b3", "#c9f2d4", "#cfe4ff"];
const sprinkleColors = ["#ff9aac", "#ffe14b", "#9ee5d3", "#a9d8ff", "#c9a9ff", "#ffc7a0", "#25d6ba"];

function useSprinkles() {
  const mulberry32 = (s: number) => () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const rand = mulberry32(7);
  const target = 38;
  const minDist = 18;
  const yRange = 220;
  const points: { x: number; y: number }[] = [];
  for (let attempts = 0; attempts < 8000 && points.length < target; attempts++) {
    const x = 3 + rand() * 94;
    const y = 2 + rand() * (yRange - 4);
    let ok = true;
    for (const p of points) {
      const dx = p.x - x, dy = p.y - y;
      if (dx * dx + dy * dy < minDist * minDist) { ok = false; break; }
    }
    if (ok) points.push({ x, y });
  }
  return points.map((p, i) => ({
    top: `${(p.y / yRange) * 100}%`,
    left: `${p.x}%`,
    rot: rand() * 360,
    color: sprinkleColors[i % sprinkleColors.length],
    w: 70,
    h: 26,
  }));
}

export default function Sprinkle() {
  const sprinkles = useSprinkles();
  return (
    <>
      <Head><title>Milkshake Games</title></Head>
      <div className="relative min-h-screen overflow-hidden bg-[#fff8ee]">
        <div className="pointer-events-none absolute inset-0 z-0">
          {sprinkles.map((s, i) => (
            <span
              key={i}
              className="absolute"
              style={{
                top: s.top,
                left: s.left,
                width: s.w,
                height: s.h,
                background: s.color,
                borderRadius: 999,
                transform: `rotate(${s.rot}deg)`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6">
            <Image src="/icons/milkshakelogo-v2.webp" alt="Milkshake" width={140} height={36} style={{ height: 32, width: "auto" }} />
            <div className="flex gap-7">
              {["games", "blog", "about"].map(l => (
                <a key={l} className="text-lg font-medium text-[#1f1f1f] hover:text-[#25d6ba]">{l}</a>
              ))}
            </div>
          </nav>
          <section className="px-8 pb-32 pt-24 text-center">
            <h1 className="mx-auto max-w-3xl text-7xl" style={{ letterSpacing: "-0.02em" }}>
              We make <span className="inline-block bg-[#25d6ba] px-3 pb-2 pt-1 text-white" style={{ transform: "rotate(-4deg)", lineHeight: 0.95 }}>silly</span> games
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[#555]">
              A two-person studio shipping bright, weird, and joyful games on the web.
            </p>
          </section>
          <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-8 pb-16 md:grid-cols-2">
            {games.map((g, i) => (
              <div
                key={g.title}
                className="overflow-hidden rounded-3xl border-2 border-[#1f1f1f] shadow-[0_6px_0_#1f1f1f]"
                style={{ background: pastels[i], transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}
              >
                <div className="aspect-[16/9] overflow-hidden border-b-2 border-[#1f1f1f]">
                  <Image src={g.image} alt="" width={500} height={280} className="h-full w-full object-cover" />
                </div>
                <div className="flex items-center gap-5 p-5">
                  <div className="flex h-20 w-1/3 flex-shrink-0 items-center justify-center">
                    <Image
                      src={g.logo}
                      alt={g.title}
                      width={300}
                      height={120}
                      className="max-h-full max-w-full"
                      style={{ width: "auto", height: "auto", objectFit: "contain" }}
                    />
                  </div>
                  <div className="flex-1 border-l-2 border-[#1f1f1f]/15 pl-5">
                    <p className="text-xs uppercase tracking-widest text-[#1f1f1f]/60">{g.tag}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#1f1f1f]">{g.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <div className="relative mt-6">
            <svg viewBox="0 0 1280 120" preserveAspectRatio="none" className="block h-20 w-full md:h-24" aria-hidden>
              <path
                d="M0,80 C100,10 220,130 340,70 C460,10 580,130 700,70 C820,10 940,130 1060,70 C1180,20 1240,110 1280,80 L1280,120 L0,120 Z"
                fill="#ffffff"
              />
            </svg>
            <footer className="bg-white px-8 pb-12 pt-4">
              <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
                <Image src="/icons/milkshakelogo-v2.webp" alt="" width={120} height={32} style={{ height: 28, width: "auto" }} />
                <p className="text-base text-[#1f1f1f]">
                  made with <span className="text-[#ff5e9b]">♥</span> by two people, somewhere on the internet.
                </p>
                <div className="flex gap-5 text-sm">
                  <a className="underline decoration-2 underline-offset-4 hover:text-[#25d6ba]">games</a>
                  <a className="underline decoration-2 underline-offset-4 hover:text-[#25d6ba]">blog</a>
                  <a className="underline decoration-2 underline-offset-4 hover:text-[#25d6ba]">about</a>
                  <a className="underline decoration-2 underline-offset-4 hover:text-[#25d6ba]">say hi</a>
                </div>
                <p className="mt-1 text-xs text-[#1f1f1f]/60">© milkshake games · {new Date().getFullYear()}</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
