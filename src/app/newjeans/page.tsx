"use client";
import React from "react";
import { motion } from "framer-motion";
import { NewJeansData } from "@/utils/data";
import { variants } from "@/utils/animation";

const Newjeans = () => {
  return (
    <div>
      {/* h-left */}
      <div className=" bg-lime-400	 flex flex-col  items-center justify-center  self-center	pt-5 ">
        {/* image-row */}
        <div className="flex w-2/4 gap-6">
          {NewJeansData.slice(0, 3).map((jeans, i) => (
            <div key={i}>
              <motion.div
                initial={"initial"}
                animate={"animate"}
                variants={variants(jeans.delay)}
                className="pb-4"
              >
                <motion.img
                  initial={"initial"}
                  animate={"animate"}
                  src={jeans.src}
                  alt={jeans.src}
                  className="rounded-md "
                />
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex flex-col   items-center justify-center  self-center	pt-5 bg-rose-300	">
          <div className="flex w-1/3 gap-6">
            {NewJeansData.slice(3, 5).map((jeans, i) => (
              <div key={i}>
                <motion.div
                  initial={"initial"}
                  animate={"animate"}
                  variants={variants(jeans.delay)}
                  className="pb-6"
                >
                  <motion.img
                    initial={"initial"}
                    animate={"animate"}
                    src={jeans.src}
                    alt={jeans.src}
                    className="rounded-md"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative h-400 pt-3">
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-md"
          style={{ backgroundImage: `url("/NEWJEANSBG.jpg")` }}
        />
        <div className="h-screen flex flex-col lg:flex-row relative">
          <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex justify-center items-center section-values__text t-h-3 lg:text-center lg:py-4">
            NewJeans is on track to become another K-pop sensation.
          </div>
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center no-scrollbar">
            <iframe
              className="mx-auto max-w-500 max-h-full lg:w-400 lg:h-500" // Add lg:w-400 and lg:h-500 for large screens
              src="/newjeans.gif"
              width="400px"
              height="500px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newjeans;
