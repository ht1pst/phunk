import phunk from "../assets/phunk.png";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <section className="bg-black h-210 lg:h-100">
            <div className="flex flex-col md:flex-col lg:flex-row justify-center lg:gap-40 gap-20 pt-20 px-[20px]">


                <div>
                    <div className="flex  items-center ">
                        <div><img src={phunk} alt="" className="w-10" /></div>
                        <div className="text-white text-md font-semibold">phunk</div>
                    </div>

                    <h1 className="text-white text-3xl pt-3 font-semibold ">Your brand,<br />built  <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">better</span></h1>
                    <p className="text-[#969696] pt-5 text-sm">Company Number: 13426455</p>
                    <p className="text-[#969696] text-sm">Privacy Policy | Terms & Conditions</p>
                </div>

<div className="flex items-center gap-20">
                <div className="flex flex-col gap-2">
                    <a href="#" className="text-blue-400">Company</a>
                    <a href="#" className="text-[#969696]">Home</a>
                    <a href="#"className="text-[#969696]">About Us</a>
                    <a href="#" className="text-[#969696]">Services</a>
                    <a href="#" className="text-[#969696]">Pricing</a>
                    <a href="#" className="text-[#969696]">Portfolio</a>
                </div>


                 <div className="flex flex-col gap-2">
                    <a href="#" className="text-blue-400">Services</a>
                    <a href="#" className="text-[#969696]">Web Design</a>
                    <a href="#" className="text-[#969696]">Graphic Design</a>
                    <a href="#" className="text-[#969696]">Software</a>
                    <a href="#" className="text-[#969696] ">Webflow</a>
                </div>

                </div>



                <div className="flex flex-col"> 
                    <a href="#" className="text-blue-400">Contact</a>
                    <p className="text-white pt-5 font-semibold">Phunk Creative, Salts Mill, Victoria Rd,  Saltaire, <br /> Shipley BD18 3LA</p>
                    <a href="#" className="text-[#969696] pt-9">hello@phunk.co.uk</a>
                    <a href="#" className="text-[#969696] mt-3" >+441133 908 188</a>
                </div>
            </div>


            
        </section>
    )
}
export default Footer;