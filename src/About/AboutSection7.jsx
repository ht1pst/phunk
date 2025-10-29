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

      
      <motion.div   className="flex lg:flex-row relative lg:w-330 md:w-170 w-80 lg:h-115 h-200 rounded-xl border  border-gray-700 mx-auto  relative px-6 pt-13 
        lg:bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent 
        opacity-95 rounded-t-[40px] overflow-hidden "
      >
        <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants} className={`flex flex-col lg:flex-row w-100 lg:w-300 md:flex-row lg:items-center lg:justify-center md:justify-start lg:gap-30 gap-70 md:gap-2 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
          

           <motion.div
        className="flex absolute gap-3 lg:right-30 lg:top-10 top-10 right-10 z-10 flex-row"
        variants={buttonVariants}
      >
        <button onClick={prevSlide} className="">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5" cy="12.5" r="12.5" transform="rotate(-180 12.5 12.5)" fill="white"></circle>
<path d="M8.0002 12.0001C8.0002 12.2152 8.08418 12.4304 8.25186 12.5942L13.5321 17.7538C13.868 18.0821 14.4126 18.0821 14.7483 17.7538C15.0839 17.4258 15.0839 16.8936 14.7483 16.5654L10.0763 11.9999L14.7483 7.43464C15.0839 7.10639 15.0839 6.57444 14.7483 6.24645C14.4126 5.9182 13.868 5.9182 13.5321 6.24645L8.25186 11.406C8.08418 11.5702 8.0002 11.785 8.0002 12.0001Z" fill="black"></path>
</svg>
        </button>
        <button onClick={nextSlide}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5" cy="12.5" r="12.5" fill="white"></circle>
<path d="M16.9998 12.9999C16.9998 12.7848 16.9158 12.5696 16.7481 12.4058L11.4679 7.24619C11.132 6.91794 10.5874 6.91794 10.2517 7.24619C9.91609 7.57417 9.91609 8.10638 10.2517 8.43464L14.9237 13.0001L10.2517 17.5654C9.91609 17.8936 9.91609 18.4256 10.2517 18.7535C10.5874 19.0818 11.132 19.0818 11.4679 18.7535L16.7481 13.594C16.9158 13.4298 16.9998 13.215 16.9998 12.9999Z" fill="black"></path>
</svg>
        </button>
      </motion.div>


          <div className="absolute left-0 bottom-20 lg:bottom-0 lg:left-0 md:left-11 z-30">
            <img src={stuff1} alt="" className="w-100 rounded-b-xl" />
          </div>

          <div className="lg:hidden block absolute bottom-20 left-1/2 -translate-x-1/2 w-[100%] lg:w-[85%] rounded-b-xl md:h-100 max-w-[2100px] h-[600px] bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent opacity-100 rounded-t-[40px]"></div>

          {/* Text */}
          <div className="transition-all relative duration-500 ease-in-out pt-10">
            <h1 className="lg:text-7xl text-4xl text-white lg:w-130 w-60">{title}</h1>
            <p className="leading-normal md:text-sm lg:w-100 text-sm md:w-100 w-70 font-semibold text-[#d7d7d7] mt-7">{text}</p>
          </div>

          {/* Image */}
          <div className="relative md:w-100 lg:w-200">
            <img src={img} alt={title} className="lg:w-120 w-100 lg:h-105 md:h-70 md:w-150 transition-all duration-500" />
          </div>
        </motion.div>

      </motion.div>

      {/* Buttons */}
     
    </motion.section>
  );
}

export default AboutSection7;
