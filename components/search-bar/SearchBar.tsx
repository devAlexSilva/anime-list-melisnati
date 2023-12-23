'use client'

import Image from "next/image";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    console.log(search)
    setSearch('')
  }
  return (

    <div className="relative max-w-lg w-screen px-4">
      <button onClick={handleSearch}>
        <Image
          src="./searchIcon.svg"
          alt="search icon"
          width={0}
          height={0}
          className="absolute top-0 bottom-0 w-6 h-6 my-auto left-6"
        />
      </button>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Buscar"
        className="w-full py-2 lg:py-3 pl-12 pr-4 text-gray-400 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-orange-400"
      />
    </div>

  );
}