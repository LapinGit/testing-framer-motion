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
        <div className="flex w-2/4  	">
          {NewJeansData.slice(0, 3).map((jeans, i) => (
            <div key={i}>
              <motion.div
                initial={"initial"}
                animate={"animate"}
                variants={variants(jeans.delay)}
                className=""
              >
                <motion.img
                  initial={"initial"}
                  animate={"animate"}
                  src={jeans.src}
                  alt={jeans.src}
                />
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex flex-col  items-center justify-center  self-center	pt-5 bg-rose-300	">
          <div className="flex w-1/3 ">
            {NewJeansData.slice(3, 5).map((jeans, i) => (
              <div key={i}>
                <motion.div
                  initial={"initial"}
                  animate={"animate"}
                  variants={variants(jeans.delay)}
                  className=""
                >
                  <motion.img
                    initial={"initial"}
                    animate={"animate"}
                    src={jeans.src}
                    alt={jeans.src}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newjeans;
