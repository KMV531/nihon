"use client";

import CardSwap, { Card } from "@/components/CardSwap";
import Heading from "@/components/Heading";
import Image from "next/image";

const CulturalHighlightcards = [
  {
    image: "/images/japanese-food-image.jpg",
    title: "Culinary Journeys",
    description:
      "Go beyond the sushi roll—discover the soul-warming depths of Ramen and the street-side sizzle of Takoyaki.",
  },
  {
    image: "/images/japanese-sake-image.webp",
    title: "The Sake Tradition",
    description:
      "Uncover the delicate craftsmanship behind Japan's national drink in historical brewing districts.",
  },
  {
    image: "/images/japanese-street-food-image.jpg",
    title: "Street Food Culture",
    description:
      "Experience the vibrant energy of night markets where sizzling grills offer a taste of local life.",
  },
];

const CulturalHighlights = () => {
  return (
    <main className="max-w-5xl mx-auto flex items-center justify-between">
      <Heading other="Essential Highlights: Culture & Landmarks" />
      <div style={{ height: "450px", position: "relative" }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          {CulturalHighlightcards.map((CulturalHighlightcard) => (
            <Card className="p-4" key={CulturalHighlightcard.title}>
              <h3 className="font-bold">{CulturalHighlightcard.title}</h3>
              <p className="font-semibold">
                {CulturalHighlightcard.description}
              </p>
              <Image
                src={CulturalHighlightcard.image}
                alt={CulturalHighlightcard.title}
                width={450}
                height={100}
                className="object-cover rounded-md mt-2"
              />
            </Card>
          ))}
        </CardSwap>
      </div>
    </main>
  );
};

export default CulturalHighlights;
