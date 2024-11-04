"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div className="relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.5, ease: "easeIn" },
          }}
          className="w-[198px] h-[198px] xl:w-[298px] xl:h-[298px] mix-blend-lighten"
        >
          <Image
            src={"/photo.png"}
            priority
            quality={100}
            fill
            alt="photo"
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Animated Circles */}
      <motion.svg
        className="absolute w-[250px] h-[250px] xl:w-[350px] xl:h-[350px]"
        fill="transparent"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="250"
          cy="250"
          r="120"
          stroke="#00ff99"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "0 1" }}
          animate={{
            strokeDasharray: ["15 120", "100 50", "50 120"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.svg>

      <motion.svg
        className="absolute w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]"
        fill="transparent"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="250"
          cy="250"
          r="180"
          stroke="#00ff99"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "0 1" }}
          animate={{
            strokeDasharray: ["50 250", "150 100", "100 50"],
            rotate: [-360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
