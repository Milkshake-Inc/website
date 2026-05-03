import type { ReactNode } from "react";

type BlogPageProps = {
  title: string;
  children: ReactNode;
};

export function BlogPage({ title, children }: BlogPageProps) {
  return (
    <article className="rounded-3xl border-2 border-[#1f1f1f] bg-white px-8 pb-10 pt-10 shadow-[0_6px_0_#1f1f1f] md:px-12">
      <h1 className="mb-8 text-4xl leading-tight md:text-5xl">{title}</h1>
      <div className="prose-light">{children}</div>
    </article>
  );
}
