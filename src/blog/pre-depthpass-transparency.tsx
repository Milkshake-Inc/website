import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Pre-DepthPass based transparency",
  type: "gfx" as const,
};

export default function PreDepthPassPost() {
  return (
    <div className="prose max-w-none">
      <div className="text-gray-600 leading-relaxed">

        <div className="my-6">
          <Image
            src="/blog/wow/1.jpg"
            alt="World of Warcraft transparency example"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <p className="mb-4">
          The key insight: even when transparent, characters don't expose internal geometry—just a clean transparent mesh. To understand how they achieve this, we can use a frame debugger to inspect the draw calls.
        </p>

        <h3 className="text-xl font-bold mb-3 text-gray-900 mt-8">Debugging with RenderDoc</h3>

        <p className="mb-4">
          Using an old World of Warcraft client that only supports DirectX 9, modern frame debuggers no longer support DX9. Fortunately, we can use <strong>DXVK</strong> a DX9 to Vulkan translation layer—which allows RenderDoc to inspect the draw calls.
        </p>

        <div className="my-6">
          <Image
            src="/blog/wow/2.jpg"
            alt="RenderDoc debugging setup"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <p className="mb-4">
          Looking at the draw calls, we see that opaque geometry is rendered first. Then, for each transparent object:
        </p>

        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Render depth-only</li>
          <li>Render color-pass</li>
        </ul>

        <div className="my-6">
          <video
            src="/blog/wow/3.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full"
            style={{ maxWidth: "100%" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="mb-4">
          The trick? The depth pre-pass blocks transparent triangles from overdrawing their internals. This ensures that when rendering the color pass, internal geometry is already occluded by the depth buffer.
        </p>

        <h3 className="text-xl font-bold mb-3 text-gray-900 mt-8">Implementing in Three.js</h3>

        <p className="mb-4">
          Now let's replicate this technique in Three.js. First, here's what the default transparency looks like—notice the internal geometry showing through:
        </p>

        <div className="my-6">
          <video
            src="/blog/wow/4.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full"
            style={{ maxWidth: "100%" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <h4 className="text-lg font-bold mb-3 text-gray-900 mt-6">Step 1. Render Opaque</h4>

        <p className="mb-4">
          First, render all opaque geometry:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4 font-mono text-sm">
          <div>camera.layers.set(0);</div>
          <div>renderer.render(scene, camera);</div>
        </div>

        <h4 className="text-lg font-bold mb-3 text-gray-900 mt-6">Step 2. Render Transparent Object to Depth Buffer</h4>

        <p className="mb-4">
          Disable auto-clear and disable the color mask to render only to the depth buffer:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4 font-mono text-sm">
          <div>camera.layers.set(1);</div>
          <div>renderer.autoClear = false;</div>
          <div>const gl = renderer.getContext();</div>
          <div>gl.colorMask(false, false, false, false);</div>
          <div>renderer.render(scene, camera);</div>
        </div>

        <h4 className="text-lg font-bold mb-3 text-gray-900 mt-6">Step 3. Render Transparent Object Color</h4>

        <p className="mb-4">
          Re-enable the color mask and render the transparent object with color:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4 font-mono text-sm">
          <div>gl.colorMask(true, true, true, true);</div>
          <div>renderer.render(scene, camera);</div>
          <div>renderer.autoClear = true;</div>
        </div>

        <p className="mb-4">
          The final result is a clean transparent object without internal geometry showing through!
        </p>

        <div className="my-6">
          <video
            src="/blog/wow/5.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full"
            style={{ maxWidth: "100%" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

