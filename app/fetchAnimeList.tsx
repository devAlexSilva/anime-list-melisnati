'use server'

import AnimeCard from "@/components/anime-card/AnimeCard"
import { AnimeProp } from "@/components/anime-card/types"
import AnimeDetails from "@/components/anime-details/AnimeDetails"

export type fetchAnimeProps = {
  page: number,
  limit?: number,
  order?: string
}

export const FetchFullAnimeList = async ({ page, limit, order }: fetchAnimeProps) => {
  const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=${order}`)
  const data: AnimeProp[] = await res.json()

  return data.map((item, index) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))
}

export const FetchAnimeById = async (id: string) => {
  const res = await fetch(`https://shikimori.one/api/animes?ids=${id}`)
  const data: AnimeProp[] = await res.json()

  return <AnimeDetails key={data[0]?.id} anime={data[0]} index={1}/>
}

export const FetchAnimeByName = async (name: string) => {
  const res = await fetch(`https://shikimori.one/api/animes?search=${name}`)
  const data: AnimeProp[] = await res.json()

  return <AnimeDetails key={data[0]?.id} anime={data[0]} index={1}/>
}