import { useState } from "react"; // ✅ import useState
import img from "../assets/webflowsec2img2.webp";
import img2 from "../assets/map.webp";

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

function TalkSection2() {
  // ✅ Define the missing state
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="h-200 lg:h-200 bg-black">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-150"
        style={{ backgroundImage: `url(${img2})` }}
      >
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/60"></div>

        {/* content */}
        <div className="relative flex flex-col lg:flex-row justify-center pt-34 lg:gap-60">
          <div className="px-3 lg:px-0">
            <h1 className="text-white lg:text-7xl text-6xl">Visit Phunk</h1>
            <p className="text-[#969696] lg:w-130 w-100 mt-5">
              Find out more about what makes us tick as a company, why we do what we do,
              and who’s behind the unique work we create.
            </p>
            <div className="mt-10">
              <a href="#" className="text-white underline">
                Open in Maps
              </a>
            </div>
          </div>

<div className="flex justify-end lg:justify-start px-3 lg:px-0 mt-10 lg:mt-0">
          <div className="bg-black w-70 px-3 py-3 h-40 rounded-xl">
            <p className="text-white w-60">
              Salts Mill, Victoria Rd, Saltaire, Shipley BD18 3LA
            </p>
            <div className="flex items-center gap-10">
              <div>
                <p className="text-[#969696] pt-6">Get Directions</p>
              </div>
              <div>
                <button
                  className="mt-8 w-20 h-10 rounded-full text-white font-semibold 
                bg-gradient-to-r from-[#00d1ff] to-[#004cff] 
                shadow-[0_0_20px_rgba(0,209,255,0.5)] 
                hover:shadow-[0_0_30px_rgba(0,209,255,0.8)] 
                hover:scale-105 transition-all duration-300"
                >
                  Maps
                </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default TalkSection2;
