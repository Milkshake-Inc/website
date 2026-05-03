import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage

      title="GolfParty.io"
      image="/images/work/golfparty_nologo.webp"
      video="/images/work/golfparty.mp4"
      logo="/images/logos/golfparty.webp"
      pastel="#ffd6e0"
      tag="Multiplayer · Web"
      description="A fast-paced multiplayer golf game hosted on Poki where players compete in real-time matches."
      content={`GolfParty.io is a fast-paced multiplayer golf game that brings friends together for competitive rounds. Hosted on Poki's platform, the game features intuitive controls and dynamic courses that make each match exciting and unpredictable.

The game combines classic golf mechanics with modern multiplayer fun, allowing players to compete in real-time matches. With smooth gameplay and engaging competitive elements, GolfParty.io offers an accessible yet challenging golf experience for players of all skill levels.`}
    />
  );
}
