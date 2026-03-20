"use client";

const SideWave = ({ mirrored = false }: { mirrored?: boolean }) => (
  <svg
    viewBox="0 0 120 1000"
    className={`h-full w-20 ${mirrored ? "-scale-x-100" : ""}`}
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <path
      d="M120 0 C40 70, 40 140, 120 210 C200 280, 200 350, 120 420 C40 490, 40 560, 120 630 C200 700, 200 770, 120 840 C40 910, 40 960, 120 1000 L0 1000 L0 0 Z"
      className="fill-zinc-200/60 dark:fill-zinc-800/60"
    />
  </svg>
);

export default function SideSponsors() {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 hidden h-screen lg:block">
        <SideWave />
      </div>
      <div className="pointer-events-none fixed right-0 top-0 z-10 hidden h-screen lg:block">
        <SideWave mirrored />
      </div>
    </>
  );
}