import Link from "next/link";
import type { ReactNode } from "react";

type BlogPageProps = {
  title: string;
  children: ReactNode;
};

export function BlogPage({ title, children }: BlogPageProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-12">
      <article className="rounded-3xl border-2 border-[#1f1f1f] bg-white px-8 pb-10 pt-10 shadow-[0_6px_0_#1f1f1f] md:px-12">
        <h1 className="mb-8 text-4xl leading-tight md:text-5xl">{title}</h1>
        <div className="prose-light">{children}</div>
        <div className="mt-12 border-t-2 border-dashed border-[#1f1f1f]/15 pt-6">
          <Link
            href="/#blog"
            className="inline-block rounded-full border-2 border-[#1f1f1f] bg-[#25d6ba] px-5 py-2 text-sm font-medium text-white shadow-[0_3px_0_#1f1f1f] hover:bg-[#1f1f1f]"
          >
            ← Back to posts
          </Link>
        </div>
      </article>
    </main>
  );
}
