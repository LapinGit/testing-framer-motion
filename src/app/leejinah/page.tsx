"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/utils/animation";

const Leejinah = () => {
  return (
    <div>
      <div className="flex items-center justify-center self-center bg-violet-500">
        <motion.img
          variants={containerVariants(0.5)}
          initial="offscreen"
          whileInView={"onscreen"}
          src="Leejinah.png"
          alt="Leejinah"
          className="w-1/4 mt-5 rounded-full"
        />
      </div>
      <div className=" flex ">
        <div className="embla-viewport  bg-indigo-400 	 ">
          <div className="embla-container ">
            <div className="embla-slide section-press__slide is-selected">
              <p className="section-press__slide__excerpt">
              Lee Jin-ah sings of emotions of city life
              </p>
            </div>
          </div>
        </div>
        <div className="embla-viewport   bg-yellow-200 	 ">
          <div className="embla-container  ">
            <div className="embla-slide section-press__slide is-selected">
              <p className="section-press__slide__excerpt">
              Airy jazz meets the future of K-POP              </p>
            </div>
          </div>
        </div>
        <div className="embla-viewport   bg-lime-300		 ">
          <div className="embla-container  ">
            <div className="embla-slide section-press__slide is-selected">
              <p className="section-press__slide__excerpt">
Lee has cemented a style that may well be unique for her
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leejinah;
