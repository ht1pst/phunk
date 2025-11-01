import { motion } from "framer-motion";
import quality from "../assets/star.png";
import phunk from "../assets/phunksc.png";
import partner from "../assets/partner2.webp";

function AboutSection6() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black lg:h-330 h-500 pt-20">
      {/* Section Title */}
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-white mt-10 lg:text-6xl text-4xl font-semibold">
          Phunk{" "}
          <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
            Values.
          </span>
        </h1>
      </motion.div>

      {/* First Row */}
      <div className="flex flex-col px-4 lg:flex-row lg:gap-3 gap-5 justify-center pt-10">
        <motion.div
          className="lg:w-135 w-[100%] h-75 bg-[#2222228f] rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="lg:px-5 lg:py-5 p-5">
        
            <div className="flex gap-30 lg:gap-70 items-end text-4xl">
                <div>
                      <svg width="20" className="" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1446_2018)">
<path d="M11.1339 1.45714L13.0118 5.20265C13.1965 5.57207 13.5556 5.82862 13.9661 5.87992L18.1631 6.48536C18.8404 6.57772 19.3227 7.20368 19.2303 7.88095C19.1893 8.15802 19.0662 8.41456 18.8609 8.60953L15.8235 11.5238C15.5259 11.8112 15.3925 12.2216 15.4643 12.6218L16.1826 16.7368C16.2955 17.4243 15.8235 18.0708 15.1359 18.1837C14.8691 18.2247 14.5921 18.1837 14.3458 18.0503L10.6003 16.1108C10.2309 15.9158 9.78961 15.9158 9.42019 16.1108L5.67467 18.0503C5.05897 18.3786 4.29961 18.1426 3.97124 17.5269C3.83783 17.2806 3.79679 17.0036 3.83783 16.7368L4.55615 12.6218C4.62798 12.2216 4.49458 11.8009 4.19699 11.5238L1.15954 8.60953C0.666978 8.13749 0.646454 7.34734 1.12875 6.85478C1.32372 6.64955 1.58027 6.52641 1.85733 6.48536L6.05436 5.87992C6.46482 5.81835 6.82398 5.57207 7.00869 5.20265L8.88658 1.45714C9.20469 0.831181 9.97432 0.595163 10.6003 0.913275C10.8363 1.03641 11.021 1.22112 11.1441 1.45714H11.1339Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</g>
<defs>
<clipPath id="clip0_1446_2018">
<rect width="20" height="18.9738" fill="white"></rect>
</clipPath>
</defs>
</svg>

 <h1 className="bg-gradient-to-r from-[#00d1ff] pt-2 to-[#004cff] bg-clip-text text-transparent font-semibold text-md">
                Quality
              </h1>
</div>
        
             <p
  className="lg:text-7xl text-6xl font-extrabold leading-none text-transparent"
  style={{
    WebkitTextFillColor: "transparent", // ensure no fill color
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "#515050ff", // Tailwind gray-600
  }}
>
  01
