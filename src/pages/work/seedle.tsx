import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage

      title="Seedle.io"
      image="/images/work/seedle_nologo.png"
      logo="/images/logos/seedle.png"
      pastel="#ffe9b3"
      tag="Puzzle · Cozy"
      description="A cozy puzzle game where you place tiles to grow crops, avoid obstacles, and harvest your garden."
      content={`Seedle.io is a cozy tile-placement puzzle game where players strategically place hand tiles onto a garden grid to grow crops and score points. Each round presents a new set of seed, tool, and obstacle tiles that must all be placed before the harvest.

With its charming art style, satisfying gameplay loop, and accessible mechanics, Seedle.io offers a relaxing yet strategic experience. Players must balance risk and reward as they navigate rocks, weather tiles, and limited grid space to cultivate the best garden possible.`}
    />
  );
}
