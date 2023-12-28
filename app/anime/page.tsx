import Highlights from "@/components/highlights/Highlights";
import LoadMore from "@/components/infinity-scroll/LoadMore";
import { animePageProps } from "./types";
import { Metadata } from "next";
import BackToTop from "@/components/BackToTop";
import { FetchAnimeByName } from "../fetchAnimeList";


export const metadata: Metadata = {
  title: "Melisnati - Categorias",
  description: "Lista de Diversos animes separados por categoria" +
    "adicione seus favoritos e compartilhe sua lista com todos"
};


export default async function AnimePage({ searchParams: { name, category, title } }: animePageProps) {
  if (typeof name === 'string') return (
    <main className="sm:p-16 md:px-8 py-16 px-4 flex flex-col gap-8">
      <h2 className="text-3xl text-white font-bold">Resultado para: <span className="red-gradient">{name}</span></h2>
      <section className="grid md:grid-cols-3 sm:gap-10 sm:grid-cols-2 gap-3">
        {FetchAnimeByName(name)}
        <BackToTop />
      </section>
    </main>
  )

  return (
    <main className="sm:p-16 md:px-8 py-16 px-4 flex flex-col gap-8">
      <h2 className="text-3xl text-white font-bold"><span className="red-gradient">{title}</span></h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 grid-cols-2 gap-3">
        <Highlights page={1} limit={4} order={category} />
        <LoadMore category={category} />
        <BackToTop />
      </section>
    </main>
  );
}

