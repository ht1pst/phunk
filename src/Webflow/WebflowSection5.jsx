import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/webflowsec5img1.webp";
import img2 from "../assets/webflowsec5img2.webp";
import img3 from "../assets/webflowsec5img3.webp";
import img4 from "../assets/webflowsec5img4.webp";
import img5 from "../assets/webflowsec5img5.webp";

const slides = [
  {
    img: img1,
    title: "Company websites",
    text: "Presenting your brand to the world? We’ve got it covered. Webflow gives us the breadth and depth of options we need to translate your vision into reality, with highly functional, highly engaging and high-converting sites. And if you’re managing your own content updates, you need the most user-friendly CMS on the market.",
  },
  {
    img: img2,
    title: "Landing pages",
    text: "Getting a campaign-specific landing page up and running on time is easy with Webflow. And the crucial A/B testing process to figure out the right combination of text, graphics, videos and calls-to-action to turn those prospects into customers is just as simple, with Webflow making it easy to create several possible layout variations from a single template.",
  },
  {
    img: img3,
    title: "E-commerce",
    text: "The ability to prototype quickly and test variations is also a massive boost for anyone running an online store — those 0.1% changes in conversion rates add up to a massive bottom-line impact. And with Webflow’s built-in ecommerce backend, or the option to integrate seamlessly with existing providers, there’s really no better choice of platform — if you ask us.",
  },
  {
    img: img4,
    title: "Visual portfolios",
    text: "Let the work be the star — that’s our motto. Webflow gives us the freedom to design highly visual, highly engaging portfolio sites that show off the best of our clients’ work. Think fullscreen video, immersive 3D, high-quality galleries — whatever you have to be proud of, you can show it to the world through a Webflow-powered site.",
  },
  {
    img: img5,
    title: "Event portals",
    text: "The ability to quickly create and implement new microsites based on an existing template, such as your company website, makes Webflow the perfect CMS for developing interactive event websites. Publish key event information, capture contact details and track visitor interactions via a dedicated portal to ensure a high ROI on your next event.",
  },
  {
    img: img5,
    title: "Easy to use CMS",
    text: "Webflow’s intuitive browser-based interface makes it easy for even non-technical users to quickly edit existing pages, publish blog posts, case studies or articles, or upload media. It’s an ideal choice to build engaging and user-friendly internal websites for staff development, employee onboarding, product training and more.",
  },
];

function WebflowSection5() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = previous

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const visibleSlides = [
    slides[index],
    slides[(index + 1) % slides.length],
  ];

  return (
    <section className="bg-[#0f0f0f] text-white lg:py-20 overflow-hidden h-250">
         <div className="flex lg:flex-row flex-col lg:items-center px-5 justify-center gap-10">
            <h1 className="text-gray-300 lg:w-130 w-80   mt-7 lg:text-6xl text-4xl font-medium  ">What can you use {" "}
<span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">Webflow for?</span></h1>
<p className="text-gray-200 flex justify-center  mt-10 w-90 md:w-170 lg:w-120">There’s almost no limit to what you can achieve with a platform like Webflow and a team like Phunk. But if you’re new to the idea, here’s a quick overview of some of the more common use cases where our Webflow-based sites really shine.</p>
        </div>
      <div className="relative  mx-auto rounded-2xl pt-20">
        {/* ---------- IMAGE ---------- */}
        <div className="relative lg:h-[400px] h-[250px] overflow-hidden rounded-2xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={index}
              src={slides[index].img}
              alt={slides[index].title}
              custom={direction}
              initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full h-full object-cover rounded-2xl"
            />
          </AnimatePresence>

          {/* Arrows */}
          
        </div>

        {/* ---------- TEXT (2 sliding cards) ---------- */}
       {/* ---------- TEXT (responsive sliding cards) ---------- */}
<div className="mt-12 flex justify-center lg:gap-10">
  <AnimatePresence initial={false} custom={direction}>
    <motion.div
      key={index}
      className="flex gap-10 lg:gap-60"
      custom={direction}
      initial={{ x: direction === 1 ? 200 : -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction === 1 ? -200 : 200, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {visibleSlides.map((slide, i) => (
        <motion.div
          key={i}
          className={i === 1 ? "hidden lg:block" : "block"} // ✅ responsive: hide second card on small screens
        >
          <h3 className="text-3xl font-semibold mb-3 px-20 lg:px-0 text-white">{slide.title}</h3>
          <p className="text-sm text-white w-140 mt-6 px-20 lg:px-0 font-semibold">{slide.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </AnimatePresence>
</div>

      </div>

       <div className="px-15 mt-6"><button
            onClick={prevSlide}
            className=" bg-black/50 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className=" bg-black/50 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm"
          >
            <FaArrowRight size={20} />
          </button></div>
    </section>
  );
}

export default WebflowSection5;
