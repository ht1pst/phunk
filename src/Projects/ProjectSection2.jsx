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
import magenta from "../assets/majenta.svg";
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
    <section className="bg-black lg:h-1400 h-2100" >
 {/* 01 */}
   <div className="flex flex-col lg:flex-row  lg:px-0 pt-10  justify-center gap-8">
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#0d0d0d] p-3 lg:p-5 lg:p-0 lg:w-120 w-90 group mx-auto lg:mx-0  rounded-2xl">
    
   <div className="relative lg:w-110 w-85 h-80 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img1}
        alt=""
        className="lg:w-110 w-90 lg:h-80 h-60 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-blue-500 flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={drivelodge} alt="" className="w-100" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2 mt-7">
      <button className="w-50 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Web Design/Development
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        UI/UX Design
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Configurator
      </button>
    </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-4xl">
        Drivelodge
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-gray-500">
        Founded as a passion project by enthusiasts David and 
        Joanne, Drivelodge has built on its reputation for crafting 
        high-quality high-top and elevating camper van roofs to 
        become a 30-strong team of designers and engineers
        serving a nationwide customer base.
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



<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp} className="lg:mt-30">
  <div className="bg-[#0d0d0d] p-3 lg:p-5 lg:w-120 w-90 group mx-auto lg:mx-0  rounded-2xl">
    <div className="relative lg:w-110 w-85 h-80 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img2}
        alt=""
       className="lg:w-110 w-90 lg:h-80 h-60 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-[#dae1e5ff] #dae1e5ff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={magenta} alt="" className="w-60" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 mt-7">
      <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Webflow Development
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        UI/UX Design
      </button>
    </div>

    <div className="flex mt-3 gap-2">
         <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Brand Development
      </button>

       <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Graphic Design
      </button>
    </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-4xl">
        Majenta
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-gray-500 w-80">
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
 <div className="flex flex-col lg:flex-row justify-center gap-8 mt-20 ">
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#0d0d0d] p-3 lg:p-0 lg:w-120 w-90 mx-auto lg:mx-0 group p-5 rounded-2xl">
    
    <div className="relative lg:w-110 w-85 h-80 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img3}
        alt=""
        className="lg:w-110 w-90 lg:h-80 h-60 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-blue-600 flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={dropship} alt="" className="w-70" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 mt-7">
      <button className="w-50  border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Webflow Development
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Optimization
      </button>
    </div>

    <div className="mt-3"> <button className="w-50 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Support & Maintenance
      </button></div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-4xl">
       Dropship
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-gray-500 w-80">
       Dropship.io is a leading platform in the ecommerce space, offering tools for entrepreneurs to find and sell profitable products. With over 500,000 monthly visitors, their site needed a robust digital infrastructure to support this high traffic while delivering a seamless user experience.
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



<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}className="lg:mt-30">
  <div className="bg-[#0d0d0d] lg:w-120 w-90 mx-auto lg:mx-0 group lg:p-5 p-3  rounded-2xl">
    <div className="relative lg:w-110 w-85 h-80 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img4}
        alt=""
       className="lg:w-110 w-90 lg:h-80 h-60 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-[black] #dae1e5ff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={hacien} alt="" className="w-60" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 mt-7">
      <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Webflow Development
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        UI/UX Design
      </button>
    </div>

    <div className="flex mt-3 gap-2">
         <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Packaging Design
      </button>

       <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Graphic Design
      </button>
    </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-4xl">
        Hacien
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-gray-500 w-80">
      Hacien Tequila is a premium tequila brand that combines bold design with smooth, high-quality spirits. Phunk partnered with Hacien to deliver a visually engaging and technically sound digital experience, handling packaging, 3D models, and digital design assets to strengthen their brand identity.

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



{/* 03 */}

<div className="flex flex-col lg:flex-row justify-center gap-8 mt-20 ">
< motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#0d0d0d] lg:w-120 w-90 mx-auto lg:mx-0 group p-3 lg:p-5 rounded-2xl">
    
    <div className="relative lg:w-110 w-85 h-80 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img7}
        alt=""
       className="lg:w-110 w-90 lg:h-80 h-60 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-[#011d3c] flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={bay} alt="" className="w-70" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap  gap-2 mt-7">
      <button className="w-43  border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Webflow Development
      </button>
      <button className="w-27 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        UI/UX Design
      </button>
      <button className="w-32 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Visual identity
      </button>
    </div>

    


      <div className="flex gap-2 mt-5">
        <button className="w-35 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
       Bay 2 Campers
      </button>

      
      </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-4xl">
       Mobilleo
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <a href="#" className="text-gray-500">
      Custom campervan brand Bay2 approached Phunk to develop an updated brand identity, new website and merchandise designs to help their growing company stand out from their competitors and communicate the quality of their product range. 

‍
      </a>
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



