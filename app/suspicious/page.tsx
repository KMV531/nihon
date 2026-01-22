"use client";

import { useRouter } from "next/navigation";

const SuspiciousPage = () => {
  const router = useRouter();

  function handleClick() {
    // Set a cookie that expires in 1 hour
    document.cookie = "passed_troll=true; path=/; max-age=3600";

    // Now send them home. The middleware will see the cookie and let them in!
    router.replace("/?loading=true");
  }

  return (
    <main className="fixed inset-0 bg-black z-999 flex flex-col space-y-8 items-center justify-center">
      <div className="flex gap-8 mb-8">
        <img
          src="/images/gifs-checking/genshin-impact.webp"
          alt="dance"
          className="w-30 h-30"
        />
        <img
          src="/images/gifs-checking/pensando.webp"
          alt="dance"
          className="w-30 h-30"
        />
        <img
          src="/images/gifs-checking/sus-suspect.webp"
          alt="dance"
          className="w-30 h-30"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="bg-yellow-400 font-black uppercase skew-x-[-10deg] mb-4 text-4xl">
          HMMM... SUSPICIOUS!
        </h2>

        <p className="text-white font-mono text-xl max-w-md">
          KNOW YOU ARE NOT ON A PC... BUT I CAN&apos;T PROVE IT!
        </p>

        <span className="mt-5 mb-4 text-white/50 italic text-lg capitalize max-w-md">
          (I&apos;ll let you in, but you&apos;re only seeing 20% of my power.
          Get a PC for the full flex.)
        </span>

        <button
          onClick={handleClick}
          className="cursor-pointer font-semibold text-xl border border-gray-400 p-2 rounded-md shadow"
        >
          Let me in anyway
        </button>
      </div>
    </main>
  );
};

export default SuspiciousPage;
