"use client";

import Image from "next/image";

export default function SideSponsors() {
  // Placeholder images - replace with actual sponsor logos later
  const leftSponsors = [
    "/sponsors/Logo_Schunk.png",
    "/sponsors/Logo_Schunk.png",
    "/sponsors/Logo_Schunk.png",
  ];

  const rightSponsors = [
    "/sponsors/Logo_Schunk.png",
    "/sponsors/Logo_Schunk.png",
    "/sponsors/Logo_Schunk.png",
  ];

  return (
    <>
      {/* Desktop: Left side sponsors */}
      <div className="hidden lg:fixed lg:flex lg:flex-col lg:gap-8 lg:left-12 lg:top-1/2 lg:-translate-y-1/2 lg:z-10">
        {leftSponsors.map((src, index) => (
          <div
            key={`left-${index}`}
            className="w-32 h-32 relative"
            style={{
              filter: "grayscale(100%)",
            }}
          >
            <Image
              src={src}
              alt={`Sponsor ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      {/* Desktop: Right side sponsors */}
      <div className="hidden lg:fixed lg:flex lg:flex-col lg:gap-8 lg:right-12 lg:top-1/2 lg:-translate-y-1/2 lg:z-10">
        {rightSponsors.map((src, index) => (
          <div
            key={`right-${index}`}
            className="w-32 h-32 relative"
            style={{
              filter: "grayscale(100%)",
            }}
          >
            <Image
              src={src}
              alt={`Sponsor ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </>
  );
}