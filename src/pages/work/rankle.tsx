import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage
      title="Rankle"
      playUrl="https://rankle.mun.sh/"
      image="/images/work/rankle_nologo.webp"
      fit="contain"
      logo="/images/logos/rankle.webp"
      tag="Daily · Web"
      description="A daily ranking puzzle where you drag the answers into the right order — only your top 5 are scored."
      content={`Rankle is a quick daily browser game. Each day brings a new prompt — "fastest land animals by top speed", that sort of thing — and a list of candidate answers. Drag them into the order you think is correct, submit, and see how close you came.

Only the top five slots are scored, so picking which answers belong "below the cut" is part of the puzzle. A small daily ritual in the same spirit as Wordle and Connections, with a focus on lists and rankings rather than words.`}
    />
  );
}
