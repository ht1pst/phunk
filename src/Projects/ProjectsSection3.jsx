import phunk2 from "../assets/phunk2.svg";
import star from "../assets/herostar.svg";
import herocir from "../assets/herocircle.svg";
import stuff1 from "../assets/newstuff1.svg";
import stuff2 from "../assets/newstuff2.svg";
function ProjectsSection3(){
    return(
         <section className="relative h-100 bg-black">
             <div className="absolute bottom-15 rounded-xl left-1/2 -translate-x-1/2 border-1 border-b-white w-[95%] max-w-[2100px] h-[350px] bg-gradient-to-t from-[#1fb8ff] via-[#001122] to-transparent opacity-90 blur-8xl rounded-t-[40px]"></div>
       
             
             
                       {/* Centered glowing circle */}
                       <div className="absolute lg:bottom-10  left-1/2 -translate-x-1/2 z-20">
                         <img src={herocir} alt="" className="w-300 h-100 max-w-full" />
                       </div>
             
             
                       {/* Centered phunk2 logo above circle */}
                       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
                         <img src={phunk2} alt="" className="w-[80px] " />
                       </div>
             
             
              <div className="absolute  lg:bottom-15 bottom-15 lg:left-10 left-3  z-30 lg:opacity-60 ">
                         <img src={stuff2} alt="" className="lg:w-100 w-70 rounded-b-xl opacity-50" />
                       </div>
             
             
                        <div className="absolute  lg:bottom-15 bottom-15 lg:right-10 right-2  z-30">
                         <img src={stuff1} alt="" className="lg:w-100 w-70 rounded-b-xl opacity-50" />
                       </div>
             
                       
             
              
       <div className="relative">
           <h1 className="text-white lg:text-7xl text-4xl font-medium mx-auto text-center pt-10 w-50 lg:w-200">Lets's get to <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">work.</span></h1>
           <p  className="text-gray-200   font-semibold flex justify-center mx-auto w-80 lg:w-200 text-center pt-10">We’re ready to get started on your next creative project. All you need to do is hit the button below</p>
           <div className="flex justify-center pt-4">
           <button className="bg-white text-black h-10 w-30 rounded-full" >Talk to us</button>
           </div>
       </div>
               </section>
    )
}
export default ProjectsSection3