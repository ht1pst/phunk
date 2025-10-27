import { useState } from "react";
import img1 from "../assets/section4img1.webp"; 
import img from "../assets/newg.webp"; 
import img2 from "../assets/section4img2.webp";
import img3 from "../assets/section4img3.webp";
import img4 from "../assets/section4img4.webp";
import phunk from "../assets/phunk.png";
import stuff1 from "../assets/stuff1.svg";
import img5 from "../assets/webflowsec2img2.webp";

function WebflowSection6() {
  const slides = [
    {
      title: "Webflow Showcase",
      text: "Webflow allows us to build sites our clients can actually use — so they stay updated, fresh and engaging.",
      img: img1,
    },
  ];

  // ✅ Destructure first slide
  const { title, text, img: slideImg } = slides[0];

  return (
    <section className="bg-black relative overflow-hidden h-240 md:h-150 lg:h-170 pt-20">
     
     

      <div>
        {/* === Section Header === */}
        <div className="flex items-center flex-col mb-10">
          <a href="#"><img src={phunk} alt="" className="w-10" /></a>
          <p className="lg:text-6xl md:text-5xl text-4xl w-50 lg:w-140 md:w-200 text-center text-white">
            Why work{" "}
            <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
              with us?
            </span>
          </p>
        </div>

        {/* === Content Box === */}
        <div className="flex lg:w-330 md:w-170 w-80 lg:h-105 h-140 border border-gray-700 mx-auto rounded-b-xl relative 
          lg:bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent 
          opacity-95 rounded-t-[40px] overflow-hidden ">

             <div className="absolute bottom-0 lg:left-0 md:left-11 z-10">
        <img src={stuff1} alt="" className="w-90 rounded-b-xl" />
      </div>

       {/* === Bottom Gradient Overlay === */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] lg:w-[85%] rounded-b-xl md:h-100 h-100 max-w-[2100px] lg:-[200px] bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent opacity-80 rounded-t-[40px]"></div>


          <div className="flex relative  flex-col md:flex-row px-4 lg:px-10 lg:flex-row lg:items-center lg:justify-center md:justify-start lg:gap-20 gap-10 md:gap-2 transition-opacity duration-500">
            
            {/* Text */}
            <div className="transition-all duration-500 ease-in-out  pt-10">
              <h1 className="lg:text-6xl lg:w-140 w-0 text-4xl text-white">{title}</h1>
              <p className="text-lg md:text-sm lg:w-100 lg:font-semibold md:w-100 w-70 text-white mt-7">{text}</p>
              <button className=" relative w-35 md:w-32 h-12 md:h-9 rounded-full text-black 
                bg-white hover:bg-transparent hover:text-white
              
                hover:scale-105 transition-all duration-300 mt-5">
                See projects
              </button>
            </div>

            {/* Image */}
            <div className="mx-auto" >
              <img src={img5} alt={title} className=" relative lg:w-150 lg:h-80 w-75  md:h-70 md:w-150 transition-all duration-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WebflowSection6;
