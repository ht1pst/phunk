import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/section4img1.webp"; 
import img2 from "../assets/section4img2.webp";
import img3 from "../assets/section4img3.webp";
import img4 from "../assets/section4img4.webp";
import phunk from "../assets/phunk.png";
import stuff1 from "../assets/stuff1.svg";

// Fade-up variant for motion
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Section4() {
  const slides = [
    {
      title: "Imagination",
      text: "We’re not interested in recreating the wheel — reworking tired old layouts, copying competitor sites or reusing commercial templates. We bring a fresh pair of eyes to every project, as well as the inspiration, curiosity and creative skills necessary to ensure your next project is one-of-a-kind. Otherwise, what’s the point?",
      img: img1,
    },
    {
      title: "Vision",
      text: "We’re experts at taking the ideas you’ve developed, the story behind your brand and the personality of your team, and developing them into a clear and cogent brand vision. We’ll help you drill down into what actually matters to your clients, what you’re really trying to communicate, and the best mix of media to use to get the message across.",
      img: img2,
    },
    {
      title: "Efficiency",
      text: "We don’t cut corners, but we do round them off. That means eliminating those frustrating wait times between mockups, responding to your emails promptly, working in parallel teams to build quality work faster, and taking ownership of your project to hit key business deadlines. We respect your time as much as we do ours.",
      img: img3,
    },
    {
      title: "Fun",
      text: "We wouldn’t be in this business if we didn’t love it. And we like our clients to have fun with the process too. Working with Phunk means interacting with a friendly bunch of professionals who are happy to share their expertise — not show it off — involving you in the key decisions and discussions that make every design project genuinely enjoyable.",
      img: img4,
    },
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

  return (
    <section className="bg-black relative overflow-hidden h-255 md:h-150 lg:h-170 pt-20">

      {/* === Heading === */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="flex items-center flex-col mb-10"
      >
        <a href="#"><img src={phunk} alt="Phunk logo" className="w-10" /></a>
        <p className="lg:text-6xl md:text-5xl text-4xl w-50 lg:w-140 md:w-200 text-center text-white mt-5">
          Why work{" "}
          <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
            with us?
          </span>
        </p>
      </motion.div>

      {/* === Slide container with border === */}
      <motion.div
        className={`flex lg:w-330 md:w-170 w-80 pt-10 lg:h-115 h-200 border border-gray-700 mx-auto rounded-xl relative px-6 overflow-hidden`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="absolute bottom-10 lg:bottom-5 rounded-xl left-1/2 -translate-x-1/2  border-b-white w-[100%] max-w-[2100px] lg:h-[260px] h-200 bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent opacity-90 blur-8xl rounded-t-[40px]"></div>
       

        {/* Background gradient overlay */}
       
        {/* Stuff1 image behind content */}
         <div className="absolute left-0 bottom-10 lg:bottom-5 lg:left-0 md:left-11 z-0">
          <img src={stuff1} alt="" className="w-100 rounded-b-xl pointer-events-none" />
        </div>

        {/* Text + Image */}
        <div
          className={`flex flex-col md:flex-row lg:px-20 lg:flex-row lg:items-center rounded lg:justify-center md:justify-start lg:gap-30 gap-10 md:gap-2 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          } z-10 relative`}
        >
          {/* Text */}
          <div className="transition-all duration-500 ease-in-out pt-10 lg:pt-0">
            
            <h1 className="lg:text-7xl text-4xl text-white font-semibold">{title}</h1>
            <p className="lg:text-sm text-md md:text-sm lg:w-100  md:w-100 w-70 text-white mt-7">
              {text}
            </p>
            <Link
              to="/about"
              className="w-35 md:w-32 h-11 flex justify-center items-center md:h-9 rounded-full text-white 
              bg-gradient-to-r from-[#00d1ff] to-[#004cff] 
              shadow-[0_0_20px_rgba(0,209,255,0.5)] 
              hover:shadow-[0_0_30px_rgba(0,209,255,0.8)] 
              hover:scale-105 transition-all duration-300 mt-7"
            >
              Learn more
            </Link>
          </div>

          {/* Image */}
          <div className="md:w-100 lg:w-200 w-90  bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0  absolute lg:relative  ">
            <img
              src={img}
              alt={title}
              className="lg:w-120 pl-5 lg:pl:0   lg:h-105 md:h-70 md:w-150 transition-all duration-500"
            />
          </div>
        </div>
      </motion.div>

      {/* === Slide buttons === */}
      <div className="flex absolute z-30 lg:right-30 lg:top-70 top-70 right-13 flex-row gap-3">
        <button onClick={prevSlide}>
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
      </div>
    </section>
  );
}

export default Section4;
