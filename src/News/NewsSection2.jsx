import img1 from "../assets/newssectionimg1.webp";
import img2 from "../assets/newssectionimg2.webp";
import img3 from "../assets/newssectionimg3.webp";
import img4 from "../assets/newssectionimg4.webp";
import { useState } from "react";
function NewsSection2(){
     
  return(
    <section className="bg-black lg:h-380 h-600" >

 <div className="pt-6">
    
    <div className="flex px-10 lg:px-155 justify-center ">
         <div className="p-[2px] rounded-full  bg-gradient-to-r from-[#00d1ff] to-[#004cff] w-30 h-8 mx-auto">
  <p className="rounded-xl bg-black text-white text-sm flex justify-center px-2 py-1">
    Latest
  </p>
</div>

 <div className="p-[2px] rounded-full  bg-gradient-to-r from-[#00d1ff] to-[#004cff] w-30 h-8 mx-auto">
  <p className="rounded-xl bg-black text-white text-sm flex justify-center px-2 py-1">
    All time
  </p>
</div>
    </div>
    

    <div className="flex flex-col lg:flex-row justify-center  gap-10 mt-10">

<div className="lg:h-150 h-115 bg-[#201f1fff] border border-white mx-auto lg:mx-0 #201f1fff lg:w-135 w-80 rounded-xl">
    <div>
<img src={img1} alt="" className="lg:w-135 w-80 object-cover rounded-t-xl" />
</div>

<div className="pt-10 px-6">
<a href="#" className="text-white lg:text-3xl text-2xl ">60 years and still going strong: the  British Rail logo</a>
</div>

 <div className="mt-19 px-6">
                <a href="#" className="text-white text-sm underline underline-offset-7 decoration-1">
                  Read more{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </a>
              </div>
</div>



<div className="lg:h-150 h-110 bg-[#201f1fff] border border-white  mx-auto lg:mx-0 #201f1fff lg:w-135 w-80 rounded-xl">
    <div>
<img src={img2} alt="" className="lg:w-135 w-80 object-cover rounded-t-xl" />
</div>

<div className="pt-10 px-6">
<a href="#" className="text-white lg:text-3xl text-2xl ">The Evolution of Web Design</a>
</div>

 <div className="mt-29 px-6">
                <a href="#" className="text-white text-sm underline underline-offset-7 decoration-1">
                  Read more{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </a>
              </div>
</div>



    </div>


    
 <div className="flex flex-col lg:flex-row justify-center gap-10 mt-20">

<div className="lg:h-150 h-125 bg-[#201f1fff] border border-white  mx-auto lg:mx-0 #201f1fff lg:w-135 w-80 rounded-xl">
    <div>
<img src={img3} alt="" className="lg:w-135 w-80 object-cover rounded-t-xl" />
</div>

<div className="pt-10 px-6">
<a href="#" className="text-white lg:text-3xl text-2xl ">Awwwards.com gives Phunk the <br /> thumbs-up!</a>
</div>

 <div className="mt-19 px-6">
                <a href="#" className="text-white text-sm underline underline-offset-7 decoration-1">
                  Read more{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </a>
              </div>
</div>



<div className="lg:h-150 h-160 bg-[#201f1fff] border border-white  mx-auto lg:mx-0 #201f1fff lg:w-135 w-80 rounded-xl">
    <div>
<img src={img4} alt="" className="lg:w-135 w-80 h-85 object-cover rounded-t-xl" />
</div>

<div className="pt-10 px-6">
<a href="#" className="text-white lg:text-3xl text-2xl ">Webflow is 10 years old — here’s why  it’s our first choice platform.</a>
</div>

 <div className="mt-19 px-6">
                <a href="#" className="text-white text-sm underline underline-offset-7 decoration-1">
                  Read more{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </a>
              </div>
</div>





    </div>    
    
    
    
    
    
    </div>      
    </section>
  )
}
export default NewsSection2