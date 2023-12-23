import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search-bar/SearchBar";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat py-4 px-4 sm:p-8 lg:px-8">
      <div className="flex justify-center mb-8">
        <Link href='/'>
          <Image
            src="./logo.svg"
            alt="logo"
            width={0}
            height={0}
            className="object-contain w-12 h-12 lg:w-16 lg:h-16 sm:absolute sm:left-6"
          />
        </Link>
        <SearchBar />
      </div>
      <div className="flex justify-center lg:items-center max-lg:flex-col w-full">
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
            Descubra Diversos
            <span className="orange-gradient"> Animes </span> &
            <span className="orange-gradient"> Compartilhe </span>
            com Todos
          </h1>
        </div>
        <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
          <Image src="/c2_lelouch.png" alt="anime" fill className="object-contain" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
