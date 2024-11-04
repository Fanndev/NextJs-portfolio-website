import { useEffect } from "react"; // Import useEffect dari React
import { fadeIn } from "../variants";
import Button from "../components/Button";
import Socials from "../components/Socials";
import Photo from "../components/photo";

import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = document.querySelector(".cursor-glow");
      glow.style.left = `${e.pageX - 40}px`; // Offset untuk pusat glow
      glow.style.top = `${e.pageY - 40}px`; // Offset untuk pusat glow
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
    <section className="h-full flex items-center justify-center mt-20 lg:mt-10 md:mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-24 xl:pb-24">
          {/* text */}
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="text-center xl:text-left order-2 xl:order-none mb-8 xl:mb-0">
            <span className="text-lg md:text-xl lg:text-2xl text-accent">
              Fullstack Developer
            </span>
            <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Hello, I’m <br />{" "}
              <span className="text-accent">Mohamad Irfan</span>
            </motion.h1>
            <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-[500px] mb-6 md:mb-8 lg:mb-10 text-white/80 text-sm md:text-base lg:text-lg">
              I am a developer who has the ability to create web and mobile
              applications.
            </motion.div>
            {/* btn and socials */}
            <div className="uppercase flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <Button
                label="Download CV"
                onClick={() => window.open("/", "_blank")}
                variant="green"
                size="medium"
              />
              {/* social */}
              <Socials
                containerStyles="flex gap-4 md:gap-6 mt-4 md:mt-0"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-basehover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </motion.div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="cursor-glow"></div> {/* Elemen untuk efek glow */}
    </section>
  );
};

export default Home;
