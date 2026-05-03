import Image from "next/image";
import Head from "next/head";

const games = [
  {
    title: "GolfParty.io",
    image: "/images/work/golfparty_nologo.webp",
    logo: "/images/logos/golfparty.webp",
    tag: "Multiplayer · Web",
    year: "2023",
    desc: "Fast-paced multiplayer golf hosted on Poki.",
    longDesc:
      "GolfParty pits up to eight players against each other in real-time across handcrafted courses. We built it from scratch in TypeScript with a custom networked physics engine, and it's been played by millions on Poki since launch.",
  },
  {
    title: "Seedle.io",
    image: "/images/work/seedle_nologo.webp",
    logo: "/images/logos/seedle.webp",
    tag: "Puzzle · Cozy",
    year: "2024",
    desc: "A cozy puzzle where you place tiles to grow crops.",
    longDesc:
      "Seedle is a slow, satisfying tile-laying puzzle about cultivating a garden. Each run is a tight 5-minute loop of placing crops, dodging obstacles, and chasing the perfect harvest. Designed to feel like comfort food.",
  },
  {
    title: "Crops And Robbers",
    image: "/images/work/cropsandrobbers_nologo.webp",
    logo: "/images/logos/cropsandrobbers.webp",
    tag: "Strategy · Multiplayer",
    year: "2022",
    desc: "Farmers vs robbers in a strategic multiplayer battle.",
    longDesc:
      "An asymmetric multiplayer game where one team tends the farm and the other tries to steal it. We spent six months iterating on balance until both sides felt genuinely tense to play. Cross-platform, browser-first.",
  },
  {
    title: "Burgaagh!",
    image: "/images/work/burger_nologo.webp",
    logo: "/images/logos/burger.webp",
    tag: "Casual · Mobile",
    year: "2021",
    desc: "Stack burgers — timing, balance, style.",
    longDesc:
      "A bite-sized arcade game about stacking burger ingredients with the right timing. Started as a game-jam prototype, grew into a polished mobile release with hundreds of unlockable toppings and a global leaderboard.",
  },
];

function SectionLabel({ n, name, vibe }: { n: number; name: string; vibe: string }) {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-3 pt-16">
      <div className="text-xs uppercase tracking-widest text-[#9b9b9b]">Design {n}</div>
      <h2 className="text-3xl text-[#323232]">{name}</h2>
      <p className="text-sm text-[#767676]">{vibe}</p>
    </div>
  );
}

function Frame({ children, bg = "#fafafa" }: { children: React.ReactNode; bg?: string }) {
  return (
    <div className="mx-auto max-w-[1280px] px-6">
      <div className="overflow-hidden rounded-2xl border border-[#e6e6e6] shadow-[0_20px_60px_rgba(0,0,0,0.08)]" style={{ background: bg }}>
        {children}
      </div>
    </div>
  );
}

function TwemojiFilterDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <filter id="tw-stroke" x="-25%" y="-25%" width="160%" height="160%">
          <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="stroke" />
          <feFlood floodColor="#1f1f1f" />
          <feComposite in2="stroke" operator="in" result="strokeShape" />
          <feOffset in="strokeShape" dx="0" dy="8" result="drop" />
          <feMerge>
            <feMergeNode in="drop" />
            <feMergeNode in="strokeShape" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

