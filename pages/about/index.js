import React, { useState, useEffect } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
  SiDart,
  SiRedux,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
          <FaJs key={2} />,
          <FaReact key={3} />,
          <SiNextdotjs key={4} />,
          <SiFramer key={5} />,
          <FaWordpress key={6} />,
          <FaNodeJs key={7} />,
          <SiTailwindcss key={8} />,
          <SiRedux key={9} />,
        ],
      },
      {
        title: "Mobile Development",
        icons: [
          <SiFlutter key={0} />,
          <SiFirebase key={1} />,
          <SiDart key={2} />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key={0} />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Lks Sumbawa Award 3rd Place",
        stage: "2022",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Wordpress Developer - fullstack lombok",
        stage: "2022 - 2023",
      },
      {
        title: "Web Developer - ITEC",
        stage: "2023",
      },
    ],
  },
];

// component
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);

   useEffect(() => {
     const handleMouseMove = (e) => {
       const glow = document.querySelector(".cursor-glow");
       glow.style.left = `${e.pageX - 40}px`;
       glow.style.top = `${e.pageY - 40}px`;
       glow.classList.add("active");

       clearTimeout(glow.timeout);
       glow.timeout = setTimeout(() => {
         glow.classList.remove("active");
       }, 150);
     };

     window.addEventListener("mousemove", handleMouseMove);

     return () => {
       window.removeEventListener("mousemove", handleMouseMove);
     };
   }, []);

  return (
    <section className="h-full py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="hidden xl:flex absolute bottom-0 left-1/2 transform -translate-x-1/2"
      ></motion.div>
      <div className="container mx-auto h-full flex flex-col items-center justify-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
          {/* Text */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h2 text-2xl lg:text-3xl font-bold mb-4 text-center"
          >
            I`m <span className="text-accent">Mohamad Irfan</span> from Lombok
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-[400px] text-center xl:text-left mb-6 xl:mb-12 px-2 xl:px-0 text-md lg:text-lg"
          >
            Informatics Engineering student at Bumi Gora University. I have a
            solid understanding of various Web Development and Mobile
            development.
          </motion.p>
        </div>
        {/* Skills Section */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="flex flex-col w-full xl:max-w-[53%] items-center justify-center pr-10 h-auto xl:h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 flex-wrap mt-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg text-sm md:text-base relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 p-2 md:p-3`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-purple-800 to-pink-700 w-full max-w-[600px] mx-auto py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start rounded-lg shadow-lg">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col md:flex-row max-w-full gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0 px-4 text-white/80">
                  {item.title}
                </div>
                <div className="hidden md:flex">-</div>
                <div className="text-white">{item.stage}</div>
                {/* Icons */}
                <div className="flex gap-x-4 flex-wrap mt-2 md:mt-0">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="cursor-glow"></div> {/* Elemen untuk efek glow */}
    </section>
  );
};

export default About;
