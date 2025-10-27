import { motion } from "framer-motion";
import quality from "../assets/star.png";
import phunk from "../assets/phunksc.png";
import partner from "../assets/partner2.webp";

function AboutSection6() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black lg:h-330 h-500 pt-20">
      {/* Section Title */}
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-white mt-10 lg:text-6xl text-4xl font-medium">
          Phunk{" "}
          <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
            Values.
          </span>
        </h1>
      </motion.div>

      {/* First Row */}
      <div className="flex flex-col px-4 lg:flex-row lg:gap-3 gap-10 justify-center pt-10">
        <motion.div
          className="lg:w-135 w-[100%] h-70 bg-[#0d0d0d] rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="lg:px-5 lg:py-5 p-5">
            <img src={quality} alt="" className="w-5" />
            <div className="flex gap-[40%] sm:gap-[35px] lg:gap-70 items-center text-4xl">
              <h1 className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent text-md">
                Quality
              </h1>
              <p className="text-gray-500 lg:text-7xl text-6xl">01</p>
            </div>
            <p className="text-white lg:w-125 w-[96%] sm:w-[90%] text-sm pt-7 font-semibold">
              We don’t send anything out the door that we’re not proud to put our names to. There’s no pride in a rushed job, a cobbled-together piece of code, or a logo that looks like everyone else’s — we check and double-check every element of our projects to guarantee its quality.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-135 w-[100%] h-70 bg-[#0d0d0d] rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="lg:px-5 lg:py-5 p-5">
            <img src={quality} alt="" className="w-5" />
            <div className="flex gap-[28%] sm:gap-[35px] lg:gap-60 items-center text-4xl">
              <h1 className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent text-md">
                Reliability
              </h1>
              <p className="text-gray-500 lg:text-7xl text-6xl">02</p>
            </div>
            <p className="text-white lg:w-125 w-[96%] sm:w-[90%] text-sm pt-7 font-semibold">
              It’s important to us that you can trust we’ll deliver what we promise — whether that’s meeting a tight deadline, returning a call, or reworking a draft ahead of an important presentation. In every interaction, we go the extra mile for our clients to reinforce that trust.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col px-4 lg:flex-row lg:gap-3 gap-10 justify-center pt-10">
        <motion.div
          className="lg:w-135 w-[100%] sm:w-[90%] h-70 bg-[#0d0d0d] rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="lg:px-5 lg:py-5 p-5">
            <img src={quality} alt="" className="w-5" />
            <div className="flex gap-[28%] sm:gap-[35px] lg:gap-60 items-center text-4xl">
              <h1 className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent text-md">
                Creativity
              </h1>
              <p className="text-gray-500 lg:text-7xl text-6xl">03</p>
            </div>
            <p className="text-white lg:w-125 w-[96%] sm:w-[90%] text-sm pt-7 font-semibold">
              Each member of the team at Phunk has built their creative career on the principle that the work only matters if it’s original, effective and exciting — we’re not interested in building anything substandard, derivative or boring.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-135 w-[100%] h-70 bg-[#0d0d0d] rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="lg:px-5 lg:py-5 p-5">
            <img src={quality} alt="" className="w-5" />
            <div className="flex gap-[28%] sm:gap-[35px] lg:gap-60 items-center text-4xl">
              <h1 className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent text-md">
                Ambition
              </h1>
              <p className="text-gray-500 lg:text-7xl text-6xl">04</p>
            </div>
            <p className="text-white lg:w-125 w-[96%] sm:w-[90%] text-sm pt-7 font-semibold">
              We’re in the creative industry because we want to push boundaries, find new ways to communicate and innovate at every stage of our process. If we’re not always striving to outdo our previous work, and motivating each other to do better, we’re doing it wrong.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Webflow Section */}
      <motion.div
        className="pt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-wrap items-center gap-5 justify-center">
          <h1 className="text-white lg:text-6xl text-5xl">Webflow</h1>
          <h1 className="text-white lg:text-6xl text-5xl">@</h1>
          <img src={phunk} alt="" className="" />
        </div>
        <p className="text-gray-500 lg:w-120 w-[90%] sm:w-[90%] text-center mx-auto lg:pt-5 pt-10">
          We’re immensely proud to be official{" "}
          <span className="text-white font-semibold">Webflow partners</span> — we’ve been avid users of the platform since the early days, and it’s amazing to be part of its development. Check out our Webflow page to learn why we (and our clients) love it so much. For now, here are the basics.
        </p>
        <div className="flex justify-center pt-5">
          <img src={partner} alt="" className="lg:w-60 w-60 pt-5" />
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection6;
