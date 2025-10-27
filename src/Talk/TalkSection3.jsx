import { useState } from "react";
import img1 from "../assets/section4img1.webp"; 
import img from "../assets/newg.webp"; 
import img2 from "../assets/section4img2.webp";
import img3 from "../assets/section4img3.webp";
import img4 from "../assets/section4img4.webp";
import phunk from "../assets/phunk.png";
import stuff1 from "../assets/stuff1.svg";
import img5 from "../assets/webflowsec2img2.webp";
import { motion } from "framer-motion";

const cardFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger effect
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const faqs = [
  {
    question: "How much do your designs packages cost?",
    answer:
      "Design costs vary according to scope, format, print specifications, materials and more — so it’s difficult to give a guide price. Get in touch to discuss your needs, and we’ll create a custom estimate that includes the services relevant to your project and is costed based on a one-off or subscription model. You’ll find full details of our pricing structure here: Phunk Pricing",
  },
  {
    question: "Do you offer graphic designs services fo social media ?",
    answer:
      "Yes, we do. We can create compelling visuals that will enhance your brand's presence on social media platforms, driving engagement and building a cohesive brand narrative. From profile pictures to post graphics and story designs, we've got your social media branding covered",
  },
  {
    question: "Can you provide print-ready graphics?",
    answer:
      "Absolutely. We deliver all graphics in print-ready formats, ensuring a seamless transition from on-screen designs to physical assets. This means you can take our designs straight to the printer without any additional hassle or adjustments needed. Or, we can arrange printing and shipping for you, via one of our trusted partners.",
  },
  {
    question: "What graphic design services do you offer?",
    answer:
      "We offer a comprehensive range of graphic design services, including logo design, brand identity development, signage, packaging, and print design. We're your one-stop shop for all things design. From initial concept sketches to the final deliverable, we'll support you through the entire design journey.",
  },
];

function TalkSection3() {
  // ✅ Define the missing state
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

   const faqFade = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return(
     <section className="bg-black lg:h-170 h-210 pt-10 lg:pt-20">
   <div className="pt-30 px-5 lg:px-0">
      <h1 className="text-white flex justify-center text-5xl">
        Frequently asked questions
      </h1>
      <p className="text-[#969696] mt-8 flex justify-center text-center lg:text-left">
        Explore our Frequently Asked Questions to find the answers you've been looking
        for, without even having to ask.
      </p>

      <div className="flex flex-col lg:flex-row justify-center pt-20 lg:px-80 gap-10">
        <div className="mx-auto lg:mx-0">
          <p className="lg:text-3xl text-2xl w-90 lg:w-70 lg:pt-8 text-center lg:text-start text-white leading-loose">
            <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
              Graphic Design{" "}
            </span>
            Software Web Design
          </p>
        </div>

        <div className="max-w-xl mx-auto lg:mx-0 space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={faqFade}
                className="border border-gray-300 bg-black lg:rounded-4xl rounded-2xl w-100 lg:w-140 overflow-hidden transition-all duration-300"
              >
                {/* Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-black transition"
                >
                  <span className="font-medium text-[#969696] lg:text-xl text-sm bg-black">
                    {faq.question}
                  </span>
                  <span className="transition-all duration-300 text-2xl font-bold text-white">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] py-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden px-4 text-[#969696] bg-black">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>

    </section>
  )
}

export default TalkSection3;