</p>

            </div>
            <p className="text-[#d7d7d7] lg:w-125 w-70 sm:w-[90%] text-md pt-5 font-semibold">
              We don’t send anything out the door that we’re not proud to put our names to. There’s no pride in a rushed job, a cobbled-together piece of code, or a logo that looks like everyone else’s — we check and double-check every element of our projects to guarantee its quality.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-135 w-[100%] h-75 bg-[#2222228f] rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="lg:px-5 lg:py-5 p-5">
     
            <div className="flex  gap-19 lg:gap-60 items-end text-4xl">
                <div>
                           <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5164 6.34L17.8964 5.26C17.3664 4.35 16.1964 4.03 15.2864 4.56C14.3864 5.09 13.2164 4.8 12.6864 3.89C12.6864 3.89 12.6864 3.89 12.6864 3.88C12.5264 3.6 12.4364 3.29 12.4264 2.97C12.4564 1.91 11.6264 1.03 10.5764 1C10.5564 1 10.5364 1 10.5164 1H9.26636C8.21636 1 7.36636 1.85 7.36636 2.9C7.36636 2.9 7.36636 2.9 7.36636 2.91C7.35636 3.96 6.49636 4.8 5.44636 4.8C5.12636 4.8 4.80636 4.71 4.53636 4.54C3.62636 4.01 2.45636 4.33 1.92636 5.24L1.25636 6.34C0.726356 7.25 1.04636 8.42 1.95636 8.95C2.54636 9.29 2.91636 9.92 2.91636 10.61C2.91636 11.29 2.55636 11.93 1.95636 12.27C1.04636 12.79 0.726356 13.95 1.25636 14.86L1.88636 15.95C2.39636 16.88 3.55636 17.21 4.48636 16.7C4.48636 16.7 4.48636 16.7 4.49636 16.7C5.39636 16.17 6.55636 16.48 7.08636 17.38C7.08636 17.38 7.08636 17.39 7.08636 17.4C7.24636 17.68 7.33636 17.99 7.34636 18.32C7.34636 19.38 8.20636 20.23 9.25636 20.23H10.5064C11.5564 20.23 12.4164 19.38 12.4164 18.33C12.4164 17.28 13.2564 16.42 14.3064 16.42C14.3064 16.42 14.3264 16.42 14.3364 16.42C14.6564 16.42 14.9764 16.52 15.2464 16.68C16.1564 17.21 17.3264 16.89 17.8564 15.98L18.5164 14.88C19.0464 13.97 18.7364 12.81 17.8364 12.28C17.8364 12.28 17.8264 12.28 17.8164 12.27C16.9064 11.75 16.5864 10.59 17.1064 9.68C17.1064 9.68 17.1064 9.67 17.1164 9.66C17.2864 9.37 17.5264 9.13 17.8164 8.96C18.7264 8.43 19.0364 7.27 18.5164 6.36V6.34Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M9.88609 13.24C11.3441 13.24 12.5261 12.0581 12.5261 10.6C12.5261 9.14199 11.3441 7.96002 9.88609 7.96002C8.42806 7.96002 7.24609 9.14199 7.24609 10.6C7.24609 12.0581 8.42806 13.24 9.88609 13.24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
              <h1 className="bg-gradient-to-r pt-2 from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent text-md font-semibold">
                Reliability
              </h1>
              </div>
              <p
  className="lg:text-7xl text-6xl font-extrabold leading-none text-transparent"
  style={{
    WebkitTextFillColor: "transparent", // ensure no fill color
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "#515050ff", // Tailwind gray-600
  }}
>
  02
</p>
            </div>
            <p className="text-[#d7d7d7] lg:w-125 w-70  text-md pt-5 font-semibold">
              It’s important to us that you can trust we’ll deliver what we promise — whether that’s meeting a tight deadline, returning a call, or reworking a draft ahead of an important presentation. In every interaction, we go the extra mile for our clients to reinforce that trust.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col px-4 lg:flex-row lg:gap-3 gap-5 justify-center pt-10">
        <motion.div
          className="lg:w-135 w-[100%] sm:w-[90%] h-75 bg-[#2222228f] rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="lg:px-5 lg:py-5 p-5">
  
            <div className="flex gap-20 lg:gap-60 items-center text-4xl">
                <div>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7656 18.434H19.0156" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M10.7956 1.79398C11.5856 0.863984 12.9656 0.733984 13.9156 1.49398L15.6456 2.84398C16.6656 3.44398 16.9956 4.76398 16.3956 5.77398C16.3956 5.79398 16.3756 5.80398 16.3656 5.82398C16.3356 5.87398 6.82565 17.764 6.82565 17.764C6.50565 18.164 6.02565 18.394 5.50565 18.404L1.86565 18.454L1.04565 14.984C0.925645 14.494 1.04565 13.974 1.36565 13.584L10.7956 1.79398Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M9.03613 3.9939L14.4861 8.1839" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
              <h1 className="bg-gradient-to-r pt-2 from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent text-md font-semibold">
                Creativity
              </h1>
              </div>
              <p
  className="lg:text-7xl text-6xl font-extrabold leading-none text-transparent"
  style={{
    WebkitTextFillColor: "transparent", // ensure no fill color
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "#515050ff", // Tailwind gray-600
  }}
>
  03
</p>
            </div>
            <p className="text-[#d7d7d7] lg:w-125 w-70  text-md pt-5 font-semibold">
              Each member of the team at Phunk has built their creative career on the principle that the work only matters if it’s original, effective and exciting — we’re not interested in building anything substandard, derivative or boring.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-135 w-[100%] h-75 bg-[#2222228f] rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="lg:px-5 lg:py-5 p-5">
         
            <div className="flex gap-22 lg:gap-60 items-center text-4xl">
                <div>
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.46973 13.5L8.45973 9.61001L11.8697 12.29L14.7997 8.51001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M18.2198 4.84C19.2802 4.84 20.1398 3.98039 20.1398 2.92C20.1398 1.85961 19.2802 1 18.2198 1C17.1594 1 16.2998 1.85961 16.2998 2.92C16.2998 3.98039 17.1594 4.84 18.2198 4.84Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M13.15 1.83997H5.88C2.87 1.83997 1 3.96997 1 6.98997V15.07C1 18.08 2.83 20.21 5.88 20.21H14.48C17.49 20.21 19.36 18.09 19.36 15.07V8.02997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
              <h1 className="bg-gradient-to-r pt-2 from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent text-md font-semibold">
                Ambition
              </h1>
              </div>
              <p
  className="lg:text-7xl text-6xl font-extrabold leading-none text-transparent"
  style={{
    WebkitTextFillColor: "transparent", // ensure no fill color
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "#515050ff", // Tailwind gray-600
  }}
>
  04
</p>
            </div>
            <p className="text-[#d7d7d7] lg:w-125 w-70  text-md pt-5 font-semibold">
              We’re in the creative industry because we want to push boundaries, find new ways to communicate and innovate at every stage of our process. If we’re not always striving to outdo our previous work, and motivating each other to do better, we’re doing it wrong.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Webflow Section */}
      <motion.div
        className="pt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-wrap items-center gap-5 justify-center w-60 lg:full mx-auto">
          <h1 className="text-white lg:text-6xl text-4xl font-semibold">Webflow</h1>
          <h1 className="text-white lg:text-6xl text-4xl">@</h1>
          <img src={phunk} alt="" className="w-38"  />
        </div>
        <p className="text-[#969696] lg:w-120 w-[100%]  text-center mx-auto lg:pt-5 pt-10 font-semibold text-md px-4 leading-normal">
          We’re immensely proud to be official{" "}
          <span className="text-white #383737ff font-semibold">Webflow partners</span> — we’ve been avid users of the platform since the early days, and it’s amazing to be part of its development. Check out our Webflow page to learn why we (and our clients) love it so much. For now, here are the basics.
        </p>
        <div className="flex justify-center pt-5">
          <img src={partner} alt="" className="lg:w-60 w-60 pt-5" />
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection6;
