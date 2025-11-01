import img1 from "../assets/section6img1.webp";
import img2 from "../assets/section6img2.webp";
import img3 from "../assets/section6img3.webp";
import img4 from "../assets/section6img4.webp";
import img5 from "../assets/section6img5.webp";
import img6 from "../assets/section6img6.webp";
import img8 from "../assets/section6img8.webp";
import { motion } from "framer-motion";

function Section6(){

    const projectFade = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

    return(
        <section className="bg-black lg:px-45 lg:h-180 md:h-150 pt-20 h-320">
            <motion.div  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={projectFade}>
                <div>
                    <h1 className="lg:text-6xl lg:w-200 text-4xl md:text-5xl text-white font-semibold px-4 ">Trusted by leading <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">brands.</span></h1>
                    <p className="text-md  text-[#969696] mt-10 px-4">We’re proud to have worked with some of the most innovative, creative and inventive brands around. If you come on board you’ll be in great company</p>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row lg:gap-40 gap-20 items-center justify-center pt-20">
<img src={img1} alt=""  className=" w-50 h-7 md:w-30 md:h-4 lg:w-55 lg:h-7" />
<img src={img2} alt="" className="  w-40 h-10 md:w-25 md:h-5 lg:w-55 lg:h-7" />
<img src={img3} alt=""className=" w-50 h-10 md:w-30 md:h-5 lg:w-55 lg:h-7" />
<img src={img4} alt="" className=" w-20 h-10 md:w-15 md:h-5 lg:w-20 lg:h-10"/>


</div>
                <div className="flex flex-col md:flex-row lg:flex-row lg:gap-40 gap-20 items-center justify-center mt-20">
<img src={img5} alt="" className="  w-40 h-10 md:w-30 md:h-7 lg:w-35 lg:h-10" />
<img src={img6} alt="" className="  w-50 h-10 md:w-30 md:h-7 lg:w-45 lg:h-7" />
<img src={img1} alt=""  className="  w-50 h-7 md:w-30 md:h-5 lg:w-55 lg:h-7"/>
<img src={img8} alt=""  className=" w-15 h-10 md:w-10 md:h-7 lg:w-15 lg:h-10"/>

                </div>
            </motion.div>

             <div className="border-1 border-gray-900 lg:w-300 w-10 mx-auto mt-40"></div>
        </section>
    )
}
export default Section6;