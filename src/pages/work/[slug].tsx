import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const workItems: Record<string, {
  title: string;
  image: string;
  status: "live" | "wip";
  description: string;
  content: string;
}> = {
  "golfparty": {
    title: "GolfParty.io",
    image: "/images/work/golfparty.png",
    status: "live",
    description: "A fast-paced multiplayer golf game hosted on Poki where players compete in real-time matches.",
    content: `GolfParty.io is a fast-paced multiplayer golf game that brings friends together for competitive rounds. Hosted on Poki's platform, the game features intuitive controls and dynamic courses that make each match exciting and unpredictable.

The game combines classic golf mechanics with modern multiplayer fun, allowing players to compete in real-time matches. With smooth gameplay and engaging competitive elements, GolfParty.io offers an accessible yet challenging golf experience for players of all skill levels.`
  },
  "crops-and-robbers": {
    title: "Crops And Robbers",
    image: "/images/work/cropsandrobbers.png",
    status: "wip",
    description: "An innovative multiplayer farming game in development that pits farmers against robbers in an exciting strategic battle.",
    content: `Crops And Robbers is an innovative multiplayer farming game currently in development. The game offers a unique twist on the farming genre by pitting farmers against robbers in an exciting strategic battle.

Players can choose to cultivate crops and build their farm, or take on the role of robbers trying to steal the harvest. With real-time multiplayer mechanics, dynamic gameplay, and strategic depth, Crops And Robbers promises to deliver a fresh take on multiplayer gaming.`
  },
  "burgaagh": {
    title: "Burgaagh!",
    image: "/images/work/burgaagh.png",
    status: "wip",
    description: "A delightful casual burger stacking game in development where players stack burgers with precision and style.",
    content: `Burgaagh! is a delightful casual burger stacking game currently in development. Players stack burgers with precision and style, creating the perfect burger tower while navigating increasingly challenging levels.

Featuring charming visuals, satisfying physics, and progressively challenging gameplay, Burgaagh! offers a relaxing yet engaging experience. Perfect for quick gaming sessions, the game combines skill-based stacking mechanics with fun, lighthearted gameplay that appeals to players of all ages.`
  }
};

export default function WorkItem() {
  const router = useRouter();
  const { slug } = router.query;
  
  const workItem = slug && typeof slug === "string" ? workItems[slug] : null;

  if (!workItem) {
    return (
      <div className={`${jetbrainsMono.variable} min-h-screen bg-stone-50 flex items-center justify-center`} style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
        <div className="text-center">
          <h1 className="text-2xl font-black mb-4 text-gray-900">Work item not found</h1>
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

