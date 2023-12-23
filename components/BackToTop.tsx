'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function BackToTop(): JSX.Element {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 800 ||
      document.documentElement.scrollTop > 800
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <>
          <button
            type="button"
            onClick={backToTop}
            className={` ${showButton ? `inline-block` : `hidden`
              } fixed bottom-[30px] right-[40px] p-3 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out`}
          >
            <Image
              src="./arrowTop.svg"
              alt="arrow top"
              width={0}
              height={0}
              className="w-6 h-6"
            />
          </button>
        </>
      )}
    </>
  );
}