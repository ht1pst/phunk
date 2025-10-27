import { useState, useEffect, useRef } from "react";
import phunk from "../assets/phunk.png";
import partner from "../assets/partner.png";
import phunk2 from "../assets/phunk2.svg";
import star from "../assets/herostar.svg";
import herocir from "../assets/herocircle.svg";
import stuff1 from "../assets/stuff1.svg";
import stuff2 from "../assets/stuff2.svg";
import home from "../assets/home.png";
import img2 from "../assets/info.png";
import img3 from "../assets/profile.png";
import img4 from "../assets/text-lines.png";
import img5 from "../assets/blueprint.png";
import img6 from "../assets/operator.png";
import service2 from "../assets/services2.webp";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
import { Link } from "react-router-dom";
function Hero() {
   const [isOpen, setIsOpen] = useState(false);
     const [menuOpen, setMenuOpen] = useState(false);
       const [servicesOpen, setServicesOpen] = useState(false); // ✅ ADD THIS
     const [showDesktopNav, setShowDesktopNav] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down → hide
      setShowDesktopNav(false);
    } else {
      // scrolling up → show
      setShowDesktopNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  return (
    <section className="bg-black lg:h-screen h-[750px] md:h-160 relative overflow-hidden">
      {/* ======== Header (Responsive) ======== */}
  <header className="bg-black lg:fixed fixed text-white  top-0 left-0 w-full z-50 bg-transparent">
    <div className="flex items-center justify-between px-6 md:px-20 py-6">
      {/* Logo */}
      <div   className={`flex items-center gap-2 transition-all duration-500 ${
      showDesktopNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
    }`}>
        <img src={phunk} alt="phunk logo" className="w-10" />
        <h1 className="font-semibold text-2xl">phunk</h1>
      </div>
  
      {/* Desktop Nav */}
      <nav   className="hidden lg:flex gap-6 bg-black justify-center border-1 border-gray-600 rounded-full px-6 py-2 group transition-all duration-500">
        <Link
          to="/"
          className="text-md transition-colors duration-500 ease-in-out group-hover:text-gray-500 hover:text-white"
        >
          Home
        </Link>
  
        <Link
          to="/about"
          className="text-md transition-colors duration-500 ease-in-out group-hover:text-gray-500 hover:text-white"
        >
          About Us
        </Link>
  
        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="text-md transition-colors duration-500 ease-in-out group-hover:text-gray-500 hover:text-white flex items-center gap-1"
          >
            Services
          </button>
          {servicesOpen && (
            <div className="fixed left-1/2 -translate-x-1/2 mt-10 w-220 h-50 bg-white border border-gray-700 rounded-lg shadow-lg z-50">
              <div className="flex text-black justify-between px-8 mt-8">
                <h1>Services</h1>
                <Link
                  to="/services"
                  className="underline text-gray-500 text-sm hover:text-black transition-all duration-500"
                >
                  All services
                </Link>
              </div>
              <div className="flex justify-center gap-13 text-black mt-8">
                <div className="flex gap-5 items-center transition-all duration-300 ease-in-out group hover:bg-gray-200 rounded-lg p-2 w-60">
                  <div className="bg-gray-200 w-15 h-15 flex items-center justify-center rounded-lg transition group-hover:bg-white">
                    <img src={service2} alt="" className="h-5" />
                  </div>
                  <a href="#" className="font-semibold text-sm">Web Design</a>
                </div>
  
                <div className="flex gap-5 items-center transition-all duration-300 ease-in-out group hover:bg-gray-200 rounded-lg p-2 w-60">
                  <div className="bg-gray-200 w-15 h-15 flex items-center justify-center rounded-lg transition group-hover:bg-white">
                    <img src={service2} alt="" className="h-5" />
                  </div>
                  <a href="#" className="font-semibold text-sm">Web Design</a>
                </div>
  
                <div className="flex gap-5 items-center transition-all duration-300 ease-in-out group hover:bg-gray-200 rounded-lg p-2 w-60">
                  <div className="bg-gray-200 w-15 h-15 flex items-center justify-center rounded-lg transition group-hover:bg-white">
                    <img src={service2} alt="" className="h-5" />
                  </div>
                  <a href="#" className="font-semibold text-sm">Web Design</a>
                </div>
              </div>
  
              <div className="group">
                <div className="bg-gray-200 transition-all duration-500 ease-in-out hover:bg-gradient-to-r from-[#2d8fc8ff] to-[#2ad5d5ff] h-20 flex items-center mt-8 rounded-b-lg">
                  <a
                    href="#"
                    className="text-black transition-all duration-500 ease-in-out group-hover:text-white px-8"
                  >
                    Ready to start a project?
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
  
        <Link
          to="/projects"
          className="text-md transition-colors duration-500 ease-in-out group-hover:text-gray-500 hover:text-white"
        >
          Projects
        </Link>
  
        <Link
          to="/news"
          className="text-md transition-colors duration-500 ease-in-out group-hover:text-gray-500 hover:text-white"
        >
          News
        </Link>
  
        <Link
          to="/webflow"
          className="text-md transition-colors duration-500 ease-in-out group-hover:text-gray-500 hover:text-white"
        >
          Webflow
        </Link>
      </nav>
  
      {/* Talk Button */}
      <div  className={`hidden md:hidden lg:block transition-all duration-500 ${
      showDesktopNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
    }`}>
        <Link
          to="/talk"
          className="w-32 h-12 rounded-full font-semibold 
            bg-gradient-to-r from-[#00d1ff] to-[#004cff] 
            shadow-[0_0_20px_rgba(0,209,255,0.5)] 
            hover:shadow-[0_0_30px_rgba(0,209,255,0.8)] 
            hover:scale-105 transition-all duration-300
            flex items-center justify-center text-white"
        >
          Talk to us
        </Link>
      </div>
  
      {/* Hamburger Menu (Mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block lg:hidden focus:outline-none"
      >
        <span className="inline-block  text-sm items-center bg-black flex justify-center rounded-full border border-gray-700 w-20 h-6 ">
          {menuOpen ? "Close" : "Menu"}
        </span>
      </button>
    </div>
  
    {/* Mobile Menu */}
    {menuOpen !== null && (
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3">
          <nav className="flex px-4 rounded-lg flex-col items-center gap-4 py-4 border-t border-gray-800 bg-white lg:hidden">
            {/* Home */}
            <Link to="/" className="flex items-center justify-center gap-10 text-black">
              <div className="bg-gray-200 w-22 rounded-xl h-15">
                <img src={home} alt="" className="w-8 mx-auto py-4 flex items-center justify-center" />
              </div>
              <div>
                <span className="font-semibold">Home</span>
                <p className="text-gray-500 text-sm">
                  We transform your brand vision into tangible experiences
                </p>
              </div>
            </Link>
  
            {/* About */}
            <Link to="/about" className="flex items-center gap-10 text-black">
              <div className="bg-gray-200 w-20 rounded-xl h-15">
                <img src={img2} alt="" className="w-8 mx-auto py-4 flex items-center justify-center" />
              </div>
              <div>
                <span className="font-semibold">About Us</span>
                <p className="text-gray-500 text-sm">
                  Find out more about what makes us tick and work
                </p>
              </div>
            </Link>
  
            {/* Services */}
            <Link to="/services" className="flex items-center justify-center gap-10 text-black">
              <div className="bg-gray-200 w-20 rounded-xl h-15">
                <img src={img5} alt="" className="w-8 mx-auto py-4 flex items-center justify-center" />
              </div>
              <div>
                <span className="font-semibold">Services</span>
                <p className="text-gray-500 text-sm">
                  Focusing on what we're good at means we can deliver
                </p>
              </div>
            </Link>
  
            {/* Projects */}
            <Link to="/projects" className="flex items-center gap-10 text-black">
              <div className="bg-gray-200 w-25 rounded-xl h-15">
                <img src={img6} alt="" className="w-8 mx-auto py-4 flex items-center justify-center" />
              </div>
              <div>
                <span className="font-semibold">Projects</span>
                <p className="text-gray-500 text-sm">
                  Check out our latest news stories, case studies, resources and more
                </p>
              </div>
            </Link>
  
            {/* News */}
            <Link to="/news" className="flex items-center justify-center gap-10 text-black">
              <div className="bg-gray-200 w-25 rounded-xl h-15">
                <img src={img5} alt="" className="w-8 mx-auto py-4 flex items-center justify-center" />
              </div>
              <div>
                <span className="font-semibold">News</span>
                <p className="text-gray-500 text-sm">
                  Check out our latest news stories, case studies, resources and more
                </p>
              </div>
            </Link>
  
            {/* Webflow */}
            <Link to="/webflow" className="flex items-center justify-center gap-10 text-black">
              <div className="bg-gray-200 w-23 rounded-xl h-15">
                <img src={img6} alt="" className="w-8 mx-auto py-4 flex items-center justify-center" />
              </div>
              <div>
                <span className="font-semibold">Webflow</span>
                <p className="text-gray-500 text-sm">
                  The foundation on which we build our world-beating websites
                </p>
              </div>
            </Link>
  
            {/* Contact */}
            <Link to="/talk" className="flex items-center justify-center gap-10 text-black">
              <div className="bg-gray-200 w-20 rounded-xl h-15">
                <img src={img6} alt="" className="w-8 mx-auto py-4 flex items-center justify-center" />
              </div>
              <div>
                <span className="font-semibold">Contact Us</span>
                <p className="text-gray-500 text-sm">
                  Get in touch and let's transform your ideas into reality
                </p>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    )}
  </header>

      {/* ======== Hero Background Effects ======== */}
      <div className="absolute top-60 left-1/2 hidden md:hidden lg:block -translate-x-1/2 w-80 h-80 bg-[#00bfff] rounded-full blur-[120px] opacity-70"></div>
      <div className="absolute bottom-10 lg:bottom-15 rounded-xl left-1/2 -translate-x-1/2  border-b-white w-[95%] max-w-[2100px] lg:h-[260px] h-90 bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent opacity-90 blur-8xl rounded-t-[40px]"></div>

      {/* Stars & Logo Circle */}
      <div className="absolute lg:bottom-28 bottom-60 md:bottom-40 w-50 md:w-150 lg:w-200 left-1/2 -translate-x-1/2 z-30">
        <img src={star} alt="" className="w-200" />
      </div>
      <div className="absolute lg:bottom-15 bottom-10 w-180 left-1/2 -translate-x-1/2 z-20">
        <img src={herocir} alt="" />
      </div>
      <div className="absolute bottom-0 lg:bottom-5 md:bottom-2  left-1/2 -translate-x-1/2 z-30">
        <img src={phunk2} alt="" className="w-[80px] md:w-[70px]" />
      </div>

      {/* Side decorations */}
      <div className="absolute bottom-10 lg:bottom-15 lg:left-10 md:left-5 left-3 opacity-70 z-30">
        <img src={stuff1} alt="" className="lg:w-100 w-50 md:w-80 rounded-b-xl" />
      </div>
      <div className="absolute bottom-10 lg:bottom-15 lg:right-10 md:right-5 right-3 opacity-70 z-30">
        <img src={stuff2} alt="" className="lg:w-100 w-50 md:w-80 rounded-b-xl" />
      </div>
      <div className="md:fixed lg:fixed lg:block hidden bottom-1/2 left-0 z-30">
        <img src={partner} alt="" className="w-8 rounded-b-xl" />
      </div>

      {/* ======== Main Hero Text ======== */}
      <main className="lg:pt-50 pt-35 relative z-10 text-center w-full z-40">
        <p className="border-1 border-blue-500 text-white w-50 text-sm flex mx-auto justify-center rounded-xl">
          Introducing Phunk Creative
        </p>
    

        <h1 className="text-gray-300 mt-7 lg:text-8xl w-70 lg:w-250 text-5xl font-medium text-center mx-auto">
          Your brand, built{" "}
          <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
            better
          </span>
        </h1>

        <p className="text-gray-200 mt-7 w-85 md:w-170 lg:leading-normal px-10 lg:w-150 text-center text-sm  mx-auto ">
          We transform your brand vision into tangible web, graphic and video
          experiences that stop prospective clients in their tracks.
        </p>

     <MotionLink
  to="/talk"
  className="mt-8 w-40 h-10 mx-auto flex items-center justify-center
  rounded-full text-white font-semibold 
  bg-gradient-to-r from-[#00d1ff] to-[#004cff] 
  shadow-[0_0_20px_rgba(0,209,255,0.5)] 
  hover:shadow-[0_0_30px_rgba(0,209,255,0.8)] 
  hover:scale-105 transition-all duration-300 relative z-[999]"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
>
  Launch a project
</MotionLink>
      </main>
    </section>
  );
}

export default Hero;
