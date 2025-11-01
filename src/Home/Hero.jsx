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
    // Only apply the fade/hide effect on desktop screens
    if (window.innerWidth >= 1024) { // 1024px = Tailwind "lg"
      if (window.scrollY > lastScrollY) {
        setShowDesktopNav(false); // scrolling down → hide
      } else {
        setShowDesktopNav(true); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    } else {
      // Always show header on mobile
      setShowDesktopNav(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  return (
    <section className="bg-black lg:h-screen h-[680px] md:h-160 relative overflow-hidden">
      <div className="absolute bottom-10 lg:bottom-15 rounded-xl left-1/2 -translate-x-1/2 border-t-transparent border-t-none border-b-white w-[90%] max-w-[2100px] lg:h-[260px] h-90 bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent opacity-90 blur-8xl "></div>
       <main className="lg:pt-35 pt-40 relative"></main>
      {/* ======== Header (Responsive) ======== */}
  <header className="bg-black lg:fixed fixed text-white  top-0 left-0 w-full z-50 bg-transparent bg-gradient-to-t from-transparent via-[#000000ff] #000000ff to-black">
    <div className="flex items-center justify-between lg:px-6 px-3 md:px-20 lg:py-6 py-4"> 
      {/* Logo */}
      <div   className={`flex items-center lg:gap-2 transition-all duration-500 ${
      showDesktopNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
    }`}>
      <svg width="80" height="41" viewBox="0 0 121 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_210_1796)">
<path d="M50.1772 32.6499V14.4308H53.645V16.1109C54.1232 15.4873 54.739 14.9829 55.4443 14.6372C56.1497 14.2914 56.9253 14.1136 57.7107 14.1177C61.0957 14.1177 63.5517 16.631 63.5517 21.0224C63.5517 25.4138 61.0957 27.9593 57.7107 27.9593C56.9226 27.9627 56.1446 27.7818 55.4387 27.431C54.7328 27.0801 54.1186 26.5691 53.645 25.9386V32.6591L50.1772 32.6499ZM56.6161 17.188C56.0397 17.2026 55.4737 17.3451 54.959 17.6055C54.4444 17.8658 53.994 18.2373 53.6404 18.6932V23.3608C53.9989 23.8118 54.4511 24.1793 54.9658 24.4376C55.4805 24.696 56.0452 24.839 56.6207 24.8568C58.6122 24.8568 59.9505 23.301 59.9505 21.004C59.9505 18.7071 58.6122 17.188 56.6207 17.188H56.6161Z" fill="white"></path>
<path d="M73.7022 19.5956C73.7022 17.7544 72.7502 17.1882 71.2462 17.1882C70.6606 17.2021 70.0859 17.35 69.5662 17.6205C69.0464 17.891 68.5954 18.2769 68.2476 18.7486V27.6188H64.7798V9.4043H68.2476V16.1525C68.828 15.4979 69.5426 14.9761 70.3425 14.6227C71.1425 14.2692 72.0092 14.0923 72.8835 14.1041C75.7764 14.1041 77.17 15.6876 77.17 18.2469V27.6188H73.7022V19.5956Z" fill="white"></path>
<path d="M88.139 25.9569C87.5499 26.5982 86.8319 27.1075 86.032 27.451C85.2322 27.7945 84.3687 27.9646 83.4984 27.95C80.6055 27.95 79.2441 26.3666 79.2441 23.8072V14.4307H82.7073V22.4355C82.7073 24.2767 83.664 24.8659 85.1403 24.8659C85.721 24.8568 86.2922 24.7167 86.8114 24.4561C87.3306 24.1955 87.7843 23.8211 88.139 23.3607V14.4307H91.6067V27.6186H88.139V25.9569Z" fill="white"></path>
<path d="M102.562 19.6461C102.562 17.8049 101.61 17.188 100.133 17.188C99.5459 17.1953 98.9682 17.3403 98.4466 17.6112C97.9251 17.8822 97.4742 18.2717 97.1302 18.7485V27.6187H93.667V14.4308H97.1302V16.1523C97.7041 15.4994 98.4122 14.9783 99.206 14.6248C99.9998 14.2712 100.861 14.0936 101.729 14.1039C104.622 14.1039 106.016 15.7427 106.016 18.3112V27.6187H102.562V19.6461Z" fill="white"></path>
<path d="M113.163 22.5554L111.581 24.2494V27.6188H108.118V9.4043H111.581V20.3045L116.576 14.4309H120.834L115.619 20.415L121 27.6188H116.658L113.163 22.5554Z" fill="white"></path>
<path d="M20.172 20.1893H9.78247C9.78004 17.5933 8.7486 15.1044 6.91456 13.2688C5.08052 11.4332 2.59372 10.4009 0 10.3984L0 0C5.34771 0.00730689 10.4743 2.13673 14.2557 5.92138C18.0371 9.70602 20.1647 14.837 20.172 20.1893Z" fill="#00E5D1"></path>
<path d="M20.172 41.0001H9.78247C9.78004 38.4041 8.7486 35.9152 6.91456 34.0796C5.08052 32.244 2.59372 31.2117 0 31.2092L0 20.8108C5.34771 20.8181 10.4743 22.9475 14.2557 26.7322C18.0371 30.5168 20.1647 35.6478 20.172 41.0001Z" fill="#00E5D1"></path>
<path d="M40.965 41.0001C35.6169 40.994 30.4896 38.865 26.7079 35.08C22.9263 31.2951 20.7991 26.1635 20.793 20.8108H31.1825C31.185 23.4067 32.2164 25.8957 34.0504 27.7313C35.8845 29.5669 38.3713 30.5992 40.965 30.6016V41.0001Z" fill="#00E5D1"></path>
<path d="M40.965 20.1893C35.6173 20.182 30.4907 18.0526 26.7093 14.2679C22.9279 10.4833 20.8003 5.35229 20.793 0L31.1825 0C31.185 2.59594 32.2164 5.08487 34.0504 6.92048C35.8845 8.75609 38.3713 9.7884 40.965 9.79084V20.1893Z" fill="#00E5D1"></path>
</g>
<defs>
<clipPath id="clip0_210_1796">
<rect width="121" height="41" fill="white"></rect>
</clipPath>
</defs>
</svg>
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
        <span className="inline-block  text-sm items-center py-[5px] bg-black flex justify-center rounded-full border border-gray-700 w-20 h-8 ">
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
     

      {/* Stars & Logo Circle */}
      <div className="absolute lg:bottom-28 bottom-60 md:bottom-40 w-60 md:w-150 lg:w-200 left-1/2 -translate-x-1/2 z-30">
        <img src={star} alt="" className="w-200" />
      </div>
      <div className="absolute lg:bottom-15 bottom-10 w-180 left-1/2 -translate-x-1/2 z-20">
        <img src={herocir} alt="" />
      </div>
      <div className="absolute bottom-0 lg:bottom-5 md:bottom-2  left-1/2 -translate-x-1/2 z-30">
        <img src={phunk2} alt="" className="w-[70px] md:w-[70px]" />
      </div>

      {/* Side decorations */}
      <div className="absolute bottom-10 lg:bottom-15  lg:left-19 md:left-5 left-5 opacity-70 z-30">
        <img src={stuff1} alt="" className="lg:w-100 w-50 md:w-80 rounded-b-xl" />
      </div>
      <div className="absolute bottom-10 lg:bottom-15 lg:right-19 md:right-5 right-5 opacity-70 z-30">
        <img src={stuff2} alt="" className="lg:w-100 w-50 md:w-80 rounded-b-xl" />
      </div>
      <div className="md:fixed lg:fixed lg:block hidden bottom-1/2 left-0 z-30">
        <img src={partner} alt="" className="w-8 rounded-b-xl" />
      </div>

      {/* ======== Main Hero Text ======== */}
      <main className="lg:pt-20  relative z-10 text-center w-full z-40">
    <div className="p-[2px] rounded-full  bg-gradient-to-r from-[#00d1ff] to-[#004cff] w-52 h-8 mx-auto">
  <p className="rounded-xl bg-black text-white text-sm flex justify-center px-2 py-1">
    Introducing Phunk Creative
  </p>
</div>

    

        <h1 className="text-gray-300 mt-7 lg:text-8xl w-70 lg:w-250 text-5xl font-semibold text-center mx-auto">
          Your brand, built{" "}
          <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
            better
          </span>
        </h1>

        <p className="text-gray-200 mt-7 w-90 md:w-170 lg:leading-normal px-10 lg:w-150 text-center font-semibold text-sm  mx-auto ">
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
