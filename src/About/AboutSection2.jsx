import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../assets/aboutsec2img.webp";

function AboutSection2() {
  // Bottom-up fade variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="lg:h-140 h-125 w-full relative">
      <div className="lg:px-60 lg:pt-30 pt relative">
        {/* Background blur circle */}
        <div className="absolute hidden lg:block top-0 right-0 w-30 h-80 bg-[#00bfff] rounded-full blur-[120px] opacity-100"></div>

        {/* Talk Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="absolute right-10 bottom-10 lg:right-70 lg:bottom-10"
        >
          <Link
            to="/talk"
            className="bg-white flex justify-center items-center w-30 h-10 rounded-full"
          >
            Talk to us
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0 }}
          className="text-gray-900 mt-10 px-4 lg:px-0 lg:text-6xl w-85 lg:w-120 text-4xl font-semibold"
        >
          The origin{" "}
          <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
            story
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="text-gray-900 mt-7 md:w-170 lg:w-160 w-[100%] px-[20px] font- text-[15px] "
        >
         The partnership behind Phunk began a long time before the company was officially established. Our founders Joe Murray and Joe Crabtree first met at college, both studying creative and digital media courses —never imagining that sharing a first name would make their copywriter’s job unnecessarily difficult at some point in the future.
        </motion.p>

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.6 }}
          className="mt-10 mx-auto flex justify-center px-4 lg:px-0"
        >
          <img
            src={img}
            alt=""
            className="lg:w-260 w-100 h-50 lg:h-90 rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection2;
