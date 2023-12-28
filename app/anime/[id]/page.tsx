import { FetchAnimeById } from "@/app/fetchAnimeList"

type Params = {
  params: {
    id: string
  }
}

export default async function AnimeDetails({ params }: Params) {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 grid-cols-2 gap-3">
      {FetchAnimeById(params.id)}
    </section>
  )
}