function Twemoji({ hex, size = 48 }: { hex: string; size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${hex}.svg`}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, filter: "url(#tw-stroke)" }}
    />
  );
}

/* ============================================================ 1. PLAYFUL PASTEL */
function Design1() {
  const pastels = ["#ffd6e0", "#ffe9b3", "#c9f2d4", "#cfe4ff"];
  return (
    <Frame bg="#fff8ee">
      <nav className="flex items-center justify-between px-8 py-5">
        <Image src="/icons/milkshakelogo-v2.webp" alt="" width={120} height={32} style={{ height: 28, width: "auto" }} />
        <div className="flex gap-2">
          {["home", "games", "posts", "about"].map(l => (
            <a key={l} className="rounded-full bg-white px-4 py-1.5 text-sm shadow-[0_3px_0_#1f1f1f] border-2 border-[#1f1f1f]">{l}</a>
          ))}
        </div>
      </nav>
      <section className="relative px-8 pb-16 pt-10 text-center">
        <div className="absolute left-12 top-6 h-16 w-16 rounded-full bg-[#ffd6e0]" />
        <div className="absolute right-16 top-20 h-10 w-10 rounded-full bg-[#cfe4ff]" />
        <div className="absolute left-1/3 bottom-4 h-8 w-8 rotate-45 bg-[#ffe9b3]" />
        <h1 className="mx-auto max-w-3xl text-7xl" style={{ letterSpacing: "-0.02em" }}>We make <span className="bg-[#25d6ba] px-3 text-white">silly</span> games</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[#555]">A two-person studio shipping bright, weird, and joyful games on the web.</p>
      </section>
      <section className="grid grid-cols-1 gap-6 px-8 pb-12 md:grid-cols-2">
        {games.map((g, i) => (
          <div key={g.title} className="overflow-hidden rounded-3xl border-2 border-[#1f1f1f] shadow-[0_6px_0_#1f1f1f]" style={{ background: pastels[i], transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}>
            <div className="aspect-[16/9] overflow-hidden border-b-2 border-[#1f1f1f]">
              <Image src={g.image} alt="" width={500} height={280} className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-5 p-5">
              <div className="flex h-20 w-1/3 flex-shrink-0 items-center justify-center">
                <Image src={g.logo} alt={g.title} width={300} height={120} className="max-h-full max-w-full" style={{ width: "auto", height: "auto", objectFit: "contain" }} />
              </div>
              <div className="flex-1 border-l-2 border-[#1f1f1f]/15 pl-5">
                <p className="text-xs uppercase tracking-widest text-[#1f1f1f]/60">{g.tag}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#1f1f1f]">{g.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Frame>
  );
}

/* ============================================================ 1S. PLAYFUL PASTEL — SPRINKLE HERO */
function Design1Sprinkle() {
  const pastels = ["#ffd6e0", "#ffe9b3", "#c9f2d4", "#cfe4ff"];
  const sprinkleColors = ["#ff9aac", "#ffe14b", "#9ee5d3", "#a9d8ff", "#c9a9ff", "#ffc7a0", "#25d6ba"];
  // Poisson-disc sample: pseudo-random positions with a guaranteed minimum spacing.
  const mulberry32 = (s: number) => () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  // Page is roughly ~2.2x taller than wide; sample y in 0..220 and divide for CSS
  // so visual distance between sprinkles matches the geometric distance check.
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
  const sprinkles = points.map((p, i) => ({
    top: `${(p.y / yRange) * 100}%`,
    left: `${p.x}%`,
    rot: rand() * 360,
    color: sprinkleColors[i % sprinkleColors.length],
    w: 70,
    h: 26,
  }));
  return (
    <Frame bg="#fff8ee">
      <div className="relative">
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
      <nav className="relative z-10 flex items-center justify-between px-8 py-5">
        <Image src="/icons/milkshakelogo-v2.webp" alt="" width={120} height={32} style={{ height: 28, width: "auto" }} />
        <div className="flex gap-6">
          {["games", "blog", "about"].map(l => (
            <a key={l} className="text-sm text-[#1f1f1f] hover:text-[#25d6ba]">{l}</a>
          ))}
        </div>
      </nav>
      <section className="relative px-8 pb-32 pt-24 text-center">
        <h1 className="mx-auto max-w-3xl text-7xl" style={{ letterSpacing: "-0.02em" }}>We make <span className="bg-[#25d6ba] px-3 text-white">silly</span> games</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[#555]">A two-person studio shipping bright, weird, and joyful games on the web.</p>
      </section>
      <section className="grid grid-cols-1 gap-6 px-8 pb-12 md:grid-cols-2">
        {games.map((g, i) => (
          <div key={g.title} className="overflow-hidden rounded-3xl border-2 border-[#1f1f1f] shadow-[0_6px_0_#1f1f1f]" style={{ background: pastels[i], transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}>
            <div className="aspect-[16/9] overflow-hidden border-b-2 border-[#1f1f1f]">
              <Image src={g.image} alt="" width={500} height={280} className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-5 p-5">
              <div className="flex h-20 w-1/3 flex-shrink-0 items-center justify-center">
                <Image src={g.logo} alt={g.title} width={300} height={120} className="max-h-full max-w-full" style={{ width: "auto", height: "auto", objectFit: "contain" }} />
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
        <footer className="relative bg-white px-8 pb-10 pt-2">
          <div className="flex flex-col items-center gap-3 text-center">
            <Image src="/icons/milkshakelogo-v2.webp" alt="" width={120} height={32} style={{ height: 28, width: "auto" }} />
            <p className="text-base text-[#1f1f1f]">made with <span className="text-[#ff5e9b]">♥</span> by two people, somewhere on the internet.</p>
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
    </Frame>
  );
}

/* ============================================================ 1B. PLAYFUL PASTEL — 4 IN A ROW */
function Design1Row() {
  const pastels = ["#ffd6e0", "#ffe9b3", "#c9f2d4", "#cfe4ff"];
  return (
    <Frame bg="#fff8ee">
      <nav className="flex items-center justify-between px-8 py-5">
        <Image src="/icons/milkshakelogo-v2.webp" alt="" width={120} height={32} style={{ height: 28, width: "auto" }} />
        <div className="flex gap-2">
          {["home", "games", "posts", "about"].map(l => (
            <a key={l} className="rounded-full bg-white px-4 py-1.5 text-sm shadow-[0_3px_0_#1f1f1f] border-2 border-[#1f1f1f]">{l}</a>
          ))}
        </div>
      </nav>
      <section className="relative px-8 pb-16 pt-10 text-center">
        <div className="absolute left-12 top-6 h-16 w-16 rounded-full bg-[#ffd6e0]" />
        <div className="absolute right-16 top-20 h-10 w-10 rounded-full bg-[#cfe4ff]" />
        <div className="absolute left-1/3 bottom-4 h-8 w-8 rotate-45 bg-[#ffe9b3]" />
        <h1 className="mx-auto max-w-3xl text-7xl" style={{ letterSpacing: "-0.02em" }}>We make <span className="bg-[#25d6ba] px-3 text-white">silly</span> games</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[#555]">A two-person studio shipping bright, weird, and joyful games on the web.</p>
      </section>
      <section className="grid grid-cols-4 gap-4 px-8 pb-12">
        {games.map((g, i) => (
          <div key={g.title} className="overflow-hidden rounded-3xl border-2 border-[#1f1f1f] shadow-[0_6px_0_#1f1f1f]" style={{ background: pastels[i], transform: `rotate(${i % 2 ? 1 : -1}deg)` }}>
            <div className="aspect-square overflow-hidden border-b-2 border-[#1f1f1f]">
              <Image src={g.image} alt="" width={300} height={300} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <Image src={g.logo} alt={g.title} width={180} height={50} style={{ height: 32, width: "auto" }} />
              <p className="mt-2 text-[10px] uppercase tracking-widest text-[#1f1f1f]/60">{g.tag}</p>
              <p className="mt-2 text-xs leading-relaxed text-[#1f1f1f]">{g.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </Frame>
  );
}

/* ============================================================ 2. PASTEL — EMOJI HERO COLLAGE */
function Design2() {
  const stickers = [
    { hex: "26f3", top: "10%", left: "8%", rot: -15, size: 64 },
    { hex: "1f354", top: "15%", left: "82%", rot: 12, size: 70 },
    { hex: "1f331", top: "55%", left: "5%", rot: 8, size: 58 },
    { hex: "1f69c", top: "60%", left: "85%", rot: -10, size: 62 },
    { hex: "2b50", top: "5%", left: "45%", rot: 0, size: 40 },
    { hex: "1f496", top: "75%", left: "48%", rot: 20, size: 44 },
  ];
  return (
    <Frame bg="#ffd6e0">
      <nav className="flex items-center justify-between px-8 py-5">
        <Image src="/icons/milkshakelogo-v2.webp" alt="" width={120} height={32} style={{ height: 28, width: "auto" }} />
        <div className="flex gap-2">
          {["home", "games", "posts"].map(l => (
            <a key={l} className="rounded-full border-2 border-[#1f1f1f] bg-white px-4 py-1.5 text-sm shadow-[0_3px_0_#1f1f1f]">{l}</a>
          ))}
        </div>
      </nav>
      <section className="relative h-[440px] overflow-hidden">
        {stickers.map((s, i) => (
          <div key={i} className="absolute" style={{ top: s.top, left: s.left, transform: `rotate(${s.rot}deg)` }}>
            <Twemoji hex={s.hex} size={s.size} />
          </div>
        ))}
        <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
          <h1 className="mx-auto max-w-3xl text-7xl" style={{ letterSpacing: "-0.02em" }}>milkshake<br /><span className="text-[#25d6ba]">games.</span></h1>
          <p className="mx-auto mt-4 max-w-md text-lg">Two people. Four games. Lots of emoji.</p>
        </div>
      </section>
      <section className="bg-white px-8 py-12">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {games.map((g, i) => (
            <div key={g.title} className="overflow-hidden rounded-3xl border-2 border-[#1f1f1f] shadow-[0_6px_0_#1f1f1f]" style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}>
              <div className="aspect-square overflow-hidden">
                <Image src={g.image} alt="" width={300} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="bg-white p-3">
                <Image src={g.logo} alt={g.title} width={150} height={40} style={{ height: 28, width: "auto" }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Frame>
  );
}

/* ============================================================ 3. SCROLL STORY */
function Design3() {
  return (
    <Frame bg="#fafafa">
      <nav className="flex items-center justify-between px-8 py-5">
        <Image src="/icons/milkshakelogo-v2.webp" alt="" width={120} height={32} style={{ height: 26, width: "auto" }} />
        <div className="flex items-center gap-2 text-xs text-[#767676]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#25d6ba]" />
          <span>4 games · 3 posts</span>
        </div>
      </nav>
      <section className="px-8 py-20 text-center">
        <h1 className="mx-auto max-w-2xl text-6xl" style={{ letterSpacing: "-0.02em" }}>Four games. Built by two people.</h1>
        <p className="mx-auto mt-4 max-w-md text-[#767676]">Scroll for the story behind each one.</p>
      </section>
      {games.map((g, i) => (
        <section key={g.title} className={`relative px-8 py-20 ${i % 2 ? "bg-white" : ""}`}>
          <div className={`mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-1">
              <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                <Image src={g.image} alt="" width={700} height={500} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <Image src={g.logo} alt={g.title} width={300} height={80} style={{ height: 56, width: "auto" }} />
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#9b9b9b]">{g.tag}</p>
              <p className="mt-5 text-lg leading-relaxed text-[#444]">{g.longDesc}</p>
              <div className="mt-6 flex gap-3">
                <a className="rounded-full bg-[#25d6ba] px-5 py-2 text-sm text-white">Play now</a>
                <a className="rounded-full border border-[#1f1f1f] px-5 py-2 text-sm">Read more</a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Frame>
  );
}

