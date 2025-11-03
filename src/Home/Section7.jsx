import { useRef, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/section7img1.webp";
import img2 from "../assets/section7img2.webp";
import img3 from "../assets/section7img3.webp";
import img4 from "../assets/section7img4.webp";
import img5 from "../assets/section7img5.webp";
import img6 from "../assets/section7img6.webp";

function Section7() {
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Scroll by exactly one card width
  const scrollLeft = () => {
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 40; // card width + gap
    scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 40;
    scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const textFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardFade = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const testimonials = [
    {
      name: "Josh Gudgeon",
      company: "Breaking Bread",
      img: img1,
      text: "Phunk Creative recently delivered on the branding of our new podcast. The team were responsive, professional & a real pleasure to work with.",
    },
    {
      name: "Sarah Baugh",
      company: "Get Dynamic",
      img: img2,
      text: "Our new website is so cool, really engaging and user friendly. Will definitely be using them again on future projects.",
    },
    {
      name: "Stuart Crowder",
      company: "Mannson Freight",
      img: img3,
      text: "Our brand means the world to us and if yours does too then we could not recommend any other partner more highly than Phunk Creative.",
    },
    {
      name: "Alex Lambert",
      company: "Lambert&Co",
      img: img4,
      text: "Our branding is regularly complimented, the sleek simplistic design fits perfectly & helps us stand out from our competitors.",
    },
    {
      name: "Jordan Sims",
      company: "BOXIQ",
      img: img5,
      text: "Phunk have been brilliant all through out the process. Super responsive & fair pricing. I would highly recommend Phunk for all web development needs.",
    },
    {
      name: "Josh Illingworth",
      company: "Wave Platform",
      img: img6,
      text: "Phunk did a fantastic job on my latest project, they are easy to work with and very professional. Highly recommend!",
    },
  ];

  return (
    <section
      className="bg-black relative lg:h-130 h-[600px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="pt-10">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textFade}
        >
          <h1 className="lg:text-6xl md:text-5xl text-4xl lg:text-center text-start text-white px-[20px] lg:w-[900px] mx-auto font-semibold ">
            What our clients think of{" "}
            <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
              Phunk.
            </span>
          </h1>
          <p className="text-md text-[#969696] w-[100%] lg:w-full font-semibold lg:mx-auto lg mt-5 lg:text-center text-start px-[20px] lg:px-0">
            We’re honest about our skills and abilities — and we’re delighted that our clients agree.
          </p>
        </motion.div>

        {/* Scrollable cards */}
        <div className="relative mt-10 w-[90%] mx-auto">
          {/* Left arrow */}
          <button
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-50 text-white text-4xl transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            ❮
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {testimonials.map((t, idx) => (
              <div
               
                className="min-w-[300px] h-60 lg:h-60 sm:min-w-[300px] lg:min-w-[29%] bg-gradient-to-b from-[#1a1a1a] via-[#111] to-black rounded-xl border border-[#969696]"
              >
                <div className="py-6 px-[20px] lg:py-10 lg:px-6">
                  <div className="flex lg:gap-20 gap-15  lg:items-center">
                   
                    <div>
                      <h1 className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent text-2xl font-semibold lg:text-3xl lg:w-full  ">
                        {t.name}
                      </h1>
                      <p className="text-sm text-white font-semibold">{t.company}</p>
                    </div>
                     <img src={t.img} alt={t.name} className="w-12 h-12 lg:w-15 lg:h-15 rounded-full" />
                  </div>
                  <p className="text-[#969696] text-sm mt-4 lg:mt-6">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-50 text-white text-4xl transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section7;
