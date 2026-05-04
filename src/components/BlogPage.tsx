import type { ReactNode } from "react";
import { BlogGallery } from "./BlogGallery";

type BlogPageProps = {
  title: string;
  children: ReactNode;
};

export function BlogPage({ title, children }: BlogPageProps) {
  return (
    <article className="border-y-2 border-[#1f1f1f] bg-white px-5 pb-10 pt-10 md:rounded-3xl md:border-2 md:px-12 md:shadow-[0_6px_0_#1f1f1f]">
      <h1 className="mb-8 text-4xl leading-tight md:text-5xl">{title}</h1>
      <div className="prose-light">
        <BlogGallery>{children}</BlogGallery>
      </div>
    </article>
  );
}
