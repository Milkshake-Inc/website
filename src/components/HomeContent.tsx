import { metadata as lightmappingMetadata } from "@/blog/lightmapping-threejs";
import { metadata as preDepthPassMetadata } from "@/blog/pre-depthpass-transparency";
import { metadata as weaponShadersMetadata } from "@/blog/weapon-shader";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Game = {
  title: string;
  image: string;
  video?: string;
  logo: string;
  tag: string;
  desc: string;
  href: string;
  fit?: "cover" | "contain";
};

const games: Game[] = [
  {
    title: "GolfParty.io",
    image: "/images/work/golfparty_nologo.webp",
    video: "/images/work/golfparty.mp4",
    logo: "/images/logos/golfparty.webp",
    tag: "Multiplayer · Web",
    desc: "Fast-paced multiplayer golf hosted on Poki.",
    href: "/work/golfparty",
  },
  {
    title: "Seedle.io",
    image: "/images/work/seedle_nologo.webp",
    video: "/images/work/seedle.mp4",
    logo: "/images/logos/seedle.webp",
    tag: "Puzzle · Cozy",
    desc: "A cozy puzzle where you place tiles to grow crops.",
    href: "/work/seedle",
    fit: "contain",
  },
  {
    title: "Crops And Robbers",
    image: "/images/work/cropsandrobbers_nologo.webp",
    video: "/images/work/cropsandrobbers.mp4",
    logo: "/images/logos/cropsandrobbers.webp",
    tag: "Strategy · Multiplayer",
    desc: "Farmers vs robbers in a strategic multiplayer battle.",
    href: "/work/crops-and-robbers",
  },
  {
    title: "Burgaagh!",
    image: "/images/work/burger_nologo.webp",
    video: "/images/work/burger.mp4",
    logo: "/images/logos/burger.webp",
    tag: "Casual · Mobile",
    desc: "Stack burgers — timing, balance, style.",
    href: "/work/burgaagh",
  },
];

type BlogPost = {
  title: string;
  href: string;
  image: string | null;
  video?: string;
  description: string;
};

const blogPosts: BlogPost[] = [
  {
    title: lightmappingMetadata.title,
    href: "/blog/lightmapping-threejs",
    image: "/blog/lightmaps/lightmap5.webp",
    description: "GPU-accelerated lightmap generation in Three.js with path tracing and UV2 baking.",
  },
  {
    title: preDepthPassMetadata.title,
    href: "/blog/pre-depthpass-transparency",
    image: "/blog/wow/1.webp",
    description: "Recreating WoW-style transparency behavior using a depth pre-pass rendering approach.",
  },
  {
    title: weaponShadersMetadata.title,
    href: "/blog/weapon-shader",
    image: "/blog/weapon/1.webp",
    video: "/blog/weapon/0.mp4",
    description: "A breakdown of stencil and Fresnel techniques for stylized weapon outlines and glow.",
  },
];

const pastels = ["#ffd6e0", "#ffe9b3", "#c9f2d4", "#cfe4ff"];
const sprinkleColors = ["#25d6ba", "#ff9aac", "#ffe14b", "#a9d8ff", "#c9a9ff", "#ffc7a0"];
const cycleWords: { word: string; color: string }[] = [
  { word: "silly", color: "#25d6ba" },
  { word: "fun", color: "#ff9aac" },
  { word: "party", color: "#c9a9ff" },
];

function GameCardMedia({ image, video, fit }: { image: string; video?: string; fit?: "cover" | "contain" }) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(window.matchMedia("(hover: none)").matches);
  }, []);
  return (
    <div
      className="group relative aspect-[16/9] overflow-hidden border-b-2 border-[#1f1f1f]"
      style={{ background: "#f5f0e8" }}
      onMouseEnter={
        touch
          ? undefined
          : () => {
              const v = videoRef.current;
              if (v) {
                v.currentTime = 0;
                v.play().catch(() => {});
              }
            }
      }
      onMouseLeave={touch ? undefined : () => videoRef.current?.pause()}
    >
      <Image src={image} alt="" width={500} height={280} priority className={`h-full w-full ${fitClass}`} />
      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          autoPlay={touch}
          preload="metadata"
          className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${fitClass} ${
            touch ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
      )}
    </div>
  );
}

function XMark() {
  const [pulsing, setPulsing] = useState(false);
  return (
    <span className="x-pop -mt-3 inline-block sm:-mt-0 md:-mt-6" aria-hidden>
      <span
        className={`x-hover select-none py-16 text-5xl font-black leading-none text-[#1f1f1f] sm:py-20 sm:text-6xl md:py-28 md:text-8xl${pulsing ? " is-pulsing" : ""}`}
        style={{
          WebkitTextStroke: "2px #1f1f1f",
          textShadow:
            "-4px 0 #fff, 4px 0 #fff, 0 -4px #fff, 0 4px #fff, -3px -3px #fff, 3px -3px #fff, -3px 3px #fff, 3px 3px #fff",
        }}
        onMouseEnter={() => {
          if (!pulsing) setPulsing(true);
        }}
        onAnimationEnd={() => setPulsing(false)}
      >
        ×
      </span>
    </span>
  );
}

