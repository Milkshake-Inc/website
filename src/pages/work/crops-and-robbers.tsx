import Image from "next/image";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const workItem = {
  title: "Crops And Robbers",
  image: "/images/work/cropsandrobbers.png",
  status: "wip" as const,
  description: "An innovative multiplayer farming game in development that pits farmers against robbers in an exciting strategic battle.",
  content: `Crops And Robbers is an innovative multiplayer farming game currently in development. The game offers a unique twist on the farming genre by pitting farmers against robbers in an exciting strategic battle.

Players can choose to cultivate crops and build their farm, or take on the role of robbers trying to steal the harvest. With real-time multiplayer mechanics, dynamic gameplay, and strategic depth, Crops And Robbers promises to deliver a fresh take on multiplayer gaming.`
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

