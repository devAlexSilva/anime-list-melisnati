import Image from "next/image";
import { FrameMotionCard } from "./FrameMotionCard";
import { AnimeCardProp } from "./types";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

function AnimeCard({ anime, index }: AnimeCardProp) {

  const transitions = {
    delay: index * 0.25,
    ease: 'easeInOut',
    duration: 0.5
  }
  return (
    <FrameMotionCard
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={transitions}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[35vh] md:h-[45vh]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white md:text-xl text-lg line-clamp-2 w-full">
            {anime.name}
          </h2>
          <div className="py-1 hidden sm:block px-2 bg-[#161921] rounded-sm" title="Tipo de anime">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center" title="Número de episódios">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center" title="Avaliação">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </FrameMotionCard>
  );
}

export default AnimeCard;
