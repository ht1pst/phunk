import web from "../assets/webdesign.webp"; 
import graphic from "../assets/graphicdesign.webp"; 
import custom from "../assets/customsystem.webp"; 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Create MotionLink for buttons
const MotionLink = motion(Link);

// Fade-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function Section3() {
  return (
    <section className="bg-black lg:h-370 h-560 md:h-350">
      {/* Title */}
      <motion.h1
        className="text-4xl lg:text-6xl md:text-5xl md:w-175 md:text-center pt-10 text-white lg:w-155 w-80 px-4 font-semibold lg:text-center lg:mx-auto"
        custom={0.1}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] font-bold bg-clip-text text-transparent">
          Laser-focused
        </span>{" "}
        on 3 key aspects of design.
      </motion.h1>

      {/* Cards Row */}
      <motion.div className="mt-10 flex flex-col md:flex-row lg:flex-row justify-center gap-10 lg:gap-5">
        {/* Card 1 */}
        <motion.div
          className="bg-[#1c1b1b8f] #1c1b1b8f mx-auto lg:mx-0 md:mx-0 hover:bg-neutral-900 transition px-[20px]  lg:px-5 lg:w-135 w-80 pt-10 h-150 lg:h-170 md:h-150 rounded-xl"
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="lg:text-7xl text-6xl text-gray-400" custom={0.3} variants={fadeUp}>
            01
          </motion.h1>
          <motion.p
            className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent font-semibold lg:text-4xl text-3xl mt-5"
            custom={0.4}
            variants={fadeUp}
          >
            Web Design
          </motion.p>
          <motion.p className="lg:text-lg font-semibold md:text-sm text-[16px] font-semibold leading-normal lg:w-120 w-[100%] text-[#969696] mt-5" custom={0.5} variants={fadeUp}>
            We create stunning, engaging and high-conversion websites based on the versatile and future-proof Webflow platform. Search engine optimisation and cutting-edge user experience design come as standard, along with exceptional reliability, scalability and performance. Plus, friendly support whenever you need us.
          </motion.p>
          <motion.img src={web} alt="" className="w-120 mt-10" custom={0.6} variants={fadeUp} />
        </motion.div>

        {/* Card 2 */}
        <motion.div
           className="bg-[#1c1b1b8f] #1c1b1b8f mx-auto lg:mx-0 md:mx-0 hover:bg-neutral-900 transition px-[20px]  lg:px-5 lg:w-135 w-80 pt-10 h-150 lg:h-170 md:h-150 rounded-xl"
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
        

          <motion.img src={graphic} alt="" className="w-130 mt-10 lg:mt-0 hidden lg:block" custom={0.4} variants={fadeUp} />
           <motion.h1 className="lg:text-7xl text-6xl text-gray-400 lg:mt-5 " custom={0.5} variants={fadeUp}>
            02
          </motion.h1>
          <motion.p
            className="bg-gradient-to-r lg:mt-5 mt-0 from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent font-semibold full lg:text-4xl text-3xl"
            custom={0.6}
            variants={fadeUp}
          >
            Graphic Design
          </motion.p>
          <motion.p className="lg:text-lg font-semibold md:text-sm text-[16px] font-semibold leading-normal lg:w-120 w-[100%] text-[#969696] mt-5" custom={0.7} variants={fadeUp}>
          Whether you’re building a brand from scratch, or developing new assets for your next campaign, we have a wealth of experience in logo design, brand identity development, and social media presence, along with signage, packaging and print design. We’ll support you through the whole journey, from concept to deliverable.
          </motion.p>
          <motion.img src={graphic} alt="" className="w-130 mt-10 block lg:hidden" custom={0.4} variants={fadeUp} />
        </motion.div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
         className="bg-[#1c1b1b8f] #1c1b1b8f mx-auto lg:mx-0 md:mx-0 hover:bg-neutral-900 transition px-[20px]  lg:px-5 lg:w-135 w-80 pt-10 h-160 lg:h-170 md:h-150 rounded-xl"
        custom={0.4}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <motion.h1 className="lg:text-7xl text-6xl text-gray-400" custom={0.5} variants={fadeUp}>
            03
          </motion.h1>
          <motion.p
            className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent font-semibold lg:text-4xl text-3xl"
            custom={0.6}
            variants={fadeUp}
          >
            Custom System Development
          </motion.p>
          <motion.p className="lg:text-lg font-semibold md:text-sm text-[16px] font-semibold leading-normal lg:w-120 w-[100%] text-[#969696] mt-5" custom={0.7} variants={fadeUp}>
           Finding an off-the-shelf app that fits your business model can be tricky. At Phunk we create custom systems to meet specific needs — from customer portals to dashboards, quoting tools, mobile apps, SaaS solutions and more. We have specific experience in HTML, CSS, REACT, NextJS, Laravel, JQuery, Bootstrap, PHP, and MySQL.
          </motion.p>
        </div>

<div className="mt-10">
        <motion.img src={custom} alt="" className="w-130" custom={0.8} variants={fadeUp} />
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div className="flex  lg:flex-row md:flex-row justify-center lg:gap-4 px-6 mt-10">
        <MotionLink
          to="/talk"
          className="lg:w-42 w-35 mx-auto flex justify-center text-sm items-center lg:mx-0 md:mx-0 lg:h-12 h-10 rounded-full text-white bg-gradient-to-r from-[#00d1ff] to-[#004cff] shadow-[0_0_20px_rgba(0,209,255,0.5)] transition-all duration-300"
          custom={0.9}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          See our plans
        </MotionLink>

        <MotionLink
          to="/talk"
          className="lg:w-42 w-35 mx-auto flex justify-center text-sm items-center lg:mx-0 md:mx-0 lg:h-12 h-10 bg-white text-black rounded-full hover:bg-black hover:text-white transition"
          custom={1.0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Unique projects?
        </MotionLink>
      </motion.div>
    </section>
  );
}

export default Section3;
