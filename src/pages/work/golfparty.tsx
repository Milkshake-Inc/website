import { WorkPage } from "@/components/WorkPage";

export default function Page() {
  return (
    <WorkPage
      title="GolfParty.io"
      playUrl="https://golfparty.io"
      image="/images/work/golfparty_nologo.webp"
      video="/images/work/golfparty.mp4"
      logo="/images/logos/golfparty.webp"
      tag="Multiplayer · Web"
      description="Quick, multiplayer golf you can play in your browser. Hosted on Poki."
      content={`Pick a club, line up your shot, and try to land it before your friends do. GolfParty is built for short games and big swings, with courses that change every round.

Easy to pick up. Hard to put down. Lots of chaos.`}
    />
  );
}
