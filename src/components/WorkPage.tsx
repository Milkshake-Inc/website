import Image from "next/image";

type WorkPageProps = {
  title: string;
  image: string;
  video?: string;
  logo?: string;
  description: string;
  content: string;
  tag: string;
  fit?: "cover" | "contain";
  playUrl?: string;
};

export function WorkPage({ title, image, video, logo, description, content, tag, fit, playUrl }: WorkPageProps) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  return (
    <article
      className="overflow-hidden border-y-2 border-[#1f1f1f] bg-white md:rounded-3xl md:border-2 md:shadow-[0_6px_0_#1f1f1f]"
    >
      <div
        className="relative aspect-[16/9] overflow-hidden border-b-2 border-[#1f1f1f]"
        style={{ background: "#f5f0e8" }}
      >
        {video ? (
          <video
            src={video}
            poster={image}
            autoPlay
            muted
            loop
            playsInline
            className={`h-full w-full ${fitClass}`}
          />
        ) : (
          <Image src={image} alt={title} width={1600} height={900} priority className={`h-full w-full ${fitClass}`} />
        )}
        {logo && (
          <Image
            src={logo}
            alt={title}
            width={500}
            height={150}
            className="absolute bottom-3 right-3 md:bottom-5 md:right-5"
            style={{ width: "auto", height: "auto", maxWidth: 200, maxHeight: 60, objectFit: "contain" }}
          />
        )}
        {playUrl && (
          <a
            href={playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 left-3 inline-block rounded-full border-2 border-[#1f1f1f] bg-[#25d6ba] px-5 py-2 text-sm font-bold text-white shadow-[0_3px_0_#1f1f1f] transition-transform hover:-translate-y-0.5 hover:bg-[#25b29c] md:bottom-5 md:left-5 md:px-6 md:py-2.5 md:text-base"
          >
            Play Game
          </a>
        )}
      </div>
      <div className="px-5 pb-10 pt-8 md:px-12">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl md:text-4xl">{title}</h1>
          <p className="inline-block whitespace-nowrap rounded-full border-2 border-[#1f1f1f] bg-white px-3 py-0.5 text-xs uppercase tracking-widest">
            {tag}
          </p>
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1f1f1f]">{description}</p>
      </div>
      <div className="px-5 pb-10 md:px-12">
        <hr className="mb-8 border-0 border-t-2 border-dashed border-[#1f1f1f]/40" />
        <div className="whitespace-pre-line text-base leading-relaxed text-[#1f1f1f]">{content}</div>
      </div>
    </article>
  );
}
