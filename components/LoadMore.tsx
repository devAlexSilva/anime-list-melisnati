'use client'

import { FetchFullAnimeList } from "@/app/fetchAnimeList";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";

let page = 2

function LoadMore() {
  const [ref, inView] = useInView({ threshold: 0 })
  const [data, setData] = useState<AnimeProp[]>([])

  useEffect(() => {
    if (inView) {
      FetchFullAnimeList(page).then(res => setData([...data, ...res]))
      page++
    }
    console.log('evento "inView" disparado', inView, '\n', page, '\n', data)
  }, [inView])

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
