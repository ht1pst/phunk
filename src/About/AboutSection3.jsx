import img from "../assets/aboutsecimg2.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AboutSection3() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-center lg:gap-40 gap-20 lg:pt-44 lg:h-200 h-180">
        {/* Text Content */}
        <div className="px-4 flex flex-col">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0 }}
            className="text-gray-900 mt-10 lg:text-4xl lg:w-105 text-3xl w-80 font-semibold"
          >
            After graduating, the Joes took different paths,
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-gray-900 mt-10 sm:w-[90%] md:w-170 lg:w-120 font-medium"
          >
            JM heading into a marketing agency role focused on web design, branding and animation, and JC working on print design and web advertising for household names like Kellogg's, Fred Perry and Axe/Lynx.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="text-gray-900 mt-10 sm:w-[90%] md:w-170 lg:w-120 font-medium"
          >
            They kept in touch, collaborating on various projects and inevitably moved towards a closer working relationship which made the most of their complementary skills. While the rest of the world transitioned towards remote working during COVID, Joe and Joe decided they’d rather open an office, and Phunk was officially born.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Link
              to="/talk"
              className="flex justify-center items-center w-40 h-11 rounded-full text-white font-semibold 
                bg-gradient-to-r from-[#00d1ff] to-[#004cff] 
                shadow-[0_0_20px_rgba(0,209,255,0.5)] 
                hover:shadow-[0_0_30px_rgba(0,209,255,0.8)] 
                hover:scale-105 transition-all duration-300"
            >
              Start a project
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
           initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.6 }}
          className="px-4 flex"
        >
          <img src={img} alt="" className="lg:w-115 w-100 object-cover rounded-xl" />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection3;
