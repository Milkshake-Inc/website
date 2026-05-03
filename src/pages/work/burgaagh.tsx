import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage

      title="Burgaagh!"
      image="/images/work/burger_nologo.webp"
      video="/images/work/burger.mp4"
      logo="/images/logos/burger.webp"
      pastel="#cfe4ff"
      tag="Casual · Mobile"
      description="A delightful casual burger stacking game in development where players stack burgers with precision and style."
      content={`Burgaagh! is a delightful casual burger stacking game currently in development. Players stack burgers with precision and style, creating the perfect burger tower while navigating increasingly challenging levels.

Featuring charming visuals, satisfying physics, and progressively challenging gameplay, Burgaagh! offers a relaxing yet engaging experience. Perfect for quick gaming sessions, the game combines skill-based stacking mechanics with fun, lighthearted gameplay that appeals to players of all ages.`}
    />
  );
}
