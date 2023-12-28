import Image from "next/image";
import { AnimeCardProp } from "@/components/anime-card/types";


async function AnimeDetails({ anime, index }: AnimeCardProp) {
  return (
    <>
    {console.log(anime)}
      <div className="relative w-full sm:w-3/4 max-md:mx-auto h-[35vh] sm:h-[50vh]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              src="/episodes.svg"
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
              src="/star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex necessitatibus, soluta quibusdam eligendi error sapiente atque illo earum quas labore ipsum distinctio deserunt ipsa, voluptates debitis, nisi autem. Eum, nam?
        </div>
      </div>
    </>
  );
}

export default AnimeDetails;