<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp} className="lg:mt-30">
  <div className="bg-[#0d0d0d] lg:w-120 w-90 group mx-auto lg:mx-0 lg:p-5 p-3 rounded-2xl">
    <div className="relative lg:w-110 w-85 h-80 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img8}
        alt=""
       className="lg:w-110 w-90 lg:h-80 h-60 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-red-500 #dae1e5ff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={box} alt="" className="w-40" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 mt-7">
      <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
      Webflow Development
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        UI/UX Design
      </button>
      
    </div>

    <div className=" mt-3 flex gap-2">
       <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
       Webflow Training
      </button>

       <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Graphic Design
      </button>
      
    </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-4xl">
        Box IQ
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-gray-500 w-80">
    BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.
‍
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

{/* 04 */}

<div className="flex flex-col lg:flex-row justify-center gap-8 mt-20 ">
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#0d0d0d] w-90 lg:w-120 mx-auto lg:mx-0 group lg:p-5 p-3 rounded-2xl">
    
   <div className="relative lg:w-110 w-85 h-80 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img9}
        alt=""
      className="lg:w-110 w-90 lg:h-80 h-60 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-[#011d3c] flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={Mannson} alt="" className="w-70" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2 mt-7">
      <button className="w-43  border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Webflow Development
      </button>
      <button className="w-27 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        UI/UX Design
      </button>
      <button className="w-25 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
       Branding
      </button>
    </div>

    


      <div className="flex gap-2 mt-2">
        <button className="w-35 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
       Graphic Design
      </button>

 <button className="w-45 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
       Software Development
      </button>
      
      </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-4xl">
       Mannson Freight
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-gray-500 w-80">
      Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.
‍
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



<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp} className="lg:mt-30">
  <div className="bg-[#0d0d0d] lg:w-120 w-90 mx-auto lg:mx-0 group lg:p-5 p-3 rounded-2xl">
    <div className="relative lg:w-110 w-85 h-80 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img10}
        alt=""
       className="lg:w-110 w-90 lg:h-80 h-60 object-cover rounded-xl"
      />

      {/* Hover image section */}
      <div
        className="absolute bottom-[-100%] left-0 w-full h-full bg-black #dae1e5ff flex justify-center items-center 
        rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"
      >
        <img src={Breaking} alt="" className="w-40" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 mt-7">
      <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
     Apparel & Merchandise
      </button>
      <button className="w-40 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Social Media Templates
      </button>

    </div>

    <div className=" mt-3 flex gap-2">
       <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
       Animation
      </button>

       <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Visual Identity
      </button>
      
    </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-4xl">
        Breaking Bread
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <p className="text-gray-500 w-80">
    BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.
‍
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


{/* 05 */}
   <div className="flex  justify-center gap-8 mt-20">
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardFadeUp}>
  <div className="bg-[#0d0d0d] lg:w-120 w-90 mx-auto lg:mx-0 group lg:p-5 p-3 rounded-2xl">
    
   <div className="relative lg:w-110 w-85 h-80 overflow-hidden rounded-2xl group ">
      {/* Base image */}
      <img
        src={img11}
        alt=""
       className="lg:w-110 w-90 lg:h-80 h-60 object-cover rounded-xl"
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
    <div className="flex gap-2 mt-7">
      <button className="w-50 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Web Design/Development
      </button>
      <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        UI/UX Design
      </button>
      
    </div>

    <div className="mt-2">
        <button className="w-30 border group-hover:border-white group-hover:text-white transition-all duration-700 ease-in-out border-gray-400 text-sm rounded-full h-7 items-center bg-transparent text-gray-400 flex justify-center">
        Webflow Training
      </button>
    </div>

    {/* Project title */}
    <div className="mt-7">
      <a href="#" className="text-white text-4xl">
        Fresh & Go
      </a>
    </div>

    {/* Description */}
    <div className="mt-7">
      <a href="#" className="text-gray-500">
       Fresh & Go is a challenger brand in the dental alignment industry, providing a range of supporting products for users of orthodontic alignment appliances including cleaning tablets and solutions, specialist toothbrushes and protective storage cases.
      </a>
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




{/* FAQ Accordion Section */}


<div className="pt-30 px-5 lg:px-0">
      <h1 className="text-white flex justify-center text-5xl">
        Frequently asked questions
      </h1>
      <p className="text-[#969696] mt-8 flex justify-center text-center lg:text-left">
        Explore our Frequently Asked Questions to find the answers you've been looking
        for, without even having to ask.
      </p>

      <div className="flex flex-col lg:flex-row justify-center pt-20 lg:px-80 gap-10">
        <div className="mx-auto lg:mx-0">
          <p className="lg:text-3xl text-2xl w-70 lg:w-70 lg:pt-8 text-center lg:text-start text-white leading-loose">
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
                  <span className="font-medium text-[#969696] lg:text-xl text-sm bg-black">
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
                  <div className="overflow-hidden px-4 text-[#969696] bg-black">
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