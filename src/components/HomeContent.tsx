import { metadata as lightmappingMetadata } from "@/blog/lightmapping-threejs";
import { metadata as preDepthPassMetadata } from "@/blog/pre-depthpass-transparency";
import { metadata as weaponShadersMetadata } from "@/blog/weapon-shader";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const games = [
  {
    title: "GolfParty.io",
    image: "/images/work/golfparty_nologo.png",
    logo: "/images/logos/golfparty.png",
    tag: "Multiplayer · Web",
    desc: "Fast-paced multiplayer golf hosted on Poki.",
    href: "/work/golfparty",
  },
  {
    title: "Seedle.io",
    image: "/images/work/seedle_nologo.png",
    logo: "/images/logos/seedle.png",
    tag: "Puzzle · Cozy",
    desc: "A cozy puzzle where you place tiles to grow crops.",
    href: "/work/seedle",
  },
  {
    title: "Crops And Robbers",
    image: "/images/work/cropsandrobbers_nologo.png",
    logo: "/images/logos/cropsandrobbers.png",
    tag: "Strategy · Multiplayer",
    desc: "Farmers vs robbers in a strategic multiplayer battle.",
    href: "/work/crops-and-robbers",
  },
  {
    title: "Burgaagh!",
    image: "/images/work/burger_nologo.png",
    logo: "/images/logos/burger.png",
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
    image: "/blog/lightmaps/lightmap5.png",
    description: "GPU-accelerated lightmap generation in Three.js with path tracing and UV2 baking.",
  },
  {
    title: preDepthPassMetadata.title,
    href: "/blog/pre-depthpass-transparency",
    image: "/blog/wow/1.jpg",
    description: "Recreating WoW-style transparency behavior using a depth pre-pass rendering approach.",
  },
  {
    title: weaponShadersMetadata.title,
    href: "/blog/weapon-shader",
    image: "/blog/weapon/1.jpg",
    video: "/blog/weapon/0.mp4",
    description: "A breakdown of stencil and Fresnel techniques for stylized weapon outlines and glow.",
  },
];

const pastels = ["#ffd6e0", "#ffe9b3", "#c9f2d4", "#cfe4ff"];
const sprinkleColors = ["#25d6ba", "#ff9aac", "#ffe14b", "#a9d8ff", "#c9a9ff", "#ffc7a0"];
const cycleWords = ["silly", "fun", "party"];

function CyclingWord({ words, colors, intervalMs = 1000 }: { words: string[]; colors: string[]; intervalMs?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);
  const color = colors[i % colors.length];
  const textColor = color === "#ffe14b" ? "#1f1f1f" : "#ffffff";
  return (
    <span className="relative inline-grid align-baseline" style={{ transform: "rotate(-4deg)" }}>
      {words.map((w, idx) => (
        <span
          key={w}
          aria-hidden={idx !== i}
          className="inline-block px-3 pb-2 pt-1 transition-colors duration-300"
          style={{
            gridArea: "1 / 1",
            background: idx === i ? color : "transparent",
            color: idx === i ? textColor : "transparent",
            lineHeight: 0.95,
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
      <section className="px-8 pb-32 pt-12 text-center">
        <h1 className="mx-auto max-w-3xl text-7xl" style={{ letterSpacing: "-0.02em" }}>
          We make <CyclingWord words={cycleWords} colors={sprinkleColors} /> games
        </h1>
        <div className="mt-10 flex items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-0">
            <span className="face-hover">
              <Image
                src="/images/faces/lucas.png"
                alt="Lucas"
                width={220}
                height={220}
                priority
                className="face-bounce h-52 w-52 object-contain md:h-64 md:w-64"
                style={{ ["--rot" as string]: "-6deg", ["--delay" as string]: "120ms" } as React.CSSProperties}
              />
            </span>
          </div>
          <span
            className="x-pop -mt-6 select-none text-7xl font-black leading-none text-[#1f1f1f] md:text-8xl"
            style={{
              WebkitTextStroke: "2px #1f1f1f",
              textShadow:
                "-4px 0 #fff, 4px 0 #fff, 0 -4px #fff, 0 4px #fff, -3px -3px #fff, 3px -3px #fff, -3px 3px #fff, 3px 3px #fff",
            }}
            aria-hidden
          >
            ×
          </span>
          <div className="flex flex-col items-center gap-0">
            <span className="face-hover">
              <span className="inline-block" style={{ transform: "scaleX(-1)" }}>
                <Image
                  src="/images/faces/andrew.png"
                  alt="Andrew"
                  width={220}
                  height={220}
                  priority
                  className="face-bounce h-52 w-52 object-contain md:h-64 md:w-64"
                  style={{ ["--rot" as string]: "-6deg", ["--delay" as string]: "260ms" } as React.CSSProperties}
                />
              </span>
            </span>
          </div>
        </div>
      </section>

      <section id="games" className="mx-auto grid max-w-6xl scroll-mt-20 grid-cols-1 gap-6 px-8 pb-16 md:grid-cols-2">
        {games.map((g, i) => (
          <Link
            key={g.title}
            href={g.href}
            scroll={false}
            className="tilt-tile block overflow-hidden rounded-3xl border-2 border-[#1f1f1f] shadow-[0_6px_0_#1f1f1f]"
            style={{ background: pastels[i], ["--rot" as string]: `${i % 2 ? 0.8 : -0.8}deg` } as React.CSSProperties}
          >
            <div className="aspect-[16/9] overflow-hidden border-b-2 border-[#1f1f1f]">
              <Image src={g.image} alt="" width={500} height={280} priority className="h-full w-full object-cover" />
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
          </Link>
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
        <h2 className="mb-10 text-center text-5xl">Latest posts</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Link
              key={post.title}
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
          ))}
        </div>
      </section>
    </>
  );
}
