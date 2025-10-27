import img from "../assets/aboutsec5img.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AboutSection5() {
  return (
    <section className="h-180">
      <div className="flex relative justify-center pt-40">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-col h-110 lg:h-114 col-reverse lg:flex-row flex justify-center items-center h-90 rounded-xl gap-40 bg-gradient-to-r lg:w-320 w-95 from-[#2d8fc8ff] to-[#2ad5d5ff]"
        >
          <div className="px-3 pt-28">
            <h1 className="lg:text-6xl text-4xl text-white">It’s been a lot of fun.</h1>
            <p className="text-3xl text-white mt-6">Now let's do more!</p>
            <Link to="/talk" className="bg-white flex justify-center items-center w-30 h-10 rounded-full mt-6">
              Talk to us
            </Link>
          </div>
          <div className="absolute lg:static bottom-60">
            <img src={img} alt="" className="lg:w-110 lg:h-135 w-60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection5;
