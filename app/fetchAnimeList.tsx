'use server'

import AnimeCard from "@/components/anime-card/AnimeCard"
import { AnimeProp } from "@/components/anime-card/types"

export type fetchAnimeProps = {
  page: number,
  limit?: number,
  order?: string
}
export const FetchFullAnimeList = async ({ page, limit, order }:fetchAnimeProps) => {
  const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=${order}`)
  const data: AnimeProp[] = await res.json()
  
  console.log(data)
  return data.map((item, index) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))
}