function CyclingWord({ items, intervalMs = 1000 }: { items: { word: string; color: string }[]; intervalMs?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);
  const color = items[i].color;
  const textColor = "#ffffff";
  return (
    <span className="relative inline-grid align-baseline" style={{ transform: "rotate(-4deg)" }}>
      {items.map(({ word: w }, idx) => (
        <span
          key={w}
          aria-hidden={idx !== i}
          className="inline-block px-3 pb-2 pt-1 transition-colors duration-300"
          style={{
            gridArea: "1 / 1",
            background: idx === i ? color : "transparent",
            color: idx === i ? textColor : "transparent",
            lineHeight: 0.95,
            textShadow: "none",
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

export function HomeContent() {
  return (
    <>
      <section className="px-4 pb-4 pt-8 text-center md:px-8 md:pb-2 md:pt-12">
        <h1
          className="fade-up mx-auto max-w-3xl select-none text-5xl md:text-7xl"
          style={{ letterSpacing: "-0.02em", ["--delay" as string]: "100ms" } as React.CSSProperties}
        >
          We make <CyclingWord items={cycleWords} /> games
        </h1>
        <div className="mt-6 flex items-center justify-center gap-1 md:mt-10 md:gap-4">
          <div className="group relative flex flex-col items-center gap-0">
            <span className="face-hover" style={{ ["--hover-rot" as string]: "-6deg" } as React.CSSProperties}>
              <Image
                src="/images/faces/lucas.webp"
                alt="Lucas"
                width={220}
                height={220}
                priority
                className="face-bounce h-32 w-32 object-contain sm:h-44 sm:w-44 md:h-64 md:w-64"
                style={{ ["--rot" as string]: "-6deg", ["--delay" as string]: "120ms" } as React.CSSProperties}
              />
            </span>
            <span
              className="speech face-name pointer-events-none absolute left-1/2 top-0 z-10 select-none whitespace-nowrap px-3 py-1 text-sm font-bold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:text-base"
              style={{ background: "#ff9aac", transform: "translate(-50%, calc(-100% + 18px)) rotate(-4deg)", ["--tail-x" as string]: "50%" } as React.CSSProperties}
            >
              Lucas
            </span>
          </div>
          <XMark />
          <div className="group relative flex flex-col items-center gap-0">
            <span className="face-hover" style={{ ["--hover-rot" as string]: "6deg" } as React.CSSProperties}>
              <span className="inline-block" style={{ transform: "scaleX(-1)" }}>
                <Image
                  src="/images/faces/andrew.webp"
                  alt="Andrew"
                  width={220}
                  height={220}
                  priority
                  className="face-bounce h-32 w-32 object-contain sm:h-44 sm:w-44 md:h-64 md:w-64"
                  style={{ ["--rot" as string]: "-6deg", ["--delay" as string]: "260ms" } as React.CSSProperties}
                />
              </span>
            </span>
            <span
              className="speech face-name pointer-events-none absolute left-1/2 top-0 z-10 select-none whitespace-nowrap px-3 py-1 text-sm font-bold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:text-base"
              style={{ background: "#c9a9ff", transform: "translate(-50%, calc(-100% + 18px)) rotate(4deg)", ["--tail-x" as string]: "50%" } as React.CSSProperties}
            >
              Andrew
            </span>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 px-4 pb-20 pt-2 text-center md:pb-32 md:pt-0">
        <span
          className="fade-up inline-block"
          style={{ ["--delay" as string]: "400ms" } as React.CSSProperties}
        >
          <p
            className="select-none inline-block px-4 py-2 text-base font-bold leading-tight text-white md:text-2xl"
            style={{ transform: "rotate(-1deg)", background: "#25d6ba" }}
          >
            A two-person studio making fun, friendly games for the web.
          </p>
        </span>
      </section>

      <section id="games" className="mx-auto grid max-w-6xl scroll-mt-20 grid-cols-1 gap-6 px-8 pb-16 md:grid-cols-2">
        {games.map((g, i) => (
          <div
            key={g.title}
            className="card-pop"
            style={{ ["--delay" as string]: `${500 + i * 100}ms` } as React.CSSProperties}
          >
          <Link
            href={g.href}
            scroll={false}
            className="tilt-tile block overflow-hidden rounded-3xl border-2 border-[#1f1f1f] shadow-[0_6px_0_#1f1f1f]"
            style={{ background: pastels[i], ["--rot" as string]: `${i % 2 ? 0.8 : -0.8}deg` } as React.CSSProperties}
          >
            <GameCardMedia image={g.image} video={g.video} fit={g.fit} />
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
          </Link>
          </div>
        ))}
      </section>

      <div aria-hidden className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-px w-px overflow-hidden">
        {games.map(g => (
          <Image key={`pre-${g.image}`} src={g.image} alt="" width={1600} height={900} loading="eager" />
        ))}
        {games.map(g => (
          <Image key={`pre-${g.logo}`} src={g.logo} alt="" width={500} height={150} loading="eager" />
        ))}
      </div>

      <section id="blog" className="mx-auto max-w-6xl scroll-mt-20 px-8 pb-8 pt-8 md:pb-20">
        <h2
          className="fade-up mb-10 text-center text-5xl"
          style={{ ["--delay" as string]: "800ms" } as React.CSSProperties}
        >
          Blog
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <div
              key={post.title}
              className="card-pop"
              style={{ ["--delay" as string]: `${900 + i * 100}ms` } as React.CSSProperties}
            >
            <Link
              href={post.href}
              scroll={false}
              className="tilt-tile block overflow-hidden rounded-3xl border-2 border-[#1f1f1f] bg-white shadow-[0_6px_0_#1f1f1f]"
              style={{ ["--rot" as string]: `${(i - 1) * 0.6}deg` } as React.CSSProperties}
            >
              {post.video ? (
                <div className="aspect-video overflow-hidden border-b-2 border-[#1f1f1f]">
                  <video
                    src={post.video}
                    poster={post.image ?? undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : post.image ? (
                <div className="aspect-video overflow-hidden border-b-2 border-[#1f1f1f]">
                  <Image src={post.image} alt={post.title} width={600} height={340} className="h-full w-full object-cover" />
                </div>
              ) : null}
              <div className="p-5">
                <h3 className="text-xl">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{post.description}</p>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
