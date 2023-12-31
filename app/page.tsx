import Highlights from "@/components/highlights/Highlights";
import Link from "next/link";

export default async function Home() {
  const redirectOptions = [
    { pathname: '/anime', query: { category: 'popularity', title: 'Populares' } },
    { pathname: '/anime', query: { category: 'random', title: 'Descobertas'}},
    { pathname: '/anime', query: { category: 'ranked', title: 'Top Rank' } }
  ]

  return (
    <main className="sm:p-16 md:px-8 py-16 px-4 flex flex-col gap-8">
      <h2 className="text-3xl text-white font-bold"><Link href={redirectOptions[0]}><span className="orange-gradient">Pop</span>ulares</Link></h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 grid-cols-2 gap-3">
        <Highlights page={1} limit={4} order="popularity" />
      </section>
      <h2 className="text-3xl text-white font-bold"><Link href={redirectOptions[1]}>Descobertas</Link></h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 grid-cols-2 gap-3">
        <Highlights page={1} limit={4} order="random" />
      </section>
      <h2 className="text-3xl text-white font-bold"><Link href={redirectOptions[2]}>Top<span className="orange-gradient"> Rank</span></Link></h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 grid-cols-2 gap-3">
        <Highlights page={1} limit={4} order="ranked" />
      </section>
    </main>
  );
}

