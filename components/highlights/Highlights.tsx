import { FetchFullAnimeList, fetchAnimeProps } from "@/app/fetchAnimeList"

export default async function Highlights(options: fetchAnimeProps) {
  const data = await FetchFullAnimeList(options)
  
  return (
    data
  )
}
