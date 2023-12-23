'use server'

import AnimeCard, { AnimeProp } from "@/components/AnimeCard"

export const FetchFullAnimeList = async (page: number) => {
  const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8`)
  const data: AnimeProp[] = await res.json()
  
  console.log(data)
  return data.map((item, index) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))
}