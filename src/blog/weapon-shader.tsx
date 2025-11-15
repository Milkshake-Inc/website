import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Creating Weapon Shaders",
  type: "gfx" as const,
};

export default function WeaponShadersPost() {
  return (
    <div className="prose max-w-none">
      <div className="text-gray-600 leading-relaxed">
        <div className="my-6">
          <video
            src="/blog/weapon/0.mp4"
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

        <h3 className="text-xl font-bold mb-3 text-gray-900 mt-8">Step 1. Render Weapon with Stencil</h3>

        <p className="mb-4">
          First, render the weapon model with stencil buffer configuration:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4 font-mono text-sm">
          <div>stencilRef: 1</div>
          <div>stencilZPass: ReplaceStencilOp</div>
        </div>

        <div className="my-6">
          <Image
            src="/blog/weapon/1.jpg"
            alt="Step 1: Render Weapon with Stencil"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 mt-8">Step 2. Render Outline Model</h3>

        <p className="mb-4">
          Scale the model up with a solid color or use a vertex shader to displace the vertices:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4 font-mono text-sm">
          <div>vec3 displacedPosition = position + normal * 0.1;</div>
        </div>

        <div className="my-6">
          <Image
            src="/blog/weapon/2.jpg"
            alt="Step 2: Render Outline Model"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 mt-8">Step 3. Stencil Buffer Magic</h3>

        <p className="mb-4">
          The stencil buffer is used to exclude the base gun model, allowing only outside pixels to be drawn:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4 font-mono text-sm">
          <div>side: DoubleSide,</div>
          <div>stencilWrite: true,</div>
          <div>stencilRef: 1,</div>
          <div>stencilFunc: NotEqualStencilFunc</div>
        </div>

        <div className="my-6">
          <Image
            src="/blog/weapon/3.jpg"
            alt="Step 3: Stencil Buffer Magic"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 mt-8">Step 4. Glow Sprite</h3>

        <p className="mb-4">
          Add a simple 2D sprite image using the same stencil buffer magic to create a glow effect.
        </p>

        <div className="my-6">
          <Image
            src="/blog/weapon/4.jpg"
            alt="Step 4: Glow Sprite"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 mt-8">Step 5. Fresnel</h3>

        <p className="mb-4">
          Add a Fresnel shader to the base weapon. Use PointLight & Bloom for added effect.
        </p>

        <div className="my-6">
          <video
            src="/blog/weapon/5.mp4"
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

