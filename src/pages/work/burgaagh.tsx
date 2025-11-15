import Image from "next/image";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const workItem = {
  title: "Burgaagh!",
  image: "/images/work/burgaagh.png",
  status: "wip" as const,
  description: "A delightful casual burger stacking game in development where players stack burgers with precision and style.",
  content: `Burgaagh! is a delightful casual burger stacking game currently in development. Players stack burgers with precision and style, creating the perfect burger tower while navigating increasingly challenging levels.

Featuring charming visuals, satisfying physics, and progressively challenging gameplay, Burgaagh! offers a relaxing yet engaging experience. Perfect for quick gaming sessions, the game combines skill-based stacking mechanics with fun, lighthearted gameplay that appeals to players of all ages.`
};

export default function WorkItem() {
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
            <h1 className="text-3xl font-black mb-8 text-gray-900">{workItem.title}</h1>

            <Image
              src={workItem.image}
              alt={workItem.title}
              width={800}
              height={400}
              priority
              className="mb-8 w-full"
            />

            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">{workItem.description}</p>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">{workItem.content}</div>
            </div>

            <div className="mt-12">
              <Link href="/#work" className="text-gray-600 hover:underline">← Back to Work</Link>
            </div>
          </article>

        </div>
      </main>
    </div>
  );
}

