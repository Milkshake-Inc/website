import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage
      title="TurboTown"
      playUrl="https://turbotown.milkshake.io/"
      image="/images/work/turbotown_nologo.webp"
      video="/images/work/turbotown.mp4"
      logo="/images/logos/turbotown.webp"
      tag="Racing · Multiplayer"
      description="A multiplayer driving game we're working on. Cruise a cheerful little town, race your mates, and save up for something faster."
      content={`Pick a car and head out. Drive round the plaza, off into the hills, and onto the race flags for a quick street race.

Win races, earn coins, unlock new cars, and make a few friends along the way. Still in development.`}
    />
  );
}
