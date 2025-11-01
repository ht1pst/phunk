import img1 from "../assets/section5img1.avif";
import img2 from "../assets/projectsec2.avif";
import img3 from "../assets/projectsec22.webp";
import img4 from "../assets/projectsec23.webp";
import img5 from "../assets/projectsec24.webp";
import img6 from "../assets/section5img6.webp";
import img7 from "../assets/projectsec25.webp";
import img8 from "../assets/projectsec26.webp";
import img9 from "../assets/projectsec27.webp";
import img10 from "../assets/projectsec28.webp";
import img11 from "../assets/projectsec29.webp";
import { motion } from "framer-motion";


import drivelodge from "../assets/drivelodge.svg";
import magenta from "../assets/majentanew.svg";
import dropship from "../assets/dropship.svg";
import hacien from "../assets/hacien.svg";
import mobilleo from "../assets/mobilleo.svg";
import the from "../assets/thehonest.webp";
import bay from "../assets/bay.webp";
import box from "../assets/box.webp";
import Mannson from "../assets/mannson.svg";
import Breaking from "../assets/breaking.webp";
import fresh from "../assets/fresh.svg";

import { useState } from "react";


const cardFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger effect
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};



function ProjectSection2(){
     const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much do your designs packages cost?",
      answer: "Design costs vary according to scope, format, print specifications, materials and more — so it’s difficult to give a guide price. Get in touch to discuss your needs, and we’ll create a custom estimate that includes the services relevant to your project and is costed based on a one-off or subscription model. You’ll find full details of our pricing structure here: Phunk Pricing",
    },
    {
      question: "Do you offer graphic designs services fo social media ?",
      answer: "Yes, we do. We can create compelling visuals that will enhance your brand's presence on social media platforms, driving engagement and building a cohesive brand narrative. From profile pictures to post graphics and story designs, we've got your social media branding covered",
    },
    {
      question: "Can you provide print-ready graphics?",
      answer: "Absolutely. We deliver all graphics in print-ready formats, ensuring a seamless transition from on-screen designs to physical assets. This means you can take our designs straight to the printer without any additional hassle or adjustments needed. Or, we can arrange printing and shipping for you, via one of our trusted partners.",
    },
     {
      question: "What graphic design services do you offer?",
      answer: "We offer a comprehensive range of graphic design services, including logo design, brand identity development, signage, packaging, and print design. We're your one-stop shop for all things design. From initial concept sketches to the final deliverable, we'll support you through the entire design journey.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
   const faqFade = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return(
    <section className="bg-black lg:h-1450 h-2350" >
 {/* 01 */}
   <div className="flex flex-col lg:flex-row  lg:px-0 pt-10  justify-center gap-5 px-4">
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#161515ff] #0d0d0d  #161515ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-165  rounded-2xl">
    
   <div className="relative lg:w-110  h-60 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img1}
        alt=""
        className="lg:w-100 w-75  lg:h-80 h-55 object-cover rounded-xl"
      />

      {/* Hover image section */}
     <div
        className="absolute bottom-[-100%] left-0 w-100 h-full bg-blue-600 flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={drivelodge} alt="" className="w-50" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2 mt-3 ">
      <button className="w-45 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Web Design/Development
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out  text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] border-[#969696]  flex justify-center">
        UI/UX Design
      </button>
      <button className="w-25 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] border-[#969696] flex justify-center">
        Configurator
      </button>
    </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl font-semibold font-semibold">
        Drivelodge
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-[#a9a6a6ff]">
        Founded as a passion project by enthusiasts David and 
        Joanne, Drivelodge has built on its reputation for crafting 
        high-quality high-top and elevating camper van roofs to 
        become a 30-strong team of designers and engineers
        serving a nationwide customer base.
      </p>
    </div>

    {/* Link */}
    <div className="mt-5">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>



<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp} className="lg:mt-30">
  <div className="bg-[#161515ff] #0d0d0d  #737272ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-170  rounded-2xl">
    <div className="relative   h-60 overflow-hidden rounded-2xl group ">
      {/* Base image */}
       <img
        src={img2}
        alt=""
        className="lg:w-100 w-75  lg:h-90 h-55 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-100 h-full bg-[#cfccccff] #cfccccff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={magenta} alt="" className="w-60" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 mt-3">
      <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Webflow Development
      </button>
      <button className="w-28 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        UI/UX Design
      </button>
    </div>

    <div className="flex mt-3 gap-2 mt-3">
         <button className="w-38 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Brand Development
      </button>

       <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Graphic Design
      </button>
    </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl  font-semibold">
        Majenta
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-[#a9a6a6ff] ">
       Majenta Solutions is a digital engineering consultancy  working across industries like automotive, manufacturing, construction, and engineering. They provide tailored digital  solutions to improve efficiency, streamline processes, and enhance integration within complex technical environments.

      </p>
    </div>

    {/* Link */}
    <div className="mt-10">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>



</div>






{/* 02 */}
 <div className="flex flex-col lg:flex-row justify-center gap-8 mt-8 ">
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#161515ff] #0d0d0d  #737272ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-175  rounded-2xl">
    
    <div className="relative   h-58 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img3}
        alt=""
       className="lg:w-100 w-75  lg:h-80 h-52 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-100 h-full bg-blue-600 flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={dropship} alt="" className="w-50" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 mt-3 ">
      <button className="w-45  border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-9 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Webflow Development
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-9 items-center bg-[#212121ff] #212121ff text-[#a9a6a6ff] flex justify-center">
        Optimization
      </button>
    </div>

    <div className="mt-3"> <button className="w-42 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-9 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Support & Maintenance
      </button></div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl font-semibold ">
       Dropship
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-[#a9a6a6ff] w-75 lg:w-full lg:w-full">
       Dropship.io is a leading platform in the ecommerce space, offering tools for entrepreneurs to find and sell profitable products. With over 500,000 monthly visitors, their site needed a robust digital infrastructure to support this high traffic while delivering a seamless user experience.
      </p>
    </div>

    {/* Link */}
    <div className="mt-5">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>



<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}className="lg:mt-30">
  <div className="bg-[#161515ff] #0d0d0d  #737272ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-175  rounded-2xl">
    <div className="relative   h-58 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img4}
        alt=""
       className="lg:w-100 w-75  lg:h-80 h-52 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-[black] #dae1e5ff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={hacien} alt="" className="w-50" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 mt-3 ">
      <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Webflow Development
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        UI/UX Design
      </button>
    </div>

    <div className="flex mt-3 gap-2 mt-3">
         <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Packaging Design
      </button>

       <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Graphic Design
      </button>
    </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl font-semibold">
        Hacien
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-[#a9a6a6ff] w-75 lg:w-full">
      Hacien Tequila is a premium tequila brand that combines bold design with smooth, high-quality spirits. Phunk partnered with Hacien to deliver a visually engaging and technically sound digital experience, handling packaging, 3D models, and digital design assets to strengthen their brand identity.

      </p>
    </div>

    {/* Link */}
    <div className="mt-5">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>



</div>



{/* 03 */}

<div className="flex flex-col lg:flex-row justify-center gap-8 mt-20 ">
< motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#161515ff] #0d0d0d  #737272ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-180  rounded-2xl">
    
    <div  className="relative   h-58 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img5}
        alt=""
      className="lg:w-100 w-75 lg:w-full lg:h-80 h-52 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-[#0a52c5ff] #0a52c5ff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={mobilleo} alt="" className="w-50" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap  gap-2 mt-3 ">
      <button className="w-35  border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Splash Screens
      </button>
      <button className="w-27 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
       Illustrations
      </button>
      <button className="w-32 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Graphic Design
      </button>

       <button className="w-35 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
       Lottie Animation
      </button>

       <button className="w-35 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
       Webflow Training
      </button>
    </div>

    


      <div className="flex gap-2 mt-3 mt-5">
       

      
      </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl font-semibold  font-semibold">
       Mobilleo
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <a href="#" className="text-[#a9a6a6ff]">
      Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees. The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app. 



‍
      </a>
    </div>

    {/* Link */}
    <div className="mt-5">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>



<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp} className="lg:mt-30">
  <div className="bg-[#161515ff] #0d0d0d  #737272ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-165  rounded-2xl">
    <div className="relative   h-58 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img6}
        alt=""
       className="lg:w-110 w-75 lg:w-full lg:h-80 h-52 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-white #dae1e5ff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={the} alt="" className="w-40" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2 mt-3 ">
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
     Graphic Design
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
       Visual Identity
      </button>
      
 <button className="w-25 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
       Packaging
      </button>

       <button className="w-45 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Apparel & Merchandise
      </button>
      

    </div>

   

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl font-semibold font-semibold">
       Honest Watch Dealer
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-[#a9a6a6ff] w-75 lg:w-full">
    The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise. 
      </p>
    </div>

    {/* Link */}
    <div className="mt-5">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>



</div>

{/* 04 */}

<div className="flex flex-col lg:flex-row justify-center gap-8 mt-20 ">
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#161515ff] #0d0d0d  #737272ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-170  rounded-2xl">
    
   <div className="relative   h-58 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img7}
        alt=""
      className="lg:w-110 w-75 lg:w-full lg:h-80 h-52 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-[#011d3c] flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={bay} alt="" className="w-50" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2 mt-3 mt-7">
      <button className="w-43  border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Webflow Development
      </button>
      <button className="w-27 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        UI/UX Design
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
       Visual Identity
      </button>

       <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
       Graphic Design
      </button> 
    </div>

    


     

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl font-semibold font-semibold">
      Bay 2 Campers
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-[#a9a6a6ff] w-75 lg:w-full">
     Custom campervan brand Bay2 approached Phunk to develop an updated brand identity, new website and merchandise designs to help their growing company stand out from their competitors and communicate the quality of their product range. 
‍
      </p>
    </div>

    {/* Link */}
    <div className="mt-5">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>



<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp} className="lg:mt-30">
  <div className="bg-[#161515ff] #0d0d0d  #737272ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-165  rounded-2xl">
    <div className="relative   h-58 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img8}
        alt=""
        className="lg:w-110 w-75 lg:w-full lg:h-80 h-52 object-cover rounded-xl"
      />

      {/* Hover image section */}
     <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-red-500 #dae1e5ff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={box} alt="" className="w-20" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2 mt-3 ">
      <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
     Webflow Development
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        UI/UX Design
      </button>

 <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
       Webflow Training
      </button>

       <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Graphic Design
      </button>
      

    </div>

   

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl font-semibold font-semibold">
       Box IQ
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-[#a9a6a6ff] w-75 lg:w-full">
   BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.
      </p>
    </div>

    {/* Link */}
    <div className="mt-5">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>



</div>


{/* 05 */}
   <div className="flex flex-col lg:flex-row  justify-center gap-8 mt-20">
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#161515ff] #0d0d0d  #737272ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-180  rounded-2xl">
    
   <div className="relative   h-58 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img9}
        alt=""
      className="lg:w-110 w-75 lg:w-full lg:h-80 h-52 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-[#07162cff] #07162cff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={Mannson} alt="" className="w-50" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2 mt-3 mt-7">
      <button className="w-35 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Web Development
      </button>


      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        UI/UX Design
      </button>

      <button className="w-25 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Branding
      </button>

      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Graphic Design
      </button>

      <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] #656464ff flex justify-center">
        Software Development
      </button>
      
    </div>

    
    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl font-semibold font-semibold">
        Manneson Freight
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-[#a9a6a6ff]">
      Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.
      </p>
    </div>

    {/* Link */}
    <div className="mt-5">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>




<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp} className="lg:mt-30">
  <div className="bg-[#161515ff] #0d0d0d  #737272ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-185  rounded-2xl">
    <div className="relative   h-58 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img10}
        alt=""
      className="lg:w-110 w-75 lg:w-full lg:h-80 h-52 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-black #dae1e5ff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={Breaking} alt="" className="w-30" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2 mt-3 mt-7">
      <button className="w-45 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
    Apparel & Merchandise
      </button>
      <button className="w-45 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Social Media Tempelates
      </button>

  <button className="w-25 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
      Animation
      </button>


       <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Visual Identity
      </button>

    </div>

    

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl font-semibold font-semibold">
       Breaking Bread
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-[#a9a6a6ff] #8b8989ff w-75 lg:w-full">
   Breaking Bread is a popular conversational podcast fronted by BeardMeatsFood and Josh Gudgeon with over half a million listeners across Spotify, YouTube and Facebook. The founders approached Phunk to develop a unique brand identity for use across web and social media properties, merchandising and live event promotions. 
      </p>
    </div>

    {/* Link */}
    <div className="mt-5">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>


    </div>

{/* 06 */}
<div className="flex justify-center">
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#161515ff]  #0d0d0d  #737272ff p-[15px] lg:p-5 lg:p-0 lg:w-110 w-82 group mx-auto lg:mx-0 h-165  rounded-2xl mt-10">
    
   <div className="relative   h-58 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img11}
        alt=""
      className="lg:w-110 w-75 lg:w-full lg:h-80 h-52 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-white flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={fresh} alt="" className="w-60" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2 mt-3 ">
      <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Webflow Development
      </button>


      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        UI/UX Design
      </button>

      <button className="w-35 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-[#969696] text-sm rounded-full h-8 items-center bg-[#212121ff] text-[#a9a6a6ff] flex justify-center">
        Webflow Training
      </button>

    </div>

    
    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-3xl font-semibold font-semibold">
        Fresh & Go
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-[#a9a6a6ff]">
       Fresh & Go is a challenger brand in the dental alignment industry, providing a range of supporting products for users of orthodontic alignment appliances including cleaning tablets and solutions, specialist toothbrushes and protective storage cases.
      </p>
    </div>

    {/* Link */}
    <div className="mt-5">
      <a
        href="#"
        className="text-white  group-hover:text-blue-500 transition-all duration-700 ease-in-out underline underline-offset-7 decoration-1"
      >
        See full case study{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_outward
        </span>
      </a>
    </div>
  </div>
  </motion.div>

</div>



{/* FAQ Accordion Section */}


<div className="pt-30 px-5 lg:px-0">
      <h1 className="text-white flex justify-center text-4xl  font-semibold text-center lg:text-start">
        Frequently asked questions
      </h1>
      <p className="text-[#a9a6a6ff] mt-8 flex justify-center text-center lg:text-left">
        Explore our Frequently Asked Questions to find the answers you've been looking
        for, without even having to ask.
      </p>

      <div className="flex flex-col lg:flex-row justify-center pt-20 lg:px-80 gap-10">
        <div className="mx-auto lg:mx-0">
          <p className="lg:text-3xl font-semibold text-2xl w-70 lg:w-70 lg:pt-8 text-center lg:text-start text-white leading-loose">
            <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
              Graphic Design{" "}
            </span>
            Software Web Design
          </p>
        </div>

        <div className="max-w-xl mx-auto lg:mx-0 space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={faqFade}
                className="border border-gray-300 bg-black lg:rounded-4xl rounded-2xl w-80 lg:w-140 overflow-hidden transition-all duration-300"
              >
                {/* Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-black transition"
                >
                  <span className="font-medium text-[#a9a6a6ff] lg:text-xl text-sm bg-black">
                    {faq.question}
                  </span>
                  <span className="transition-all duration-300 text-2xl font-bold text-white">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] py-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden px-4 text-[#a9a6a6ff] bg-black">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>

      
    </section>
  )
}
export default ProjectSection2