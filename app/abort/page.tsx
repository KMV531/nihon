"use client";

import { useRouter } from "next/navigation";

const AbortScreen = () => {
  const router = useRouter();

  function handleClick() {
    router.replace("/suspicious");
  }

  return (
    <main className="fixed inset-0 bg-black z-999 flex flex-col space-y-8 items-center justify-center">
      <div className="flex gap-8 mb-8">
        <img
          src="/images/mobile-gifs/anime.gif"
          alt="dance"
          className="w-30 h-30"
        />
        <img
          src="/images/mobile-gifs/cute-anime-girl.gif"
          alt="dance"
          className="w-30 h-30"
        />
        <img
          src="/images/mobile-gifs/hikari-shupogaki.gif"
          alt="dance"
          className="w-30 h-30"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="bg-yellow-400 font-black uppercase skew-x-[-10deg] mb-4 text-4xl">
          ABORT MISSION!
        </h2>

        <p className="text-white font-mono text-xl max-w-md">
          ERROR 403: SCREEN TOO SMALL, DEVELOPER&apos;S EGO TOO BIG.
        </p>

        <span className="mt-5 mb-4 text-white/50 italic max-w-xs text-lg capitalize">
          (This experience was built for a PC. Trust me.)
        </span>

        <button
          onClick={handleClick}
          className="cursor-pointer font-semibold text-xl border border-gray-400 p-2 rounded-md shadow"
        >
          I&apos;m on a PC
        </button>
      </div>
    </main>
  );
};

export default AbortScreen;
