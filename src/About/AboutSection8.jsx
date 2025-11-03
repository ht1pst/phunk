import { motion } from "framer-motion";
import img1 from "../assets/sec81.webp"; 
import img2 from "../assets/sec82.webp"; 

function AboutSection8() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="bg-black lg:h-250 h-400"
    
    >
      <div className="pt-20">
        {/* Section Header */}
        <motion.div
          className=" px-[20px] lg:px-0"
           initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={fadeUp}
        >
          <h1 className="text-white lg:text-6xl text-4xl w-full lg:flex justify-center lg:mx-auto gap-5 font-semibold">
            The <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">people</span> behind the projects.
          </h1>
          <p className="text-[#969696] text-[15px] lg:text-center w-[100%] lg:w-130 mx-auto mt-5">
            Phunk works because it’s a genuine collaboration between experts — equality of ideas, cross-pollination of skills and a healthy obsession with quality. Here’s the team that makes it happen.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="flex flex-col lg:flex-row justify-center  pt-30 relative">
          {/* Blue Glow */}
          <div className="absolute hidden lg:block bottom-0 right-0 w-30 h-80 bg-[#00bfff] rounded-full blur-[120px] opacity-100"></div>

          {/* Joe Crabtree */}
          <motion.div
            className="bg-[#0d0d0d] lg:w-130 mx-auto lg:mx-0  lg:h-170 h-150 w-75 rounded-xl"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={img1} alt="Joe Crabtree" className="w-75 rounded-xl lg:w-130 mx-auto lg:mx-0" />
            <h1 className="bg-gradient-to-r mt-7 px-[20px]  lg:px-4 from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent text-3xl font-semibold">
              Joe Crabtree
            </h1>
            <div className=" lg:px-4 px-[20px]">
            <div className="p-[2px] mt-5 rounded-full  bg-gradient-to-r from-[#00d1ff] to-[#004cff] w-42 h-8">
  <p className="rounded-xl bg-black text-white text-sm flex justify-center px-2 py-1">
   Co Founder/Director
  </p>
</div>
            </div>
            <p className="text-[#969696] text-[15px] lg:w-120 w-[100%]  px-[20px] mt-7  lg:px-4 ">
              Meet Joe, our lead designer here at Phunk. Joe has 10 years of experience in graphic design, working with some of the world’s biggest brands. Specialising in branding and graphics, Joe relishes the challenge of building a brand from the ground up.
            </p>
          </motion.div>

          {/* Joe Murray */}
          <motion.div
            className="bg-[#0d0d0d] lg:w-130 mx-auto lg:mx-0 lg:h-170 h-140 w-75 rounded-xl"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={img2} alt="Joe Murray" className="lg:w-130 lg:h-95 w-75 h-55 object-cover rounded-xl mx-auto lg:mx-0" />
            <h1 className="bg-gradient-to-r mt-7 px-[20px] from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent text-3xl font-semibold">
              Joe Murray
            </h1>
            <div className="px-[20px]">
               <div className="p-[2px] mt-5 rounded-full  bg-gradient-to-r from-[#00d1ff] to-[#004cff] w-42 h-8">
  <p className="rounded-xl bg-black text-white text-sm flex justify-center px-2 py-1">
   Co Founder/Director
  </p>
</div>
            </div>
            <p className="text-[#969696] lg:w-120 w-[100%] mt-7 px-[20px] text-[15px]  ">
              Meet Joe, Creative Director. He is a designer with over 10 years experience in the field. Branding, UX and animation are his main skills and, when he’s not working his creative magic, he is usually mountain biking, playing basketball, and getting away into the outdoors in his campervan.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection8;
