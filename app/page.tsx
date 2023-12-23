import { AnimeCardProps } from "@/components/anime-card/AnimeCard";
import LoadMore from "../components/infinity-scroll/LoadMore";
import { FetchFullAnimeList } from "./fetchAnimeList";

async function Home() {
  const data: AnimeCardProps[] = await FetchFullAnimeList(1)

  return (
    <main className="sm:p-16 md:px-8 py-16 px-4 flex flex-col gap-8">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 grid-cols-2 gap-3">
        {data}
      <LoadMore />
      </section>
    </main>
  );
}

export default Home;
