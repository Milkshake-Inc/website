import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage
      title="Rankle"
      playUrl="https://rankle.mun.sh/"
      image="/images/work/rankle_nologo.webp"
      video="/images/work/rankle.mp4"
      fit="contain"
      logo="/images/logos/rankle.webp"
      tag="Daily · Web"
      description="A daily ranking puzzle. Drag the answers into the right order and see how you did."
      content={`Each day there's a new prompt and a list of answers. "Fastest land animals by top speed", that kind of thing. Drag them into the order you think is right, hit submit, see how close you got.

Only your top 5 count. Deciding what to leave below the cut is half the puzzle.`}
    />
  );
}
