import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage
      title="Burgaagh!"
      image="/images/work/burger_nologo.webp"
      video="/images/work/burger.mp4"
      logo="/images/logos/burger.webp"
      tag="Casual · Mobile"
      description="A burger stacking game we're working on. Time it right, balance it, build the tallest tower you can."
      content={`Stack the patties, fit the lettuce, top it off with the bun. Each level adds something new to throw you off, and the tower wobbles more the higher it gets.

Charming visuals, satisfying physics, and bite-sized levels for quick play.`}
    />
  );
}
