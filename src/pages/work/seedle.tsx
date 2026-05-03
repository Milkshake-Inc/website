import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage
      title="Seedle.io"
      playUrl="https://seedle.io"
      image="/images/work/seedle_nologo.webp"
      video="/images/work/seedle.mp4"
      fit="contain"
      logo="/images/logos/seedle.webp"
      tag="Puzzle · Cozy"
      description="A cosy puzzle about growing things. Place your tiles, dodge the rocks, harvest your garden."
      content={`Each round you get a hand of seeds, tools, and a few things in the way. Lay them out on the grid, set up combos, and pick up points when the harvest comes round.

Easy to pick up, with just enough to think about. A nice one to play with a cup of tea.`}
    />
  );
}
