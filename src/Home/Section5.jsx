import { motion } from "framer-motion";
import img1 from "../assets/section5img1.avif";
import img2 from "../assets/section5img2.webp";
import img3 from "../assets/section5img3.webp";
import img4 from "../assets/section5img4.webp";
import img5 from "../assets/section5img5.webp";
import img6 from "../assets/section5img6.webp";

function Section5() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-black lg:h-780 h-1650 lg:px-50 md:h-750">
      <div className="pt-20 md:px-4">

        {/* === Animated Heading === */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="lg:text-5xl text-4xl md:text-5xl flex justify-center lg:justify-start md:justify-start text-white font-semibold"
        >
          Dive into the{" "}
          <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
            work
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-md md:text-sm hidden lg:block md:block md:w-10 lg:w-140 md:w-100 text-gray-400 mt-5"
        >
          As creatives ourselves, we know that what you really want to see is
          the work we’ve actually put live. Here’s a showcase of some of our
          recent projects, across a range of sectors.
        </motion.p>
      </div>

      <div className="px-4 gap-120 md:gap-20 pt-0 lg:pt-0 flex flex-col">

        {/* ---------- DRIVELLODGE ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col lg:flex-row md:flex-row items-center justify-center md:items-start lg:items-start gap-20 md:gap-10 h-150 md:h-90 lg:sticky lg:top-0 pt-100 md:pt-20 lg:pt-40"
        >
          <div>
            <img src={img1} alt="" className="w-120 h-110 md:w-90 md:h-90 object-cover" />
          </div>
          <div className="bg-black">
            <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-center md:justify-center lg:justify-start items-center gap-5 bg-black">
              <button className="border border-blue-500 text-white w-[200px] md:w-[220px] lg:w-[250px] text-sm flex justify-center rounded-full">
                Web Design/Development
              </button>
              <button className="border border-blue-500 text-white w-[110px] md:w-[130px] lg:w-[100px] text-sm flex justify-center rounded-full">
                UI/UX Design
              </button>
              <button className="border border-blue-500 text-white w-[100px] md:w-[120px] text-sm flex justify-center rounded-full">
                Configurator
              </button>
            </div>

            <div className="mt-10">
              <a href="#" className="text-white lg:text-6xl text-3xl">
                Drivelodge
              </a>
            </div>
            <p className="text-md md:text-sm md:w-70 lg:w-140 text-gray-400 mt-6">
              Founded as a passion project by enthusiasts David and Joanne,
              Drivelodge has built on its reputation for crafting high-quality
              high-top and elevating camper van roofs to become a 30-strong
              team of designers and engineers serving a nationwide customer
              base.
            </p>
            <div className="mt-10">
              <a href="#" className="text-white underline underline-offset-7 decoration-1">
                See full case study{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ---------- HACIEN ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col lg:flex-row md:flex-row items-center justify-center md:items-start lg:items-start gap-20 md:gap-10 h-150 md:h-90 lg:sticky lg:top-0 pt-100 md:pt-20 lg:pt-40"
        >
          <div>
            <img src={img2} alt="" className="w-120 h-110 md:w-90 md:h-90 object-cover" />
          </div>
          <div className="bg-black">
            <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-center md:justify-center lg:justify-start items-center gap-5 bg-black">
              <button className="border border-blue-500 text-white w-[200px] md:w-[200px] text-sm flex justify-center rounded-full">
                Web Design/Development
              </button>
              <button className="border border-blue-500 text-white w-[130px] md:w-[130px] text-sm flex justify-center rounded-full">
                UI/UX Design
              </button>
              <button className="border border-blue-500 text-white w-[160px] md:w-[160px] text-sm flex justify-center rounded-full">
                Webflow Training
              </button>
            </div>

            <div className="pt-3 hidden lg:block">
              <button className="border-1 border-blue-500 text-white w-30 flex justify-center rounded-full text-sm h-8 items-center">
                Graphic Design
              </button>
            </div>

            <div className="mt-10">
              <a href="#" className="text-white lg:text-6xl text-3xl">
                Hacien
              </a>
            </div>
            <p className="text-md md:text-sm md:w-70 lg:w-140 text-gray-400 mt-6">
              HACIEN is a premium tequila brand supplying high-end hospitality
              and retail locations worldwide. They approached Phunk to
              undertake a comprehensive design project comprising web,
              packaging and marketing assets as well as 3D renders of their
              signature bottles.
            </p>
            <div className="mt-10">
              <a href="#" className="text-white underline underline-offset-7 decoration-1">
                See full case study{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ---------- MOBILLEO ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col lg:flex-row md:flex-row items-center justify-center md:items-start lg:items-start gap-20 md:gap-10 h-150 md:h-90 lg:sticky lg:top-0 pt-100 md:pt-20 lg:pt-40"
        >
          <div>
            <img src={img3} alt="" className="w-120 h-110 md:w-90 md:h-90 object-cover" />
          </div>
          <div className="bg-black">
            <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-center md:justify-center lg:justify-start items-center gap-5 bg-black">
              <button className="border-1 border-blue-500 text-white w-40 md:text-sm flex justify-center rounded-full">
                Splash Screens
              </button>
              <button className="border-1 border-blue-500 text-white w-27 md:text-sm flex justify-center rounded-full">
                Illustrations
              </button>
              <button className="border-1 border-blue-500 text-white w-30 md:text-sm flex justify-center rounded-full">
                Graphic Design
              </button>
            </div>

            <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-center md:justify-center lg:justify-start gap-2 pt-3">
              <button className="border-1 border-blue-500 text-white w-35 md:text-sm flex justify-center rounded-full">
                Lottie Animations
              </button>
              <button className="border-1 border-blue-500 text-white w-35 md:text-sm flex justify-center rounded-full">
                Webflow Training
              </button>
            </div>

            <div className="mt-10">
              <a href="#" className="text-white lg:text-6xl text-3xl">
                Mobilleo
              </a>
            </div>
            <p className="text-md md:text-sm md:w-70 lg:w-140 text-gray-400 mt-6">
              Mobilleo is a SaaS solution making it easy for organisations to
              manage global business travel for their employees. The team at
              Mobilleo approached Phunk to provide a range of design and
              illustration services, building on their existing brand, for use
              across their website and app.
            </p>
            <div className="mt-10">
              <a href="#" className="text-white underline underline-offset-7 decoration-1">
                See full case study{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ---------- MANNSON FREIGHT ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col lg:flex-row md:flex-row items-center justify-center md:items-start lg:items-start gap-20 md:gap-10 h-150 md:h-90 lg:sticky lg:top-0 pt-100 md:pt-20 lg:pt-40"
        >
          <div>
            <img src={img4} alt="" className="w-120 h-110 md:w-90 md:h-90 object-cover" />
          </div>
          <div className="bg-black">
            <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-center md:justify-center lg:justify-start items-center gap-5 bg-black">
              <button className="border-1 border-blue-500 text-white w-50 md:text-sm flex justify-center rounded-full">
                Webflow Development
              </button>
              <button className="border-1 border-blue-500 text-white w-27 md:text-sm flex justify-center rounded-full">
                UI/UX Design
              </button>
              <button className="border-1 border-blue-500 text-white w-35 md:text-sm flex justify-center rounded-full">
                Webflow Training
              </button>
            </div>

            <div className="pt-3 hidden lg:block">
              <button className="border-1 border-blue-500 text-white w-40 flex justify-center rounded-full h-8 items-center">
                Graphic Design
              </button>
            </div>

            <div className="mt-10">
              <a href="#" className="text-white lg:text-6xl text-3xl">
                Mannson Freight
              </a>
            </div>
            <p className="text-md md:text-sm md:w-70 lg:w-140 text-gray-400 mt-6">
              Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.
            </p>
            <div className="mt-10">
              <a href="#" className="text-white underline underline-offset-7 decoration-1">
                See full case study{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ---------- BOX iQ ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col lg:flex-row md:flex-row items-center justify-center md:items-start lg:items-start gap-20 md:gap-10 h-150 md:h-90 lg:sticky lg:top-0 pt-100 md:pt-20 lg:pt-40"
        >
          <div>
            <img src={img5} alt="" className="w-120 h-110 md:w-90 md:h-90 object-cover" />
          </div>
          <div className="bg-black">
            <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-center md:justify-center lg:justify-start items-center gap-5 bg-black">
              <button className="border-1 border-blue-500 text-white w-50 md:text-sm flex justify-center rounded-full">
                Webflow Development
              </button>
              <button className="border-1 border-blue-500 text-white w-27 md:text-sm flex justify-center rounded-full">
                UI/UX Design
              </button>
              <button className="border-1 border-blue-500 text-white w-35 md:text-sm flex justify-center rounded-full">
                Webflow Training
              </button>
            </div>

            <div className="pt-3 hidden lg:block">
              <button className="border-1 border-blue-500 text-white w-40 flex justify-center rounded-full h-8 items-center">
                Graphic Design
              </button>
            </div>

            <div className="mt-10">
              <a href="#" className="text-white lg:text-6xl text-3xl">
                Box iQ
              </a>
            </div>
            <p className="text-md md:text-sm md:w-70 lg:w-140 text-gray-400 mt-6">
              Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.
            </p>
            <div className="mt-10">
              <a href="#" className="text-white underline underline-offset-7 decoration-1">
                See full case study{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ---------- THE HONEST WATCH DEALER ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col lg:flex-row md:flex-row items-center justify-center md:items-start lg:items-start gap-20 md:gap-10 h-150 md:h-90 lg:sticky lg:top-0 pt-100 md:pt-20 lg:pt-40"
        >
          <div>
            <img src={img6} alt="" className="w-120 h-110 md:w-90 md:h-90 object-cover" />
          </div>
          <div className="bg-black">
            <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-center md:justify-center lg:justify-start items-center gap-5 bg-black">
              <button className="border-1 border-blue-500 text-white w-50 md:text-sm flex justify-center rounded-full">
                Webflow Development
              </button>
              <button className="border-1 border-blue-500 text-white w-27 md:text-sm flex justify-center rounded-full">
                Visual identity
              </button>
              <button className="border-1 border-blue-500 text-white w-25 md:text-sm flex justify-center rounded-full">
                Packaging
              </button>
            </div>
            <div className="pt-3 flex flex-wrap md:flex-wrap lg:flex-nowrap justify-center md:justify-center lg:justify-start">
              <button className="border-1 border-blue-500 text-white w-45 md:text-sm flex justify-center rounded-full">
                Apparel & Merchandise
              </button>
            </div>

            <div className="mt-10">
              <a href="#" className="text-white lg:text-6xl text-3xl">
                The Honest Watch <br /> Dealer
              </a>
            </div>
            <p className="text-md md:text-sm md:w-70 lg:w-140 text-gray-400 mt-6">
              The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.
            </p>
            <div className="mt-10">
              <a href="#" className="text-white underline underline-offset-7 decoration-1">
                See full case study{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Section5;
