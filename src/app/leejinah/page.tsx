"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { containerVariants } from '@/utils/animation'

const Leejinah = () => {
  return (
    <div className="flex items-center justify-center self-center bg-violet-500	">
    <motion.img
      variants={containerVariants(0.5)}
      initial="offscreen"
      whileInView={"onscreen"}
      src="Leejinah.png"
      alt="Leejinah"
      className='w-1/4 mt-5 rounded-full '
    />
  </div>
  )
}

export default Leejinah