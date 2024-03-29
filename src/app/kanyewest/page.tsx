"use client";
import React from "react";
import { motion } from "framer-motion";
import { KanyeData } from "@/utils/data";

const page = () => {
  const variants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay: 0.1,
      },
    },
  });

  return (
    <div>
      <div className="bg-slate-400	">
        {KanyeData.map((kane, i) => (
          <motion.div
            initial={"initial"}
            animate={"animate"}
            variants={variants()}
            key={i}
            className="flex items-center justify-center "
          >
            <motion.img src={kane.src} />
          </motion.div>
        ))}
      </div>
      <div className=" h-screen flex flex-col lg:flex-row relative pt-5 bg-black">
        <div className="section-cards__item headline__word  h-1/2 lg:h-full w-full lg:w-1/2 flex   t-h-3 ">
          <div className="pt-12 ">
            <div>GRAMMY</div>
            <div>award-winning</div>
            <div> American rapper</div>
            <div>producer, singer</div>
            <div> author, and </div>
            <div>fashion designer</div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center no-scrollbar bg-black">
          <img src="/graduation.jpeg" width="660" height="2400" alt="Graduation album" className="section-cards__item_grad"/>
        </div>
      </div>
    </div>
  );
};

export default page;
