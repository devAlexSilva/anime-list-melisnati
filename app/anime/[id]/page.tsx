import { FetchAnimeById } from "@/app/fetchAnimeList"
import AnimeDetails from "@/components/anime-details/AnimeDetails"

type Params = {
  params: {
    id: string
  }
}

export default async function AnimeDetailsPage({ params }: Params) {
  const anime = FetchAnimeById(params.id)
  return (
    <main className="sm:p-16 md:px-8 py-16 px-4 flex flex-col gap-8">
      <h2 className="text-3xl text-white font-bold"><span className="red-gradient">Resultado da busca</span></h2>
      <section className="grid md:grid-cols-2 gap-8">
        {anime}
      </section>
    </main>
  )
}
