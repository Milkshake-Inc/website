import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Lightmapping in ThreeJS",
  type: "gfx" as const,
};

export default function LightmappingPost() {
  return (
    <div className="prose max-w-none">
      <div className="text-gray-600 leading-relaxed">
        <div className="my-6">
          <Image
            src="/blog/lightmaps/lightmap5.png"
            alt="alt text"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <p className="mb-4">
          <a href="https://github.com/lucas-jones/three-lightmap-baker" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-1 py-0.5 hover:bg-gray-800">
            Three Lightmap Baker
          </a> is a project demonstrating GPU-accelerated lightmap generation in Three.js. Built using excellent libraries including Three Mesh BVH, Three GPU Pathtracer, and XAtlas-Three, it showcases how to bake realistic lighting directly in the browser.
        </p>

        <h3 className="text-xl font-bold mb-3 text-gray-900 mt-8">How it works</h3>

        <ol className="list-decimal list-inside mb-4 space-y-4">
          <li className="mb-4">
            Pass all the geometry into <a href="https://github.com/repalash/xatlas-three/" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-1 py-0.5 hover:bg-gray-800">XAtlas-Three</a> (UV unwrapping library). This will generate a "UV2" attribute on the geometry.
          </li>
          <li className="mb-4">
            Render the geometries vertices in the UV2 space. Create two textures (resolution being the lightmap resolution), using the gl_FragColor to encode <strong>world position</strong> and the <strong>normal</strong>. This is packing Vec3 data into a texture using the RGB channel.
          </li>
        </ol>

        <div className="my-6 space-y-4">
          <Image
            src="/blog/lightmaps/lightmap6.png"
            alt="alt text"
            width={800}
            height={400}
            className="w-full"
          />
          <Image
            src="/blog/lightmaps/lightmap_combo.png"
            alt="alt text"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <p className="mb-4 italic">
          <strong>Visual reference:</strong> Using these textures as the lightmap (using UV2).
        </p>

        <ol className="list-decimal list-inside mb-4 space-y-4" start={3}>
          <li className="mb-4">
            These two textures are effectively a 2D array of World Position & Normals covering the entire geometry.
          </li>
          <li className="mb-4">
            Iterate through each World Position & Normal. Cast rays at each position to calculate incoming light.
          </li>
        </ol>

        <div className="my-6">
          <Image
            src="/blog/lightmaps/lightmap_pixels.png"
            alt="alt text"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <p className="mb-4 italic">
          <strong>Visual reference:</strong> Creating arrows for each world position & the normal
        </p>

        <ol className="list-decimal list-inside mb-4 space-y-4" start={5}>
          <li className="mb-4">
            The Three Mesh BVH library helps improve the performance of raycasting, it also allows raycasting on the GPU (this is super fast).
          </li>
          <li className="mb-4">
            Using A LOT of copy & pasted code from Three GPU Pathtracer to generate light
          </li>
        </ol>


        <div className="my-6 space-y-4">
          <Image
            src="/blog/lightmaps/lightmap7.png"
            alt="alt text"
            width={800}
            height={400}
            className="w-full"
          />
          <Image
            src="/blog/lightmaps/lightmap8.png"
            alt="alt text"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 mt-8">Further Reading / Watching</h3>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <a href="https://www.youtube.com/watch?v=A61S_2swwAc" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-1 py-0.5 hover:bg-gray-800">
              I made a better Ray-Tracing engine
            </a>
          </li>
          <li>
            <a href="https://www.reddit.com/r/GraphicsProgramming/comments/brl22k/high_level_overview_of_a_lightmapping_generation/" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-1 py-0.5 hover:bg-gray-800">
              High level overview of a lightmapping generation process
            </a>
          </li>
          <li>
            <a href="https://ndotl.wordpress.com/2018/08/29/baking-artifact-free-lightmaps/" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-1 py-0.5 hover:bg-gray-800">
              Baking artifact-free lightmaps on the GPU
            </a>
          </li>
          <li>
            <a href="http://david-westreicher.github.io/2014/05/31/radiosity/" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-1 py-0.5 hover:bg-gray-800">
              Radiosity Baker
            </a>
          </li>
          <li>
            <a href="https://knarkowicz.wordpress.com/2014/07/20/lightmapping-in-anomaly-2-mobile/" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-1 py-0.5 hover:bg-gray-800">
              Lightmapping in Anomaly 2 mobile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

