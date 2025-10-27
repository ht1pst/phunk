import { useState } from "react";
import { motion } from "framer-motion";
import robot from "../assets/robot-phunk 1.webp"; 
import { Link } from "react-router-dom";
import img from "../assets/webflowsec3img.webp"; 
function WebflowSection3() {
 

  return (
    <section
      className="bg-black lg:pt-40 pt-10 lg:h-[800px] h-320 md:h-160 relative overflow-hidden"
      
    >
      {/* Glowing background dots */}
      <div className="absolute hidden lg:block top-90 left-0 w-30 h-80 bg-green-300 rounded-full blur-[120px] opacity-70"></div>
      <div className="absolute hidden lg:block top-0 right-0 w-40 h-80 bg-[#00bfff] rounded-full blur-[120px] opacity-70"></div>

      {/* Main content */}
      <div className="flex flex-col items-center lg:flex-row md:flex-row  justify-center lg:gap-35 gap-20 relative z-10 md:px-5">
        {/* Left text section */}
        <div className="mx-auto lg:mx-0">
          <motion.h1 initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="lg:text-6xl w-88 lg:w-100 text-4xl md:text-5xl md:w-100 text-white leading-tight px-2">
           Our history
with {" "}
            <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
             Webflow.
            </span>
           
          </motion.h1>

          <motion.p  initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} className="text-sm leading-relaxed  lg:w-120 md:w-100 w-90 text-gray-400 mt-10 px-2">
           At Phunk, we’ve been working with Webflow since — well basically — since it launched. Once we realised it was clearly the best choice for a whole range of our clients’ use cases, we made the relationship official by becoming a Webflow partner. Since then, our deeper involvement with the platform has given us the tools and skills to utilise it in new and innovative ways. 

          </motion.p>

          <motion.p initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} className="text-sm leading-relaxed lg:w-120 md:w-100 w-90 text-gray-400 mt-10 px-3">
           Basically, we’re massive Webflow geeks, so whatever you want to do with the platform, we can make it happen.
          </motion.p>
<div className="px-2">
          <motion.Link to="/talk"
            className="w-28 flex justify-center items-center md:w-25 md:h-9 h-12 rounded-full text-white font-semibold 
              bg-gradient-to-r from-[#00d1ff] to-[#004cff] 
              shadow-[0_0_20px_rgba(0,209,255,0.5)] 
              hover:shadow-[0_0_30px_rgba(0,209,255,0.8)] 
              hover:scale-105 transition-all duration-300 mt-8"
                initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            Hire Us
          </motion.Link>
          </div>
        </div>

        {/* Robot image with motion */}
        
        <div>
          <img src={img} alt="Robot" className=" md:w-90 lg:w-120 select-none pointer-events-none " />
       </div>
      </div>
    </section>
  );
}

export default WebflowSection3;
