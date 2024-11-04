import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectsCard";
import { GithubStats } from "../../components/GithubStats";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function Project() {
  const [filter, setFilter] = useState("all");

  const projectData = [
    {
      title: "Authentication JWT",
      repo: "https://github.com/Fanndev/Authentication_jwt",
      type: "web",
      image: "/express.webp",
    },
    {
      title: "Quran Apps",
      type: "mobile",
      repo: "https://github.com/Fanndev/Al_QuranKareem",
      image: "/quran-app.png",
    },
    {
      title: "Contact App",
      type: "mobile",
      repo: "https://github.com/Fanndev/FrontEnd_ContactApp",
      image: "/contact-app.webp",
    },
    {
      title: "Duta Grafika",
      type: "web",
      repo: "https://github.com/Fanndev/Duta_Grafika",
      image: "/express.webp",
    },
    {
      title: "Ecommerce API",
      type: "api",
      repo: "https://github.com/Fanndev/market_balance",
      image: "/express.webp",
    },
  ];

  const filteredProjects = projectData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "mobile")
      return ["android", "ios", "flutter", "mobile"].includes(item.type);
    if (filter === "web") return item.type === "web";
    if (filter === "api") return item.type === "api";
    return item.type === filter;
  });

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
    <section className="flex flex-col items-center justify-start h-screen w-full mt-20 px-4 overflow-y-auto scrollbar-hidden">
      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="text-xl font-bold text-[#616D8A] dark:text-white lg:text-xl xl:text-4xl text-center my-4"
      >
        My Projects ✌️
      </motion.h1>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="my-10 hidden justify-center md:flex"
      >
        <GithubStats />
      </motion.div>
      <div className="my-4 flex justify-center gap-4 font-semibold text-[#616D8A] dark:text-white sm:gap-6 md:gap-8 lg:gap-4">
        {["all", "web", "mobile", "api"].map((category) => (
          <button
            key={category}
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter(category)}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter === category ? "w-full" : "w-0"
              } rounded-md bg-orange-500 transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              {category.charAt(0).toUpperCase() + category.slice(1)} (
              {
                filteredProjects.filter((item) => {
                  if (category === "all") return true;
                  return item.type === category;
                }).length
              }
              )
            </p>
          </button>
        ))}
      </div>
      <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500">No projects found.</p>
        ) : (
          filteredProjects.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))
        )}
      </div>
      {/* Kotak kosong di bagian bawah untuk memberi ruang scroll */}
      <div className="pb-20"></div>
      <div className="cursor-glow"></div> {/* Elemen untuk efek glow */}
    </section>
  );
}
