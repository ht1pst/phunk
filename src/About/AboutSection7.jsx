import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/sec7img1.svg"; 
import img2 from "../assets/sec7img2.svg";
import img3 from "../assets/sec7img3.svg";
import img4 from "../assets/sec7img4.svg";
import stuff1 from "../assets/stuff1.svg";

function AboutSection7() {
  const slides = [
    {
      title: "It’s user-friendly",
      text: "Webflow allows us to build sites our clients can actually use — so they stay updated, fresh and engaging.",
      img: img1
    },
    {
      title: "It looks great",
      text: "Using Webflow as a foundation opens up limitless potential for design, so we can build something true to our vision without compromise.",
      img: img2
    },
    {
      title: "It’s versatile",
      text: "From ecommerce stores to e-learning courses, membership sites, commercial portals, and more — Webflow supports a variety of use cases.",
      img: img3
    },
    {
      title: "It’s future-proof",
      text: "At a structural level, Webflow makes it easy to rework, refresh and reimagine existing sites without starting from scratch.",
      img: img4
    }
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 300);
  };

  const { title, text, img } = slides[index];

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <motion.section
      className="bg-black relative overflow-hidden h-200 md:h-150 lg:h-170 pt-20"
      
    >
      <motion.div   className="flex lg:flex-row relative lg:w-330 md:w-170 w-80 lg:h-115 h-200 border  border-gray-700 mx-auto rounded-b-2xl relative px-6 
        lg:bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent 
        opacity-95 rounded-t-[40px] overflow-hidden "
      >
        <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants} className={`flex flex-col lg:flex-row w-100 lg:w-300 md:flex-row lg:items-center lg:justify-center md:justify-start lg:gap-30 gap-70 md:gap-2 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
          
          <div className="absolute left-0 bottom-20 lg:bottom-0 lg:left-0 md:left-11 z-30">
            <img src={stuff1} alt="" className="w-100 rounded-b-xl" />
          </div>

          <div className="lg:hidden block absolute bottom-20 left-1/2 -translate-x-1/2 w-[100%] lg:w-[85%] rounded-b-xl md:h-100 max-w-[2100px] h-[600px] bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent opacity-100 rounded-t-[40px]"></div>

          {/* Text */}
          <div className="transition-all relative duration-500 ease-in-out pt-10">
            <h1 className="lg:text-7xl text-4xl text-white lg:w-130">{title}</h1>
            <p className="text-lg md:text-sm lg:w-100 font-semibold md:w-100 w-70 text-white mt-7">{text}</p>
          </div>

          {/* Image */}
          <div className="relative md:w-100 lg:w-200">
            <img src={img} alt={title} className="lg:w-120 w-100 lg:h-105 md:h-70 md:w-150 transition-all duration-500" />
          </div>
        </motion.div>

      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex absolute lg:right-30 lg:top-70 top-23 right-10 flex-row"
        variants={buttonVariants}
      >
        <button onClick={prevSlide} className="">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3">
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
          </svg>
        </button>
        <button onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3">
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
          </svg>
        </button>
      </motion.div>
    </motion.section>
  );
}

export default AboutSection7;
