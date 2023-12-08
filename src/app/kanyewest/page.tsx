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
  );
};

export default page;
