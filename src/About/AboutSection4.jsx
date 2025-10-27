import img from "../assets/aboutsecimg3.webp";
import { Link } from "react-router-dom";
function AboutSection4(){
    return(
        <section className="h-200">
            <div className="relative lg:px-60  px-3 lg:pt-35 pt-54">
<div className="absolute hidden lg:block top-0 left-0 w-30 h-80 bg-green-300 rounded-full blur-[120px] opacity-100"></div>
                    <div className="absolute lg:right-70 lg:top-107 right-15  top-87">
      <Link to="/talk" className="bg-white flex justify-center items-center w-30 h-10 rounded-full">Talk to us</Link>
      </div>

                <div><img src={img} alt="" className="lg:w-260 w-100 h-50 lg:h-90 rounded-xl object-cover"  /></div>
                <div>
                    <p className="text-gray-900 mt-10 lg:text-4xl text-3xl font-medium ">A little over 2 years in,</p>
                    <p className="text-gray-900 mt-10 sm:w-[90%] md:w-170 lg:w-155 font-medium">and the business has gone from strength to strength. New team members have joined, widening our skillset and bringing more diversity to our thinking. Client projects ship regularly, each one bringing unique challenges and opportunities to stretch our creativity. And our passion for Webflow design has been recognised with an official professional partnership.</p>
                </div>
              
            </div>
        </section>
    )
}
export default AboutSection4;