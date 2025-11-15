import React from "react";
import Image from "next/image";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import PreDepthPassPost, { metadata as preDepthPassMetadata } from "@/blog/pre-depthpass-transparency";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default function BlogPost() {
  return (
    <div
      className={`${jetbrainsMono.variable} min-h-screen bg-stone-50`}
      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
    >
      <main className="flex min-h-screen items-start justify-center px-6 py-16">
        <div className="flex flex-col items-center max-w-2xl w-full">
          <Image
            src="/icons/milkshakelogo.png"
            alt="Milkshake.io logo"
            width={400}
            height={200}
            priority
            className="mb-12 mt-16"
            style={{ width: "auto", height: "auto" }}
          />

          <article className="w-full">
            <h1 className="text-3xl font-black text-gray-900 mb-8">{preDepthPassMetadata.title}</h1>

            <PreDepthPassPost />

            <div className="mt-12">
              <Link href="/#blog" className="text-gray-600 hover:underline">← Back to Blog</Link>
            </div>
          </article>

        </div>
      </main>
    </div>
  );
}

