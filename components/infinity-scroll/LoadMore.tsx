'use client'

import { FetchFullAnimeList } from "@/app/fetchAnimeList";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnimeProp } from "./types"
let page = 2

function LoadMore() {
  const [ref, inView] = useInView({ threshold: 0 })
  const [data, setData] = useState<AnimeProp[]>([])

  useEffect(() => {
    if (inView) {
      FetchFullAnimeList(page).then(res => setData([...data, ...res]))
      page++
    }
  }, [inView])

  return (
    <>
      {data}
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
