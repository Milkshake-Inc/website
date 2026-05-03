import Image from "next/image";

type WorkPageProps = {
  title: string;
  image: string;
  video?: string;
  logo?: string;
  pastel: string;
  description: string;
  content: string;
  tag: string;
  fit?: "cover" | "contain";
};

export function WorkPage({ title, image, video, logo, pastel, description, content, tag, fit }: WorkPageProps) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  return (
    <article
      className="overflow-hidden border-y-2 border-[#1f1f1f] md:rounded-3xl md:border-2 md:shadow-[0_6px_0_#1f1f1f]"
      style={{ background: pastel }}
    >
      <div
        className="aspect-[16/9] overflow-hidden border-b-2 border-[#1f1f1f]"
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
      </div>
      <div className="px-5 pb-10 pt-8 md:px-12">
        <p className="inline-block rounded-full border-2 border-[#1f1f1f] bg-white px-3 py-0.5 text-xs uppercase tracking-widest">
          {tag}
        </p>
        {logo ? (
          <Image
            src={logo}
            alt={title}
            width={500}
            height={150}
            className="mt-6"
            style={{ width: "auto", height: "auto", maxWidth: 360, maxHeight: 100, objectFit: "contain" }}
          />
        ) : (
          <h1 className="mt-6 text-5xl md:text-6xl">{title}</h1>
        )}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1f1f1f]">{description}</p>
      </div>
      <div className="border-t-2 border-[#1f1f1f] bg-white px-5 pb-10 pt-8 md:px-12">
        <div className="whitespace-pre-line text-base leading-relaxed text-[#1f1f1f]">{content}</div>
      </div>
    </article>
  );
}
