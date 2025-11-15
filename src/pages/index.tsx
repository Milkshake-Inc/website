import Image from "next/image";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { metadata as lightmappingMetadata } from "@/blog/lightmapping-threejs";
import { metadata as preDepthPassMetadata } from "@/blog/pre-depthpass-transparency";
import { metadata as weaponShadersMetadata } from "@/blog/weapon-shader";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default function Home() {
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

          <section id="work" className="w-full mb-20">
            <h2 className="text-2xl font-black mb-10 text-gray-900">
              <a href="#work" className="hover:underline">Work</a>
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li id="golfparty" className="flex items-center">
                <span className="mr-3 px-2 py-1 text-xs font-normal bg-green-200 rounded text-black w-12 text-center">LIVE</span>
                <Link href="/work/golfparty" prefetch={true} className="hover:underline text-gray-900">GolfParty.io</Link>
              </li>
              <li id="crops-and-robbers" className="flex items-center">
                <span className="mr-3 px-2 py-1 text-xs font-normal bg-gray-200 rounded text-black w-12 text-center">WIP</span>
                <Link href="/work/crops-and-robbers" prefetch={true} className="hover:underline text-gray-900">Crops And Robbers</Link>
              </li>
              <li id="burgaagh" className="flex items-center">
                <span className="mr-3 px-2 py-1 text-xs font-normal bg-gray-200 rounded text-black w-12 text-center">WIP</span>
                <Link href="/work/burgaagh" prefetch={true} className="hover:underline text-gray-900">Burgaagh!</Link>
              </li>
            </ul>
          </section>

          <section id="blog" className="w-full mb-20">
            <h2 className="text-2xl font-black mb-10 text-gray-900">
              <a href="#blog" className="hover:underline">Blog</a>
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li id="lightmapping-threejs" className="flex items-center">
                <span className={`mr-3 px-2 py-1 text-xs font-normal rounded text-black w-12 text-center ${
                  lightmappingMetadata.type === "gfx" ? "bg-purple-200" : "bg-blue-200"
                }`}>
                  {lightmappingMetadata.type === "gfx" ? "GFX" : "INFR"}
                </span>
                <Link href="/blog/lightmapping-threejs" prefetch={true} className="hover:underline text-gray-900">{lightmappingMetadata.title}</Link>
              </li>
              <li id="pre-depthpass-transparency" className="flex items-center">
                <span className={`mr-3 px-2 py-1 text-xs font-normal rounded text-black w-12 text-center ${
                  preDepthPassMetadata.type === "gfx" ? "bg-purple-200" : "bg-blue-200"
                }`}>
                  {preDepthPassMetadata.type === "gfx" ? "GFX" : "INFR"}
                </span>
                <Link href="/blog/pre-depthpass-transparency" prefetch={true} className="hover:underline text-gray-900">{preDepthPassMetadata.title}</Link>
              </li>
              <li id="weapon-shader" className="flex items-center">
                <span className={`mr-3 px-2 py-1 text-xs font-normal rounded text-black w-12 text-center ${
                  weaponShadersMetadata.type === "gfx" ? "bg-purple-200" : "bg-blue-200"
                }`}>
                  {weaponShadersMetadata.type === "gfx" ? "GFX" : "INFR"}
                </span>
                <Link href="/blog/weapon-shader" prefetch={true} className="hover:underline text-gray-900">{weaponShadersMetadata.title}</Link>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}
