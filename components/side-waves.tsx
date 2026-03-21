"use client";

const randomFromSeed = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const WAVE_WIDTH = 50;
const WAVE_HEIGHT = 500;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const buildWavePath = ({
  width,
  height,
  cycles,
  seed,
}: {
  width: number;
  height: number;
  cycles: number;
  seed: number;
}) => {
  const centerX = width / 2;
  const cycleHeight = height / cycles;
  const halfCycle = cycleHeight / 2;
  let d = `M ${centerX.toFixed(2)} 0`;

  for (let cycle = 0; cycle < cycles; cycle += 1) {
    const y0 = cycle * cycleHeight;
    const yMid = y0 + halfCycle;
    const y1 = y0 + cycleHeight;

    const leftPull = 14 + randomFromSeed(seed + cycle * 1.31) * 8;
    const rightPull = 14 + randomFromSeed(seed + cycle * 1.93 + 8) * 8;
    const firstTension = 0.22 + randomFromSeed(seed + cycle * 2.37 + 13) * 0.1;
    const secondTension = 0.22 + randomFromSeed(seed + cycle * 2.91 + 21) * 0.1;
    const xDrift = (randomFromSeed(seed + cycle * 3.43 + 34) - 0.5) * 2;

    const leftX = clamp(centerX - leftPull, 2, width - 2);
    const rightX = clamp(centerX + rightPull, 2, width - 2);
    const centerMidX = clamp(centerX + xDrift, 2, width - 2);
    const centerEndX = clamp(centerX - xDrift * 0.7, 2, width - 2);

    const c1y = y0 + halfCycle * firstTension;
    const c2y = y0 + halfCycle * (1 - firstTension);
    d += ` C ${leftX.toFixed(2)} ${c1y.toFixed(2)}, ${leftX.toFixed(2)} ${c2y.toFixed(2)}, ${centerMidX.toFixed(2)} ${yMid.toFixed(2)}`;

    const c3y = yMid + halfCycle * secondTension;
    const c4y = yMid + halfCycle * (1 - secondTension);
    d += ` C ${rightX.toFixed(2)} ${c3y.toFixed(2)}, ${rightX.toFixed(2)} ${c4y.toFixed(2)}, ${centerEndX.toFixed(2)} ${y1.toFixed(2)}`;
  }

  return d;
};

const wavePath = buildWavePath({
  width: WAVE_WIDTH,
  height: WAVE_HEIGHT,
  cycles: 3,
  seed: 7,
});

const SideWave = ({ mirrored = false }: { mirrored?: boolean }) => (
  <svg
    viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
    preserveAspectRatio="none"
    className={`h-full w-[50px] ${mirrored ? "-scale-x-100" : ""}`}
    aria-hidden="true"
  >
    <path
      d={wavePath}
      className="stroke-black dark:stroke-white"
      strokeWidth={2.25}
      fill="none"
    />
  </svg>
);

export default function SideWaves() {
  return (
    <>
      <div className="pointer-events-none absolute left-6 top-0 z-10 hidden h-full lg:block">
        <SideWave />
      </div>
      <div className="pointer-events-none absolute right-6 top-0 z-10 hidden h-full lg:block">
        <SideWave mirrored />
      </div>
    </>
  );
}