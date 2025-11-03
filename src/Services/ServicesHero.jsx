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
import img from "../assets/servicesimg1.webp";
import curve from "../assets/bluecurve.svg";



function ServicesHero(){
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
        
       <section className="lg:h-200 h-320 bg-black lg">
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

                  
  <div className="absolute top-50 left-1/2 hidden md:hidden lg:block -translate-x-1/2 w-80 h-80 bg-[#00bfff] rounded-full blur-[120px] opacity-70"></div>
                   <main className="lg:pt-40 pt-25 relative">

                    <div>
                      

        <h1 className="text-gray-300 mx-auto lg:mt-10 mt-5 lg:text-7xl text-center gap-3 text-6xl w-70 lg:w-120 font-semibold ">Our{" "} <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">Services</span></h1>

        <p className="text-gray-200 text-md leading-normal mx-auto mt-5 w-82 md:w-170 lg:w-135 text-center px-5 lg:px-0 ">Focusing on what we’re good at means we can deliver unrivalled quality every time. Our services fall into three main buckets — web, systems and graphic design. If you’re unsure where your next project would sit, give us a call.

</p>

                    </div>

                    <div className="flex justify-center block lg:hidden">
                        <img src={img} alt="" className="lg:w-150 w-90 object-cover " />
                        
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center  gap-10 pt-5  ">
<div  className="flex justify-center mx-auto lg:mx-0 lg:w-105 w-82 h-30 items-center rounded-xl bg-gradient-to-b from-white to-gray-500 p-[1px]">

<div className="flex items-center justify-center w-full h-full bg-[#101110] rounded-xl lg:gap-8 gap-5 px-4">
    <div>
    <svg class="services_icon" className="w-15" viewBox="0 0 68 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.4294 40.1729C55.3466 42.3134 52.8183 43.9492 50.0315 44.9594C49.137 45.2632 48.3357 45.4722 47.4227 45.7763C46.0791 46.1021 44.704 46.2741 43.323 46.289H42.9316C38.2201 46.3226 33.6479 44.6614 30.0194 41.5976C29.5164 41.1987 29.0131 40.6859 28.51 40.268L27.5037 39.2423L25.2117 36.906L18.9132 30.4858C18.0188 29.5741 18.0188 28.1496 18.9132 27.1238C19.1154 26.8953 19.3627 26.7128 19.6388 26.5885C19.915 26.4641 20.2138 26.4006 20.5157 26.4021C20.8189 26.3914 21.1206 26.4507 21.3981 26.5757C21.6756 26.7007 21.9218 26.8881 22.1182 27.1238L31.6217 36.8109C32.5176 37.6801 33.4912 38.4622 34.5297 39.1471C36.9901 40.7025 39.8337 41.5128 42.7288 41.4834C44.0423 41.4698 45.3496 41.2977 46.6234 40.9706C47.4069 40.7588 48.1732 40.4857 48.9154 40.1538C50.7805 39.3269 52.4751 38.1474 53.9095 36.6777C60.0031 30.4664 60.0031 20.2666 53.9095 14.0364C51.3311 11.4045 47.9331 9.77126 44.3007 9.41784C40.6682 9.06442 37.0285 10.0129 34.0081 12.1001C32.6847 11.0385 31.2392 10.1455 29.7035 9.44091C33.4038 6.3655 38.0264 4.67579 42.8008 4.65343C46.8384 4.65125 50.7866 5.86511 54.1496 8.14258C57.5127 10.4201 60.1406 13.6596 61.7034 17.4544C63.2662 21.2492 63.6942 25.4301 62.9337 29.472C62.1732 33.5139 60.258 37.2367 57.4287 40.1729H57.4294ZM21.3161 46.2893C16.8065 46.2893 12.7071 44.3529 9.61357 41.0849C3.11009 34.4557 3.11009 23.7429 9.61357 17.2275C12.7123 14.0495 16.9204 12.2529 21.3161 12.2314H21.4099C22.2152 12.2403 23.0187 12.3101 23.8138 12.4403C24.7082 12.6492 25.5096 12.7441 26.4226 13.0482C27.9886 13.5709 29.4705 14.3261 30.8203 15.2895C31.4167 15.8023 32.1247 16.2013 32.6277 16.8281L33.1308 17.3408L34.3233 18.5564L39.9323 24.2738C40.8268 25.1856 40.8268 26.6101 39.9323 27.6358C39.7302 27.8644 39.4829 28.0468 39.2067 28.1712C38.9306 28.2955 38.6318 28.359 38.3299 28.3575C38.0267 28.3683 37.725 28.3089 37.4475 28.1839C37.17 28.0589 36.9238 27.8716 36.7274 27.6358L31.1184 21.9184L29.9258 20.7029C29.7209 20.4939 29.5344 20.399 29.4228 20.1901C27.8269 18.7796 25.8906 17.8288 23.8138 17.436C23.0937 17.264 22.3538 17.1937 21.6149 17.2271H21.3168C18.1736 17.3205 15.193 18.6724 13.0206 20.9899C10.8482 23.3075 9.65901 26.404 9.71048 29.6089C9.76196 32.8139 11.05 35.8691 13.2956 38.1129C15.5413 40.3567 18.5637 41.6084 21.7082 41.5969H23.814L25.8074 43.5332C26.8138 44.559 27.8009 45.5652 29.0126 46.2873L21.3161 46.2893ZM60.6346 7.44579C55.9308 2.67695 49.5663 0 42.932 0C36.2977 0 29.9332 2.67695 25.2293 7.44579L24.7263 7.95855C23.5695 7.75295 22.3973 7.65128 21.223 7.65472C18.4281 7.64507 15.6598 8.20848 13.0828 9.31142C10.5058 10.4144 8.17278 12.0343 6.2224 14.0749C3.2525 17.0987 1.22937 20.9526 0.409054 25.1489C-0.411263 29.3452 0.0081063 33.6952 1.61409 37.6484C3.22007 41.6017 5.94048 44.9804 9.43102 47.3571C12.9216 49.7338 17.0254 51.0016 21.223 51H43.434C49.9396 50.9297 56.1574 48.2558 60.7465 43.555C70.4364 33.544 70.4364 17.3418 60.6346 7.44555V7.44579Z" fill="white"></path>
</svg>
</div>

<div>
    <h1 className="text-white  text-lg font-semibold">Graphic Design</h1>
    <p className="text-[#969696] w-55 text-sm">Add as many design requests to your board  as you'd like.</p>
</div>
</div>

</div>

<div className="flex justify-center mx-auto lg:mx-0 lg:w-105 w-82 h-30 items-center rounded-xl bg-gradient-to-b from-white to-gray-500 p-[1px]">

<div  className="flex items-center justify-center w-full h-full bg-[#101110] rounded-xl lg:gap-8 gap-5 px-4">
    <div >
  <svg class="services_icon" viewBox="0 0 56 56" className="w-15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1545_144)">
<path d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z" fill="white"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45 20L35.4273 39H26.4359L30.4421 31.1256H30.2624C26.9573 35.4816 22.0262 38.3492 15 39V31.2346C15 31.2346 19.4948 30.965 22.1372 28.1444H15V20.0002H23.0214V26.6987L23.2015 26.6979L26.4793 20.0002H32.5457V26.6562L32.7257 26.6559L36.1265 20H45Z" fill="black"></path>
</g>
<defs>
<clipPath id="clip0_1545_144">
<rect width="56" height="56" fill="white"></rect>
</clipPath>
</defs>
</svg>
</div>

<div>
    <h1 className="text-white  text-lg font-semibold">Web Design</h1>
    <p  className="text-[#969696] w-55 text-sm">Stunning, engaging and high-conversion websites.</p>
</div>
</div>

</div>


<div className="flex justify-center mx-auto lg:mx-0 lg:w-105 w-82 h-30 items-center rounded-xl bg-gradient-to-b from-white to-gray-500 p-[1px]">

<div   className="flex items-center justify-center w-full h-full bg-[#101110] rounded-xl lg:gap-8 gap-5 px-4">
    <div >
    <svg class="services_icon" className="w-15" viewBox="0 0 61 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.8848 26.9443C35.8848 29.9382 33.4577 32.3652 30.4639 32.3652C27.47 32.3652 25.043 29.9382 25.043 26.9443C25.043 23.9505 27.47 21.5234 30.4639 21.5234C33.4577 21.5234 35.8848 23.9505 35.8848 26.9443Z" fill="white"></path>
<path d="M30.4608 39.361C30.0087 39.3723 29.4756 39.379 28.9403 39.379C22.6174 39.379 16.5194 38.423 10.7814 36.6483L11.2155 36.763C8.17665 35.7823 5.54268 34.336 3.2506 32.4825L3.29784 32.5185C1.52311 31.2342 0.328713 29.2457 0.126273 26.9694L0.124023 26.9402C0.124023 23.3547 4.05361 19.8458 10.6532 17.5559C16.3035 15.6957 22.8063 14.6228 29.5589 14.6228C29.8715 14.6228 30.1842 14.6251 30.4968 14.6296H30.4496C30.7105 14.6251 31.0164 14.6228 31.3246 14.6228C37.9939 14.6228 44.4157 15.6777 50.4349 17.6302L49.9963 17.5065C52.9317 18.4602 55.4802 19.8368 57.7183 21.5868L57.6643 21.5463C59.4076 22.7744 60.584 24.7043 60.7819 26.9154L60.7841 26.9447C60.7841 30.6696 56.3889 34.4395 49.3058 36.7833C43.9906 38.423 37.8792 39.3678 31.5473 39.3678C31.1649 39.3678 30.7847 39.3633 30.4046 39.3565H30.4608V39.361ZM30.4608 17.2275C30.2224 17.223 29.939 17.223 29.6556 17.223C23.1752 17.223 16.9333 18.2397 11.0783 20.1224L11.5079 20.0032C5.43921 22.1198 2.71751 25.0147 2.71751 26.9469C2.71751 28.9556 5.6439 32.1204 12.059 34.3113C17.1178 35.879 22.9323 36.7833 28.9583 36.7833C29.4869 36.7833 30.0132 36.7765 30.5373 36.763L30.4608 36.7653C30.7892 36.772 31.1761 36.7765 31.563 36.7765C37.6002 36.7765 43.426 35.8768 48.9166 34.2055L48.496 34.3158C55.1541 32.1024 58.2132 28.9376 58.2132 26.9379C57.9837 25.5028 57.174 24.2927 56.0403 23.5302L56.0223 23.5189C54.0744 22.0029 51.8025 20.7815 49.3418 19.9785L49.1843 19.9335C43.8579 18.2105 37.7284 17.2163 31.3696 17.2163C31.0502 17.2163 30.733 17.2185 30.4158 17.223H30.4631L30.4608 17.2275Z" fill="white"></path>
<path d="M18.1614 53.9638C18.1254 53.9638 18.0827 53.9661 18.0422 53.9661C17.0232 53.9661 16.0673 53.6984 15.2417 53.2306L15.271 53.2463C12.1714 51.4468 11.0917 46.2914 12.3918 39.4331C13.9596 32.3972 16.5014 26.1755 19.9136 20.5387L19.7584 20.8176C23.1302 14.8456 27.2037 9.73738 31.9611 5.36017L32.0061 5.31968C34.0822 3.42124 36.5115 1.86245 39.1747 0.758027L39.3389 0.697295C40.2544 0.256424 41.3296 0 42.4655 0C43.5924 0 44.6608 0.254175 45.6146 0.706292L45.5696 0.688297C48.7974 2.54625 49.868 8.24607 48.3542 15.5474C46.7347 22.2212 44.2649 28.0987 41.0169 33.4499L41.1744 33.1732C37.9083 39.089 33.9562 44.1545 29.3293 48.5115L29.2979 48.5407C27.143 50.5134 24.6125 52.1171 21.8278 53.2238L21.6614 53.2823C20.6267 53.6894 19.43 53.9391 18.1771 53.9683H18.1636L18.1614 53.9638ZM20.8718 21.4677L21.9943 22.1155C18.8879 27.244 16.4496 33.1957 15.0078 39.5253L14.9313 39.9302C13.7324 46.2486 14.8886 50.0478 16.5509 51.0105C16.9805 51.2399 17.4888 51.3726 18.0287 51.3726C18.0737 51.3726 18.1209 51.3726 18.1659 51.3704H18.1591C20.3073 51.3704 23.688 50.0095 27.5974 46.5973C32.042 42.3978 35.8164 37.5482 38.7811 32.1925L38.934 31.8889C41.8986 27.0393 44.2672 21.4227 45.7383 15.4529L45.8237 15.0436C47.2386 8.16509 46.0172 3.95433 44.2807 2.94663C43.7453 2.73519 43.1245 2.61373 42.4767 2.61373C41.658 2.61373 40.8842 2.80942 40.2004 3.15357L40.2296 3.14007C37.7149 4.18602 35.5555 5.58286 33.6908 7.29235L33.7066 7.27886C29.1157 11.5099 25.2221 16.4044 22.154 21.8276L21.9988 22.1245L20.8718 21.4677Z" fill="white"></path>
<path d="M42.7609 53.995C39.8233 53.995 36.1029 52.2248 32.2116 48.8755C27.3192 44.4151 23.176 39.2439 19.9212 33.5036L19.7592 33.1954C16.5427 27.9117 14.0212 21.78 12.5276 15.2569L12.4466 14.8408C12.0822 13.246 11.873 11.4173 11.873 9.53911C11.873 8.35371 11.9563 7.1908 12.116 6.05039L12.1002 6.18085C12.2914 3.93601 13.4678 2.00158 15.1863 0.78469L15.2088 0.768945C18.4254 -1.09801 23.9025 0.822929 29.4741 5.78047C34.0223 10.0857 37.9046 15.032 40.9862 20.4911L41.1482 20.8015C44.3602 25.9683 46.8997 31.9605 48.4405 38.3419L48.526 38.7603C48.8926 40.355 49.1041 42.1882 49.1041 44.0687C49.1041 45.3666 49.0051 46.6397 48.8117 47.8836L48.8297 47.7441C48.598 50.0429 47.3811 52.0201 45.6154 53.2685L45.5906 53.2842C44.8078 53.7318 43.8721 53.995 42.8757 53.995C42.8352 53.995 42.7947 53.995 42.7542 53.9928L42.7609 53.995ZM22.0041 31.8998C25.2836 37.6828 29.2402 42.6314 33.8603 46.8714L33.9053 46.9119C38.7774 51.1024 42.6417 52.0089 44.3152 51.0371C46.054 50.0339 47.3271 45.9176 46.0112 39.2664C44.4322 32.7658 41.9917 27.0435 38.7706 21.8542L38.9168 22.1062C35.815 16.5818 32.1081 11.8447 27.7871 7.74639L27.7601 7.72165C22.5102 3.05652 18.2567 2.00833 16.5179 3.01153C15.454 3.87753 14.7544 5.1529 14.6622 6.59473V6.61047C14.5385 7.48772 14.4688 8.49992 14.4688 9.53011C14.4688 11.2329 14.6622 12.8884 15.0266 14.4809L14.9974 14.3324C16.5112 20.9725 18.927 26.8365 22.1548 32.1562L22.0063 31.893L22.0041 31.8998Z" fill="white"></path>
</svg>
</div>

<div>
    <h1 className="text-white  text-lg font-semibold">Software Development</h1>
    <p className="text-[#969696] w-50 text-sm">Custom systems to meet specific needs.</p>
</div>
</div>
</div>


                    </div>
                   </main>
                  

                   </section>
    )
}
export default ServicesHero;