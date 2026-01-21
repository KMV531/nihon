"use client";

import Heading from "@/components/Heading";
import InfiniteMenu from "@/components/InfiniteMenu";

const items = [
  {
    image: "/images/myth-1.jpg",
    link: "https://google.com/",
    title: "Myth 1: It’s all just raw fish.",
    description:
      "The Reality: Japanese cuisine is incredibly diverse. From the world-renowned marbled Wagyu beef and crispy Tempura to the soul-warming comfort of Japanese Curry, there is a vast world of flavor beyond sushi.",
  },
  {
    image: "/images/myth-2.webp",
    link: "https://google.com/",
    title: "Myth 2: It’s a high-tech utopia everywhere.",
    description:
      "The Reality: While futuristic in some ways, Japan deeply treasures tradition. You’ll still find a heavy reliance on physical paper, hand-carved official stamps (hanko), and a strong preference for cash over digital payments in many local shops.",
  },
  {
    image: "/images/myth-3.jpg",
    link: "https://google.com/",
    title: "Myth 3: Japanese people are cold or distant.",
    description:
      "The Reality: What may seem like distance is actually a profound respect for personal space and extreme politeness. The concept of Omotenashi (wholehearted hospitality) ensures that guests are treated with incredible warmth and care.",
  },
  {
    image: "/images/myth-4.jpg",
    link: "https://google.com/",
    title: "Myth 4: Japan is an expensive destination.",
    description:
      "The Reality: While luxury exists, Japan is surprisingly affordable for travelers. Between high-quality 'Konbini' (convenience store) meals, affordable business hotels, and the Japan Rail Pass, you can experience the country on a very reasonable budget.",
  },
  {
    image: "/images/myth-5.webp",
    link: "https://google.com/",
    title: "Myth 5: Tokyo is the only place worth visiting.",
    description:
      "The Reality: Tokyo is just the beginning. The Japanese Alps offer world-class skiing, Okinawa boasts tropical white-sand beaches, and rural villages like Shirakawa-go look like they’ve been plucked straight from a fairy tale.",
  },
  {
    image: "/images/myth-6.jpg",
    link: "https://google.com/",
    title: "Myth 6: Everyone speaks English in the big cities.",
    description:
      "The Reality: Despite being a global hub, English proficiency can vary. However, the Japanese people are famously helpful—between translation apps, intuitive signage, and the local's willingness to use gestures to guide you, navigating is a breeze.",
  },
  {
    image: "/images/myth-7.jpg",
    link: "https://google.com/",
    title: "Myth 7: Japan is always crowded and cramped.",
    description:
      "The Reality: While the Shibuya Crossing is iconic, over 70% of Japan is actually mountainous and forested. You can travel just an hour outside of the major hubs to find vast national parks, quiet coastal villages, and wide-open hiking trails where you won't see another soul for miles.",
  },
  {
    image: "/images/myth-8.jpg",
    link: "https://google.com/",
    title: "Myth 8: The culture is purely traditional or purely modern.",
    description:
      "The Reality: Japan’s true identity lies in the seamless overlap of both. It is perfectly normal to see a centuries-old Shinto shrine nestled between two glass skyscrapers, or a priest using a smartphone to coordinate a traditional festival. It isn't a conflict of eras; it is a harmonious coexistence.",
  },
];

const DebunkingMyths = () => {
  return (
    <main className="hidden lg:block my-40 mask-[linear-gradient(to_bottom,transparent,black_20%,black_75%,transparent)]">
      <section>
        <Heading
          title="DEBUGGING THE CLICHÉS"
          title2="— Kimari monku o debaggu suru"
          spacing={true}
        />
        <div style={{ height: "100vh", position: "relative" }}>
          <InfiniteMenu items={items} scale={1} />
        </div>
      </section>
    </main>
  );
};

export default DebunkingMyths;
