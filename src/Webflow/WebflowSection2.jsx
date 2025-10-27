import { motion } from "framer-motion";
import img from "../assets/webflowsec2img2.webp";

function WebflowSection2() {
  return (
    <section className="bg-black lg:h-200 h-200 pt-20 px-5 lg:px-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="lg:text-6xl text-4xl text-white font-semibold flex justify-center lg:justify-start gap-3">
            What is{" "}
            <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
              Webflow?
            </span>
          </h1>
          <p className="text-gray-400 mt-6 lg:w-4/5">
            Webflow is a cutting-edge web design tool that seamlessly merges design and code. It empowers us as creators, allowing responsive website construction, parallel workflows and rapid prototyping — allowing us to craft sites that both captivate and perform. For our clients, it offers intuitive interfaces, unmatched flexibility — and exceptional performance, scalability and reliability.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <img src={img} alt="Webflow illustration" className="w-90 lg:w-full h-auto" />
        </motion.div>

      </div>
    </section>
  );
}

export default WebflowSection2;
