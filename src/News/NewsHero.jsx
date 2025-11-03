import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
import img7 from "../assets/customer-service.png";
import abouthero from "../assets/Abouthero.svg";
import service2 from "../assets/services2.webp";
function NewsHero(){
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

      return(
        
       <section className="lg:h-200 h-150 bg-black">
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
                  
<main className="lg:pt-40 pt-35 relative">

<div>
    <svg class="image_contain" className="absolute w-80 top-60 lg:left-30 left-0 opacity-40 lg:opacity-100" viewBox="0 0 394 394" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3" clip-path="url(#clip0_729_950)">
<path d="M394 39.3509L394 394L-3.05176e-05 394L-2.58192e-05 2.58192e-05L394 3.05176e-05L394 39.3509ZM393.508 78.7017L393.508 39.8427L354.649 39.8427L354.649 78.7017L393.508 78.7017ZM315.298 39.8427L315.298 78.7017L354.157 78.7017L354.157 39.8427L315.298 39.8427ZM275.948 39.8427L275.948 78.7017L314.806 78.7017L314.806 39.8427L275.948 39.8427ZM236.597 39.8427L236.597 78.7017L275.456 78.7017L275.456 39.8427L236.597 39.8427ZM197.246 39.8427L197.246 78.7017L236.105 78.7017L236.105 39.8427L197.246 39.8427ZM157.895 39.8427L157.895 78.7017L196.754 78.7017L196.754 39.8427L157.895 39.8427ZM118.544 39.8427L118.544 78.7017L157.403 78.7017L157.403 39.8427L118.544 39.8427ZM79.1935 39.8427L79.1935 78.7017L118.052 78.7017L118.052 39.8427L79.1935 39.8427ZM39.8427 39.8427L39.8427 78.7017L78.7016 78.7017L78.7016 39.8427L39.8427 39.8427ZM78.7016 354.157L78.7016 315.298L39.8427 315.298L39.8427 354.157L78.7016 354.157ZM118.052 354.157L118.052 315.298L79.1935 315.298L79.1935 354.157L118.052 354.157ZM157.403 354.157L157.403 315.298L118.544 315.298L118.544 354.157L157.403 354.157ZM196.754 354.157L196.754 315.298L157.895 315.298L157.895 354.157L196.754 354.157ZM236.105 354.157L236.105 315.298L197.246 315.298L197.246 354.157L236.105 354.157ZM275.456 354.157L275.456 315.298L236.597 315.298L236.597 354.157L275.456 354.157ZM314.806 354.157L314.806 315.298L275.948 315.298L275.948 354.157L314.806 354.157ZM354.157 354.157L354.157 315.298L315.298 315.298L315.298 354.157L354.157 354.157ZM315.298 79.1935L315.298 118.052L354.157 118.052L354.157 79.1935L315.298 79.1935ZM275.948 79.1935L275.948 118.052L314.806 118.052L314.806 79.1935L275.948 79.1935ZM236.597 79.1935L236.597 118.052L275.456 118.052L275.456 79.1935L236.597 79.1935ZM197.246 79.1935L197.246 118.052L236.105 118.052L236.105 79.1935L197.246 79.1935ZM157.895 79.1935L157.895 118.052L196.754 118.052L196.754 79.1935L157.895 79.1935ZM118.544 79.1935L118.544 118.052L157.403 118.052L157.403 79.1935L118.544 79.1935ZM79.1935 79.1935L79.1935 118.052L118.052 118.052L118.052 79.1935L79.1935 79.1935ZM118.052 314.807L118.052 275.948L79.1935 275.948L79.1935 314.806L118.052 314.807ZM157.403 314.807L157.403 275.948L118.544 275.948L118.544 314.807L157.403 314.807ZM196.754 314.807L196.754 275.948L157.895 275.948L157.895 314.807L196.754 314.807ZM236.105 314.807L236.105 275.948L197.246 275.948L197.246 314.807L236.105 314.807ZM275.456 314.807L275.456 275.948L236.597 275.948L236.597 314.807L275.456 314.807ZM314.806 314.807L314.806 275.948L275.948 275.948L275.948 314.807L314.806 314.807ZM275.948 118.544L275.948 157.403L314.806 157.403L314.806 118.544L275.948 118.544ZM236.597 118.544L236.597 157.403L275.456 157.403L275.456 118.544L236.597 118.544ZM197.246 118.544L197.246 157.403L236.105 157.403L236.105 118.544L197.246 118.544ZM157.895 118.544L157.895 157.403L196.754 157.403L196.754 118.544L157.895 118.544ZM118.544 118.544L118.544 157.403L157.403 157.403L157.403 118.544L118.544 118.544ZM157.403 275.456L157.403 236.597L118.544 236.597L118.544 275.456L157.403 275.456ZM196.754 275.456L196.754 236.597L157.895 236.597L157.895 275.456L196.754 275.456ZM236.105 275.456L236.105 236.597L197.246 236.597L197.246 275.456L236.105 275.456ZM275.456 275.456L275.456 236.597L236.597 236.597L236.597 275.456L275.456 275.456ZM236.597 157.895L236.597 196.754L275.456 196.754L275.456 157.895L236.597 157.895ZM197.246 157.895L197.246 196.754L236.105 196.754L236.105 157.895L197.246 157.895ZM157.895 157.895L157.895 196.754L196.754 196.754L196.754 157.895L157.895 157.895ZM196.754 236.105L196.754 197.246L157.895 197.246L157.895 236.105L196.754 236.105ZM236.105 236.105L236.105 197.246L197.246 197.246L197.246 236.105L236.105 236.105ZM236.597 197.246L236.597 236.105L275.456 236.105L275.456 197.246L236.597 197.246ZM157.403 236.105L157.403 197.246L118.544 197.246L118.544 236.105L157.403 236.105ZM157.403 196.754L157.403 157.895L118.544 157.895L118.544 196.754L157.403 196.754ZM275.948 157.895L275.948 196.754L314.806 196.754L314.806 157.895L275.948 157.895ZM275.948 197.246L275.948 236.105L314.806 236.105L314.806 197.246L275.948 197.246ZM275.948 236.597L275.948 275.456L314.806 275.456L314.806 236.597L275.948 236.597ZM118.052 275.456L118.052 236.597L79.1935 236.597L79.1935 275.456L118.052 275.456ZM118.052 236.105L118.052 197.246L79.1935 197.246L79.1935 236.105L118.052 236.105ZM118.052 196.754L118.052 157.895L79.1935 157.895L79.1935 196.754L118.052 196.754ZM118.052 157.403L118.052 118.544L79.1935 118.544L79.1935 157.403L118.052 157.403ZM315.298 118.544L315.298 157.403L354.157 157.403L354.157 118.544L315.298 118.544ZM315.298 157.895L315.298 196.754L354.157 196.754L354.157 157.895L315.298 157.895ZM315.298 197.246L315.298 236.105L354.157 236.105L354.157 197.246L315.298 197.246ZM315.298 236.597L315.298 275.456L354.157 275.456L354.157 236.597L315.298 236.597ZM315.298 275.948L315.298 314.807L354.157 314.807L354.157 275.948L315.298 275.948ZM78.7016 314.806L78.7016 275.948L39.8427 275.948L39.8427 314.806L78.7016 314.806ZM78.7016 275.456L78.7016 236.597L39.8427 236.597L39.8427 275.456L78.7016 275.456ZM78.7016 236.105L78.7016 197.246L39.8427 197.246L39.8427 236.105L78.7016 236.105ZM78.7016 196.754L78.7016 157.895L39.8427 157.895L39.8427 196.754L78.7016 196.754ZM78.7016 157.403L78.7016 118.544L39.8427 118.544L39.8427 157.403L78.7016 157.403ZM78.7016 118.052L78.7016 79.1935L39.8427 79.1935L39.8427 118.052L78.7016 118.052ZM393.508 118.052L393.508 79.1935L354.649 79.1935L354.649 118.052L393.508 118.052ZM393.508 157.403L393.508 118.544L354.649 118.544L354.649 157.403L393.508 157.403ZM393.508 196.754L393.508 157.895L354.649 157.895L354.649 196.754L393.508 196.754ZM393.508 236.105L393.508 197.246L354.649 197.246L354.649 236.105L393.508 236.105ZM393.508 275.456L393.508 236.597L354.649 236.597L354.649 275.456L393.508 275.456ZM393.508 314.807L393.508 275.948L354.649 275.948L354.649 314.807L393.508 314.807ZM393.508 354.157L393.508 315.298L354.649 315.298L354.649 354.157L393.508 354.157ZM393.508 393.508L393.508 354.649L354.649 354.649L354.649 393.508L393.508 393.508ZM354.157 393.508L354.157 354.649L315.298 354.649L315.298 393.508L354.157 393.508ZM314.806 393.508L314.806 354.649L275.948 354.649L275.948 393.508L314.806 393.508ZM275.456 393.508L275.456 354.649L236.597 354.649L236.597 393.508L275.456 393.508ZM236.105 393.508L236.105 354.649L197.246 354.649L197.246 393.508L236.105 393.508ZM196.754 393.508L196.754 354.649L157.895 354.649L157.895 393.508L196.754 393.508ZM157.403 393.508L157.403 354.649L118.544 354.649L118.544 393.508L157.403 393.508ZM118.052 393.508L118.052 354.649L79.1935 354.649L79.1935 393.508L118.052 393.508ZM78.7016 393.508L78.7016 354.649L39.8427 354.649L39.8427 393.508L78.7016 393.508ZM0.491852 354.649L0.491852 393.508L39.3508 393.508L39.3508 354.649L0.491852 354.649ZM0.491853 315.298L0.491852 354.157L39.3508 354.157L39.3508 315.298L0.491853 315.298ZM0.491853 275.948L0.491853 314.806L39.3508 314.806L39.3508 275.948L0.491853 275.948ZM0.491854 236.597L0.491853 275.456L39.3508 275.456L39.3508 236.597L0.491854 236.597ZM0.491854 197.246L0.491854 236.105L39.3508 236.105L39.3508 197.246L0.491854 197.246ZM0.491855 157.895L0.491854 196.754L39.3508 196.754L39.3508 157.895L0.491855 157.895ZM0.491855 118.544L0.491855 157.403L39.3508 157.403L39.3508 118.544L0.491855 118.544ZM0.491856 79.1935L0.491855 118.052L39.3508 118.052L39.3508 79.1935L0.491856 79.1935ZM0.491856 39.8427L0.491856 78.7017L39.3508 78.7017L39.3508 39.8427L0.491856 39.8427ZM0.491856 0.491908L0.491856 39.3509L39.3508 39.3509L39.3508 0.491909L0.491856 0.491908ZM39.8427 0.491909L39.8427 39.3509L78.7016 39.3509L78.7016 0.491909L39.8427 0.491909ZM79.1935 0.491909L79.1935 39.3509L118.052 39.3509L118.052 0.49191L79.1935 0.491909ZM118.544 0.49191L118.544 39.3509L157.403 39.3509L157.403 0.49191L118.544 0.49191ZM157.895 0.49191L157.895 39.3509L196.754 39.3509L196.754 0.49191L157.895 0.49191ZM197.246 0.49191L197.246 39.3509L236.105 39.3509L236.105 0.491911L197.246 0.49191ZM236.597 0.491911L236.597 39.3509L275.456 39.3509L275.456 0.491911L236.597 0.491911ZM275.948 0.491911L275.948 39.3509L314.806 39.3509L314.806 0.491912L275.948 0.491911ZM315.298 0.491912L315.298 39.3509L354.157 39.3509L354.157 0.491912L315.298 0.491912ZM354.649 39.3509L393.508 39.3509L393.508 0.491913L354.649 0.491912L354.649 39.3509Z" fill="url(#paint0_angular_729_950)"></path>
</g>
<rect width="40" height="40" transform="matrix(-1 0 0 1 118 315)" fill="white" fill-opacity="0.15"></rect>
<rect x="-0.25" y="0.25" width="39.5" height="39.5" transform="matrix(-1 0 0 1 117.5 315)" stroke="white" stroke-opacity="0.3" stroke-width="0.5"></rect>
<rect width="40" height="40" transform="matrix(-1 0 0 1 79 197)" fill="white" fill-opacity="0.07"></rect>
<rect x="-0.25" y="0.25" width="39.5" height="39.5" transform="matrix(-1 0 0 1 78.5 197)" stroke="white" stroke-opacity="0.2" stroke-width="0.5"></rect>
<defs>
<radialGradient id="paint0_angular_729_950" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(197 197) rotate(-180) scale(197 197)">
<stop offset="0.126411" stop-color="white"></stop>
<stop offset="0.425515" stop-color="white" stop-opacity="0"></stop>
<stop offset="0.881187" stop-color="white" stop-opacity="0.290799"></stop>
</radialGradient>
<clipPath id="clip0_729_950">
<rect width="394" height="394" fill="white" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 394 394)"></rect>
</clipPath>
</defs>
</svg>
</div>


<div>
    <svg class="image_contain" className="absolute w-80 top-60 lg:right-30 right-0 opacity-40 lg:opacity-100" viewBox="0 0 394 394" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3" clip-path="url(#clip0_444_10501)">
<path d="M-4.22915e-06 39.3509L0 394L394 394L394 2.58192e-05L-4.6984e-06 3.05176e-05L-4.22915e-06 39.3509ZM0.491881 78.7017L0.491881 39.8427L39.3508 39.8427L39.3508 78.7017L0.491881 78.7017ZM78.7016 39.8427L78.7016 78.7017L39.8427 78.7017L39.8427 39.8427L78.7016 39.8427ZM118.052 39.8427L118.052 78.7017L79.1935 78.7017L79.1935 39.8427L118.052 39.8427ZM157.403 39.8427L157.403 78.7017L118.544 78.7017L118.544 39.8427L157.403 39.8427ZM196.754 39.8427L196.754 78.7017L157.895 78.7017L157.895 39.8427L196.754 39.8427ZM236.105 39.8427L236.105 78.7017L197.246 78.7017L197.246 39.8427L236.105 39.8427ZM275.456 39.8427L275.456 78.7017L236.597 78.7017L236.597 39.8427L275.456 39.8427ZM314.807 39.8427L314.807 78.7017L275.948 78.7017L275.948 39.8427L314.807 39.8427ZM354.157 39.8427L354.157 78.7017L315.298 78.7017L315.298 39.8427L354.157 39.8427ZM315.298 354.157L315.298 315.298L354.157 315.298L354.157 354.157L315.298 354.157ZM275.948 354.157L275.948 315.298L314.807 315.298L314.807 354.157L275.948 354.157ZM236.597 354.157L236.597 315.298L275.456 315.298L275.456 354.157L236.597 354.157ZM197.246 354.157L197.246 315.298L236.105 315.298L236.105 354.157L197.246 354.157ZM157.895 354.157L157.895 315.298L196.754 315.298L196.754 354.157L157.895 354.157ZM118.544 354.157L118.544 315.298L157.403 315.298L157.403 354.157L118.544 354.157ZM79.1935 354.157L79.1935 315.298L118.052 315.298L118.052 354.157L79.1935 354.157ZM39.8427 354.157L39.8427 315.298L78.7016 315.298L78.7016 354.157L39.8427 354.157ZM78.7016 79.1935L78.7016 118.052L39.8427 118.052L39.8427 79.1935L78.7016 79.1935ZM118.052 79.1935L118.052 118.052L79.1935 118.052L79.1935 79.1935L118.052 79.1935ZM157.403 79.1935L157.403 118.052L118.544 118.052L118.544 79.1935L157.403 79.1935ZM196.754 79.1935L196.754 118.052L157.895 118.052L157.895 79.1935L196.754 79.1935ZM236.105 79.1935L236.105 118.052L197.246 118.052L197.246 79.1935L236.105 79.1935ZM275.456 79.1935L275.456 118.052L236.597 118.052L236.597 79.1935L275.456 79.1935ZM314.807 79.1935L314.807 118.052L275.948 118.052L275.948 79.1935L314.807 79.1935ZM275.948 314.807L275.948 275.948L314.807 275.948L314.807 314.806L275.948 314.807ZM236.597 314.807L236.597 275.948L275.456 275.948L275.456 314.807L236.597 314.807ZM197.246 314.807L197.246 275.948L236.105 275.948L236.105 314.807L197.246 314.807ZM157.895 314.807L157.895 275.948L196.754 275.948L196.754 314.807L157.895 314.807ZM118.544 314.807L118.544 275.948L157.403 275.948L157.403 314.807L118.544 314.807ZM79.1935 314.807L79.1935 275.948L118.052 275.948L118.052 314.807L79.1935 314.807ZM118.052 118.544L118.052 157.403L79.1935 157.403L79.1935 118.544L118.052 118.544ZM157.403 118.544L157.403 157.403L118.544 157.403L118.544 118.544L157.403 118.544ZM196.754 118.544L196.754 157.403L157.895 157.403L157.895 118.544L196.754 118.544ZM236.105 118.544L236.105 157.403L197.246 157.403L197.246 118.544L236.105 118.544ZM275.456 118.544L275.456 157.403L236.597 157.403L236.597 118.544L275.456 118.544ZM236.597 275.456L236.597 236.597L275.456 236.597L275.456 275.456L236.597 275.456ZM197.246 275.456L197.246 236.597L236.105 236.597L236.105 275.456L197.246 275.456ZM157.895 275.456L157.895 236.597L196.754 236.597L196.754 275.456L157.895 275.456ZM118.544 275.456L118.544 236.597L157.403 236.597L157.403 275.456L118.544 275.456ZM157.403 157.895L157.403 196.754L118.544 196.754L118.544 157.895L157.403 157.895ZM196.754 157.895L196.754 196.754L157.895 196.754L157.895 157.895L196.754 157.895ZM236.105 157.895L236.105 196.754L197.246 196.754L197.246 157.895L236.105 157.895ZM197.246 236.105L197.246 197.246L236.105 197.246L236.105 236.105L197.246 236.105ZM157.895 236.105L157.895 197.246L196.754 197.246L196.754 236.105L157.895 236.105ZM157.403 197.246L157.403 236.105L118.544 236.105L118.544 197.246L157.403 197.246ZM236.597 236.105L236.597 197.246L275.456 197.246L275.456 236.105L236.597 236.105ZM236.597 196.754L236.597 157.895L275.456 157.895L275.456 196.754L236.597 196.754ZM118.052 157.895L118.052 196.754L79.1935 196.754L79.1935 157.895L118.052 157.895ZM118.052 197.246L118.052 236.105L79.1935 236.105L79.1935 197.246L118.052 197.246ZM118.052 236.597L118.052 275.456L79.1935 275.456L79.1935 236.597L118.052 236.597ZM275.948 275.456L275.948 236.597L314.807 236.597L314.807 275.456L275.948 275.456ZM275.948 236.105L275.948 197.246L314.807 197.246L314.807 236.105L275.948 236.105ZM275.948 196.754L275.948 157.895L314.807 157.895L314.807 196.754L275.948 196.754ZM275.948 157.403L275.948 118.544L314.807 118.544L314.807 157.403L275.948 157.403ZM78.7016 118.544L78.7016 157.403L39.8427 157.403L39.8427 118.544L78.7016 118.544ZM78.7016 157.895L78.7016 196.754L39.8427 196.754L39.8427 157.895L78.7016 157.895ZM78.7016 197.246L78.7016 236.105L39.8427 236.105L39.8427 197.246L78.7016 197.246ZM78.7016 236.597L78.7016 275.456L39.8427 275.456L39.8427 236.597L78.7016 236.597ZM78.7016 275.948L78.7016 314.807L39.8427 314.807L39.8427 275.948L78.7016 275.948ZM315.298 314.806L315.298 275.948L354.157 275.948L354.157 314.806L315.298 314.806ZM315.298 275.456L315.298 236.597L354.157 236.597L354.157 275.456L315.298 275.456ZM315.298 236.105L315.298 197.246L354.157 197.246L354.157 236.105L315.298 236.105ZM315.298 196.754L315.298 157.895L354.157 157.895L354.157 196.754L315.298 196.754ZM315.298 157.403L315.298 118.544L354.157 118.544L354.157 157.403L315.298 157.403ZM315.298 118.052L315.298 79.1935L354.157 79.1935L354.157 118.052L315.298 118.052ZM0.491882 118.052L0.491881 79.1935L39.3508 79.1935L39.3508 118.052L0.491882 118.052ZM0.491882 157.403L0.491882 118.544L39.3508 118.544L39.3508 157.403L0.491882 157.403ZM0.491883 196.754L0.491882 157.895L39.3508 157.895L39.3508 196.754L0.491883 196.754ZM0.491883 236.105L0.491883 197.246L39.3508 197.246L39.3508 236.105L0.491883 236.105ZM0.491884 275.456L0.491883 236.597L39.3508 236.597L39.3508 275.456L0.491884 275.456ZM0.491884 314.807L0.491884 275.948L39.3508 275.948L39.3508 314.807L0.491884 314.807ZM0.491885 354.157L0.491884 315.298L39.3508 315.298L39.3508 354.157L0.491885 354.157ZM0.491885 393.508L0.491885 354.649L39.3508 354.649L39.3508 393.508L0.491885 393.508ZM39.8427 393.508L39.8427 354.649L78.7016 354.649L78.7016 393.508L39.8427 393.508ZM79.1935 393.508L79.1935 354.649L118.052 354.649L118.052 393.508L79.1935 393.508ZM118.544 393.508L118.544 354.649L157.403 354.649L157.403 393.508L118.544 393.508ZM157.895 393.508L157.895 354.649L196.754 354.649L196.754 393.508L157.895 393.508ZM197.246 393.508L197.246 354.649L236.105 354.649L236.105 393.508L197.246 393.508ZM236.597 393.508L236.597 354.649L275.456 354.649L275.456 393.508L236.597 393.508ZM275.948 393.508L275.948 354.649L314.807 354.649L314.807 393.508L275.948 393.508ZM315.298 393.508L315.298 354.649L354.157 354.649L354.157 393.508L315.298 393.508ZM393.508 354.649L393.508 393.508L354.649 393.508L354.649 354.649L393.508 354.649ZM393.508 315.298L393.508 354.157L354.649 354.157L354.649 315.298L393.508 315.298ZM393.508 275.948L393.508 314.806L354.649 314.806L354.649 275.948L393.508 275.948ZM393.508 236.597L393.508 275.456L354.649 275.456L354.649 236.597L393.508 236.597ZM393.508 197.246L393.508 236.105L354.649 236.105L354.649 197.246L393.508 197.246ZM393.508 157.895L393.508 196.754L354.649 196.754L354.649 157.895L393.508 157.895ZM393.508 118.544L393.508 157.403L354.649 157.403L354.649 118.544L393.508 118.544ZM393.508 79.1935L393.508 118.052L354.649 118.052L354.649 79.1935L393.508 79.1935ZM393.508 39.8427L393.508 78.7017L354.649 78.7017L354.649 39.8427L393.508 39.8427ZM393.508 0.491908L393.508 39.3509L354.649 39.3509L354.649 0.491909L393.508 0.491908ZM354.157 0.491909L354.157 39.3509L315.298 39.3509L315.298 0.491909L354.157 0.491909ZM314.807 0.491909L314.807 39.3509L275.948 39.3509L275.948 0.49191L314.807 0.491909ZM275.456 0.49191L275.456 39.3509L236.597 39.3509L236.597 0.49191L275.456 0.49191ZM236.105 0.49191L236.105 39.3509L197.246 39.3509L197.246 0.49191L236.105 0.49191ZM196.754 0.49191L196.754 39.3509L157.895 39.3509L157.895 0.491911L196.754 0.49191ZM157.403 0.491911L157.403 39.3509L118.544 39.3509L118.544 0.491911L157.403 0.491911ZM118.052 0.491911L118.052 39.3509L79.1935 39.3509L79.1935 0.491912L118.052 0.491911ZM78.7016 0.491912L78.7016 39.3509L39.8427 39.3509L39.8427 0.491912L78.7016 0.491912ZM39.3508 39.3509L0.491881 39.3509L0.49188 0.491913L39.3508 0.491912L39.3508 39.3509Z" fill="url(#paint0_angular_444_10501)"></path>
</g>
<rect x="276" y="315" width="40" height="40" fill="white" fill-opacity="0.15"></rect>
<rect x="276.25" y="315.25" width="39.5" height="39.5" stroke="white" stroke-opacity="0.3" stroke-width="0.5"></rect>
<rect x="315" y="197" width="40" height="40" fill="white" fill-opacity="0.07"></rect>
<rect x="315.25" y="197.25" width="39.5" height="39.5" stroke="white" stroke-opacity="0.2" stroke-width="0.5"></rect>
<defs>
<radialGradient id="paint0_angular_444_10501" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(197 197) scale(197 197)">
<stop offset="0.126411" stop-color="white"></stop>
<stop offset="0.425515" stop-color="white" stop-opacity="0"></stop>
<stop offset="0.881187" stop-color="white" stop-opacity="0.290799"></stop>
</radialGradient>
<clipPath id="clip0_444_10501">
<rect width="394" height="394" fill="white" transform="translate(0 394) rotate(-90)"></rect>
</clipPath>
</defs>
</svg>
</div>


    <div className="px-[20px]">
        <h1 className="text-gray-300 mx-auto lg:w-150 w-[100%] font-semibold lg:leading-normal  lg:text-7xl text-[55px] leading-none font-medium text-center ">
  Latest Updates from{" "}
  <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
    Phunk.
  </span>
</h1>

        <p className="text-[#fff] text-[16px] flex leading-normal justify-center mx-auto lg:mt-10 mt-5 w-75 md:w-170 lg:w-140 text-center">Check out our latest news stories, new case studies, Webflow resources and more below. Or give us your email address and get a weekly or monthly digest delivered directly — just that, no spam or marketing emails.</p>
        <div className="mx-auto relative flex justify-center mt-5">
            <button onClick={() => setIsOpen(!isOpen)} className="w-40 text-sm rounded-full h-10 hover:bg-black hover:text-white text-black bg-white transition-all duration-200 ">Join Newsletter</button>
        </div>


        {isOpen && (
        <div className="absolute left-1/2 w-110 h-100 -translate-x-1/2 top-1/2  bg-white shadow-lg border border-gray-200 rounded-xl w-60 p-4 transition-all duration-300">

             <div className="absolute top-90 left-1/2 -translate-x-1/2">  <button onClick={() => setIsOpen(!isOpen)} className="mt-5 mx-auto  w-30 h-10 rounded-full text-white font-semibold 
          bg-gradient-to-r from-[#00d1ff] to-[#004cff] 
          shadow-[0_0_20px_rgba(0,209,255,0.5)] 
          hover:shadow-[0_0_30px_rgba(0,209,255,0.8)] 
          hover:scale-105 transition-all duration-300">
          Close
        </button></div>
       
         <h1 className="text-2xl flex justify-center">Join our newsletter</h1>
         <form action="">
            <input className="flex justify-center mx-auto mt-5 border border-gray-400 w-90 rounded-full h-12 px-5" type="text" placeholder="First Name" name="" id="" />
              <input  className="flex justify-center mt-5 mx-auto border border-gray-400 w-90 rounded-full h-12 px-5" type="text" placeholder=" Surname" name="" id="" />
                <input className="flex justify-center mt-5 mx-auto border border-gray-400 w-90 rounded-full h-12 px-5" type="text" placeholder="Email Address" name="" id="" />
         </form>
         <div className="flex justify-center">  <button className="mt-5 mx-auto  w-90 h-12 rounded-full text-white font-semibold 
          bg-gradient-to-r from-[#00d1ff] to-[#004cff] 
          shadow-[0_0_20px_rgba(0,209,255,0.5)] 
          hover:shadow-[0_0_30px_rgba(0,209,255,0.8)] 
          hover:scale-105 transition-all duration-300">
          Submit
        </button></div>
        
        </div>
      )}
    </div>
</main>
                  

                   </section>
    )
}
export default NewsHero;