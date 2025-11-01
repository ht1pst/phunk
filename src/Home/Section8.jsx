import phunk2 from "../assets/phunk2.svg";
import star from "../assets/herostar.svg";
import herocir from "../assets/herocircle.svg";
import stuff1 from "../assets/newstuff1.svg";
import stuff2 from "../assets/newstuff2.svg";
import { Link } from "react-router-dom";
function Section8(){
    return(
      
        <section className="relative h-120 bg-black">
           
            <div className="absolute bottom-5 left-1/2 hidden md:hidden lg:block -translate-x-1/2 w-100 h-100 bg-[#00bfff] rounded-full blur-[120px] opacity-70"></div>


      <div className="absolute bottom-15 rounded-xl left-1/2 -translate-x-1/2 border-1 border-b-white w-[90%] max-w-[2100px] h-[350px] bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent opacity-90 blur-8xl rounded-t-[40px]"></div>

      
      
                {/* Centered glowing circle */}
                
      <div className="absolute block lg:hidden lg:bottom-10 bottom-15 left-1/2 -translate-x-1/2 w-[350px] lg:w-full    object-cover      right- z-0">      
                  <img src={herocir} alt="" className=" object-cover w-100 h-[350px]   " />
                </div>

                 <div className="absolute hidden  lg:block lg:bottom-15 bottom-15 left-1/2 -translate-x-1/2      object-cover      right- z-0">
                  <img src={herocir} alt="" className=" object-cover h-80    " />
                </div>
      
                {/* Centered phunk2 logo above circle */}
                <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30">
                  <img src={phunk2} alt="" className="w-[60px] " />
                </div>
      
      
       <div className="absolute  lg:bottom-15 bottom-15 lg:left-10 left-3  lg:z-30 lg:opacity-60 ">
                  <img src={stuff2} alt="" className="lg:w-100 w-70 rounded-b-xl opacity-30" />
                </div>
      
      
                 <div className="absolute  lg:bottom-15 bottom-15 lg:right-10 right-5  lg:z-30">
                  <img src={stuff1} alt="" className="lg:w-100 w-70 rounded-b-xl opacity-30" />
                </div>
      
                
      
       
<div className="relative">
  
    <h1 className="text-white lg:text-7xl text-4xl font-medium mx-auto text-center pt-10 w-50 lg:w-200 font-semibold">Let's get to <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">work.</span></h1>
    <p  className="text-gray-200 text-sm   font-semibold flex justify-center mx-auto w-60 lg:w-200 text-center pt-10 leading-normal">We’re ready to get started on your next creative project. All you need to do is hit the button below</p>
    <div className="flex justify-center mt-5 lg:z-0 ">
    <Link to="/talk" className="bg-white flex justify-center items-center text-black h-10 w-30 rounded-full" >Talk to us</Link>
    </div>

     
</div>
        </section>

        
    )
}
export default Section8;