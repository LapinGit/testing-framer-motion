import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="flex flex-row bg-black text-white flex-initial h-20 items-center">
      {/* left links*/}
      <div
        className=" grow-0 uppercase ml-7"
      >
        <Link className="max-md:hidden" href="/">Home</Link>
      </div>
      {/* middle links */}
      <div
        className=" grow flex gap-5  place-items-center  justify-center
                      xl:
                      lg:
                      max-md:hidden"
      >
        <Link href="/newjeans">NewJeans</Link>
        <Link href="/kanyewest">Kanye West</Link>
        <Link href="/leejinah">Leejin Ah</Link>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden
        max-md:grow flex justify-end mr-5 "
      >
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
