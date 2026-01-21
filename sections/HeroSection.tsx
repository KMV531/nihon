"use client";

import ShinyText from "@/components/ShinyText";
import Image from "next/image";

const places = [
  {
    image: "/icons/tokyo.png",
    subtitle: "GET INTO THE FUTURE IN",
    title: "Tokyo",
  },
  {
    image: "/icons/kyoto.png",
    subtitle: "TURN BACK THE TIME IN",
    title: "Kyoto",
  },
  {
    image: "/icons/osaka.png",
    subtitle: "GET IMPRESSED BY",
    title: "Osaka",
  },
  {
    image: "/icons/nara.png",
    subtitle: "GET INTO THE FUTURE IN",
    title: "Nara",
  },
];

const HeroSection = () => {
  return (
    <main
      className="relative h-181.25 bg-cover bg-center mask-[linear-gradient(to_bottom,transparent,black_0%,black_75%,transparent)]"
      style={{
        backgroundImage: "url('/images/japan-hero-image.png')",
      }}
    >
      <section className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-none font-bold tracking-wide lg:my-32">
          <ShinyText
            text="JAPAN"
            speed={2}
            delay={0}
            color="#ffffff"
            shineColor="#BC0030"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </h1>
        <div className="hidden lg:flex items-center justify-between gap-32">
          {places.map((place) => (
            <div key={place.title}>
              <div className="flex items-center justify-center gap-2">
                <div>
                  <Image
                    src={place.image}
                    alt={place.title}
                    width={70}
                    height={70}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{place.subtitle}</h3>
                  <h2 className="font-bold">{place.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
