"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useCallback } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <>
      <header className="  w-full flex flex-row bg-gradient-to-b from-blue-950 p-1 max-h-25 gap-10 mt-1 ">
        <div className="w-2/3 lg:w-2/3  flex flex-row ">
          <Link href="/">
            <Image
              src="logo.svg"
              alt="Notebook Ship Game"
              height={100}
              width={100}
              className=" object-fill w-32 h-18 lg:h-24 lg:w-96 rounded p-2 -ml-3 lg:p-0 lg:h-36"
            />
          </Link>
        </div>
        <nav className="w-full flex mt-5 lg:mt-10 justify-between">
          <ul className=" list-style-none  flex flex-row gap-12   ">
            <li className="text-lg w-20 lg:w-64 ">
              <button className=" w-24 lg:w-56 text-white bg-red-600 p-2 rounded-full   hover:rouded hover:m-1    ">
                <Link href="play" className="">
                  Play
                </Link>
              </button>
            </li>

            <li className=" text-lg lg:w-64 hidden lg:block ">
              <Link href="scoreboard" className="  ">
                <button className=" w-56 text-white bg-red-600 p-2 rounded-full  hover:rouded hover:m-1    ">
                  Scoreboard
                </button>
              </Link>
            </li>
          </ul>
          <ul className=" ">
            <li className=" ">
              <svg
                onClick={toggleMenu}
                className="  w-6 h-6 cursor-pointer bg-white mr-2 mt-2 block lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <ul
          className={` flex flex-col  bg-gradient-to-b from-blue-950  w-full h-full p-2 space-y-1  sm:flex-row sm:space-y-1 sm:space-x-4 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <li className="grid  justify-items-center ">
            <Link
              href="/"
              className="  text-white text-lg text-center  font-bold hover:underline mt-1"
            >
              Scoreboard
            </Link>
          </li>
          <li className="grid  justify-items-center ">
            <Link
              href="/about"
              className="  text-lg text-white  font-bold hover:underline"
            >
              About Me
            </Link>
          </li>
          <li className="grid  justify-items-center ">
            <Link
              href="/contact"
              className="text-lg text-white font-bold hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
