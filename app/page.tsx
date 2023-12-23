import Highlights from "@/components/highlights/Highlights";

export default async function Home() {

  return (
    <main className="sm:p-16 md:px-8 py-16 px-4 flex flex-col gap-8">
      <h2 className="text-3xl text-white font-bold"><span className="red-gradient">Pop</span>ulares</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 grid-cols-2 gap-3">
        <Highlights page={1} limit={4} order="popularity"/>
      </section>
      <h2 className="text-3xl text-white font-bold">Descobertas</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 grid-cols-2 gap-3">
        <Highlights page={1} limit={4} order="random"/>
      </section>
      <h2 className="text-3xl text-white font-bold">Top<span className="red-gradient"> Rank</span></h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 grid-cols-2 gap-3">
        <Highlights page={1} limit={4} order="ranked"/>
      </section>
    </main>
  );
}

//export default Home;
