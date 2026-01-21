import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Heading from "@/components/Heading";

const TOWNS = [
  {
    id: "tokyo",
    name: "Tokyo",
    description:
      "Tokyo is a mesmerizing blend of futuristic skyscrapers and quiet, ancient shrines. From the neon-lit crossings of Shibuya to the high-end boutiques of Ginza, the city offers an endless energy that redefines urban living. It is a place where tradition meets innovation, creating a unique atmosphere that invites exploration at every single corner.",
    image: "/images/tokyo-image.png",
  },
  {
    id: "kyoto",
    name: "Kyoto",
    description:
      "As the cultural heart of Japan, Kyoto is home to thousands of stunning Buddhist temples, Shinto shrines, and traditional wooden machiya houses. Walking through the Gion district feels like stepping back in time, where the slow pace of life and the beauty of seasonal cherry blossoms create a serene escape from the modern world's constant rush.",
    image: "/images/kyoto-image.avif",
  },
  {
    id: "osaka",
    name: "Osaka",
    description:
      "Known as Japan's kitchen, Osaka is a vibrant port city famous for its daring architecture, street food, and hearty spirit. The Dotonbori district comes alive at night with massive mechanical signs and the aroma of takoyaki, offering a friendly and laid-back contrast to Tokyo’s formality. It is a city that truly celebrates the joy of eating and living well.",
    image: "/images/osaka-image.webp",
  },
  {
    id: "nara",
    name: "Nara",
    description:
      "Nara offers a peaceful retreat into Japan's earliest history, famously known for its vast park where hundreds of wild deer roam freely among visitors. Home to the Great Buddha at Todai-ji, the city is a treasure trove of UNESCO World Heritage sites and tranquil forest paths, providing a spiritual journey that remains deeply connected to the natural landscape.",
    image: "/images/nara-image.webp",
  },
];

export function AboutSection() {
  return (
    <div className="flex w-full max-w-5xl flex-col gap-6 mx-auto p-4 my-20">
      <Tabs defaultValue="tokyo" className="w-full">
        {TOWNS.map((town) => (
          <TabsContent
            key={town.id}
            value={town.id}
            className="mt-0 outline-none"
          >
            <Card className="overflow-hidden border-none shadow-none bg-transparent">
              <CardContent className="p-0 grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side: Image */}
                <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={town.image}
                    alt={town.name}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                </div>

                {/* Right Side: Interactive List & Content */}
                <div className="flex flex-col gap-8">
                  <div className="space-y-6">
                    <Heading title={"Tales of Japan"} />
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {town.description}
                    </p>
                  </div>

                  <TabsList className="bg-transparent h-auto flex-wrap justify-start gap-4 p-0">
                    {TOWNS.map((t) => (
                      <TabsTrigger
                        key={t.id}
                        value={t.id}
                        className="cursor-pointer text-2xl font-bold bg-transparent p-0 data-[state=active]:underline underline-offset-8 decoration-2 shadow-none transition-all"
                      >
                        {t.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
