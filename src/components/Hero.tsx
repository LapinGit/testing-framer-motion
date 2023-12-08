import React from "react";
import { Josefin_Sans } from "next/font/google";

const Josef = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="bg-zinc-800 h-[calc(100vh-6rem)] flex justify-center  ">
      <div className="text-white text-center text-3xl font-medium justify-evenly flex flex-col ">
        <span>
          Welcome to my top three favorite artist currently
        </span>
        <span className="pb-10">
          This is where i showcase my favorite artists and trying out framer motion
        </span>
      </div>
    </div>
  );
};

export default Hero;
