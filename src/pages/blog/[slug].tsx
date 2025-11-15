import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { JetBrains_Mono } from "next/font/google";
import LightmappingPost, { metadata as lightmappingMetadata } from "@/blog/lightmapping-threejs";
import PreDepthPassPost, { metadata as preDepthPassMetadata } from "@/blog/pre-depthpass-transparency";
import WeaponShadersPost, { metadata as weaponShadersMetadata } from "@/blog/weapon-shader";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

type BlogPostMetadata = {
  title: string;
  type: "gfx" | "infra";
};

type BlogPostComponent = React.ComponentType;

const blogPosts: Record<string, { metadata: BlogPostMetadata; Component: BlogPostComponent }> = {
  "lightmapping-threejs": { metadata: lightmappingMetadata, Component: LightmappingPost },
  "pre-depthpass-transparency": { metadata: preDepthPassMetadata, Component: PreDepthPassPost },
  "weapon-shader": { metadata: weaponShadersMetadata, Component: WeaponShadersPost },
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  const post = slug && typeof slug === "string" ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className={`${jetbrainsMono.variable} min-h-screen bg-stone-50 flex items-center justify-center`} style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
        <div className="text-center">
          <h1 className="text-2xl font-black mb-4 text-gray-900">Blog post not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">Back to home</Link>
        </div>
      </div>
    );
  }

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
            <h1 className="text-3xl font-black text-gray-900 mb-8">{post.metadata.title}</h1>

            <post.Component />

            <div className="mt-12">
              <Link href="/#blog" className="text-gray-600 hover:underline">← Back to Blog</Link>
            </div>
          </article>

        </div>
      </main>
    </div>
  );
}

