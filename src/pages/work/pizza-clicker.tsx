import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage
      title="Pizza Clicker"
      playUrl="https://pizza.milkshake.io/"
      image="/images/work/pizzaclicker_nologo.webp"
      video="/images/work/pizzaclicker.mp4"
      logo="/images/logos/pizzaclicker.webp"
      tag="Idle · Casual"
      description="A cheesy idle clicker. Tap the pizza, hire some help, and watch the numbers get silly."
      content={`Every tap makes pizza. Spend it on rolling pins, nannas, and tomato farms that keep the ovens going while you're away.

Upgrades stack, frenzies kick in, and before long you're counting pizzas in septillions.`}
    />
  );
}
