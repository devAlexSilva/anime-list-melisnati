'use server'

import AnimeCard from "@/components/anime-card/AnimeCard"
import { AnimeProp } from "@/components/anime-card/types"

export const FetchFullAnimeList = async (page: number) => {
  const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=random`)
  const data: AnimeProp[] = await res.json()
  
  console.log(data)
  return data.map((item, index) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))
}