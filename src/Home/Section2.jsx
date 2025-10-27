import { useState } from "react";
import { motion } from "framer-motion";
import robot from "../assets/robot-phunk 1.webp"; 
import { Link } from "react-router-dom";

function Section2() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 40;
    const y = (e.clientY - innerHeight / 2) / 40;
    setMousePosition({ x, y });
  };

  return (
    <section
      className="bg-black lg:pt-40 pt-10 lg:h-[800px] h-320 md:h-160 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Glowing background dots */}
      <div className="absolute hidden lg:block top-90 left-0 w-30 h-80 bg-green-300 rounded-full blur-[120px] opacity-70"></div>
      <div className="absolute hidden lg:block top-0 right-0 w-40 h-80 bg-[#00bfff] rounded-full blur-[120px] opacity-70"></div>

      {/* Main content */}
      <div className="flex flex-col items-center lg:flex-row md:flex-row justify-center lg:gap-35 gap-20 relative z-10 md:px-5">
        {/* Left text section */}
        <div className="mx-auto lg:mx-0">
          <motion.h1
            className="lg:text-6xl w-88 lg:w-150 text-4xl md:text-5xl md:w-100 text-white leading-tight px-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            We’re{" "}
            <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
              Phunk
            </span>
            . Pleased to meet you.
          </motion.h1>

          <motion.p
            className="text-sm lg:w-170 md:w-100 w-90 text-gray-400 mt-10 px-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Phunk is a full-service digital marketing agency based out of
            Saltaire, in West Yorkshire, UK. Our niche is storytelling taking
            your raw ideas and vision and translating them into a clear brand
            narrative, expressed through design, video, copy and UX.
          </motion.p>

          <motion.p
            className="text-sm lg:w-170 md:w-100 w-90 text-gray-400 mt-10 px-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            If you’re looking for a forward-thinking team of creatives to build
            a brand identity that stands out from the crowd, then you’re exactly
            where you need to be.
          </motion.p>

          <motion.Link
            to="/talk"
            className="w-28 md:w-25 md:h-9 h-12 flex justify-center items-center rounded-full text-white font-semibold 
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

        {/* Robot image with motion */}
        <motion.div
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            rotateY: mousePosition.x / 8,
            rotateX: -mousePosition.y / 8,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <img
            src={robot}
            alt="Robot"
            className="w-80 md:w-90 select-none pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Section2;
