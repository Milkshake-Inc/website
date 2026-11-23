import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage
      title="Crops And Robbers"
      playUrl="https://farm.milkshake.io/"
      image="/images/work/cropsandrobbers_nologo.webp"
      video="/images/work/cropsandrobbers.mp4"
      logo="/images/logos/cropsandrobbers.webp"
      tag="Strategy · Multiplayer"
      description="A multiplayer farming game. Farmers grow. Robbers steal. Things get heated."
      content={`Pick a side. Farmers spend the round growing crops and defending their land. Robbers spend it sneaking in and grabbing the harvest before anyone notices.

Real-time, tactical, and just the right amount of chaotic.`}
    />
  );
}