/* ============================================================ 4. SCROLL — PASTEL CHAPTERS */
function Design4() {
  const tones = ["#fff2a6", "#9ee5d3", "#ffc7a0", "#c9a9ff"];
  return (
    <Frame bg="#fff">
      <nav className="flex items-center justify-between border-b border-[#e6e6e6] px-8 py-5">
        <Image src="/icons/milkshakelogo-v2.webp" alt="" width={120} height={32} style={{ height: 26, width: "auto" }} />
        <div className="flex items-center gap-2 text-xs text-[#767676]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#25d6ba]" />
          <span>4 games · 3 posts</span>
        </div>
      </nav>
      <section className="px-8 py-20 text-center">
        <h1 className="mx-auto max-w-2xl text-6xl" style={{ letterSpacing: "-0.02em" }}>Four games. Built by two people.</h1>
        <p className="mx-auto mt-4 max-w-md text-[#767676]">Scroll for the story behind each one.</p>
      </section>
      {games.map((g, i) => (
        <section key={g.title} className="relative px-8 py-20" style={{ background: tones[i] }}>
          <div className={`mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-1">
              <div className="overflow-hidden rounded-2xl border-2 border-[#1f1f1f] shadow-[0_12px_0_#1f1f1f]">
                <Image src={g.image} alt="" width={700} height={500} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <Image src={g.logo} alt={g.title} width={300} height={80} style={{ height: 56, width: "auto" }} />
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#1f1f1f]/70">{g.tag}</p>
              <p className="mt-5 text-lg leading-relaxed text-[#1f1f1f]">{g.longDesc}</p>
              <div className="mt-6 flex gap-3">
                <a className="rounded-full bg-[#1f1f1f] px-5 py-2 text-sm text-white">Play now</a>
                <a className="rounded-full border-2 border-[#1f1f1f] px-5 py-2 text-sm">Read more</a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Frame>
  );
}

export default function Designs() {
  const layouts = [
    { name: "Playful Pastel", vibe: "Cream bg, pastel sticker cards, hand-drawn feel.", el: <Design1 /> },
    { name: "Playful Pastel — Sprinkle Hero", vibe: "Hero background scattered with confetti-sprinkle capsule shapes.", el: <Design1Sprinkle /> },
    { name: "Playful Pastel — 4 in a Row", vibe: "Same vibe but all four games sit in a single horizontal row.", el: <Design1Row /> },
    { name: "Pastel — Emoji Hero Collage", vibe: "Pink hero littered with twemoji stickers, white showcase below.", el: <Design2 /> },
    { name: "Scroll Story", vibe: "Calm chapter-per-game with big screenshots.", el: <Design3 /> },
    { name: "Scroll — Pastel Chapters", vibe: "Same scroll cadence, but each chapter takes a keycap color.", el: <Design4 /> },
  ];
  return (
    <>
      <Head><title>Designs — Milkshake</title></Head>
      <TwemojiFilterDefs />
      <div className="min-h-screen bg-[#f0f0f0] pb-24">
        <header className="px-6 pb-6 pt-12 text-center">
          <h1 className="text-4xl">Design directions</h1>
          <p className="mt-2 text-sm text-[#767676]">Four finalists. Pick one.</p>
        </header>
        {layouts.map((l, i) => (
          <div key={l.name}>
            <SectionLabel n={i + 1} name={l.name} vibe={l.vibe} />
            {l.el}
          </div>
        ))}
      </div>
    </>
  );
}
