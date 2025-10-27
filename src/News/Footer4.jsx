import phunk from "../assets/phunk.png";
function Footer4(){
    return(
        <section className="bg-black h-230 lg:h-100">
            <div className="flex flex-col md:flex-col lg:flex-row justify-center lg:gap-40 gap-20 pt-20 px-5">


                <div>
                    <div className="flex items-center ">
                        <div><img src={phunk} alt="" className="w-15" /></div>
                        <div className="text-white text-2xl">phunk</div>
                    </div>

                    <h1 className="text-white text-3xl pt-3 ">Your brand,<br />built  <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">better</span></h1>
                    <p className="text-gray-400 pt-5 text-sm">Company Number: 13426455</p>
                    <p className="text-gray-400 text-sm">Privacy Policy | Terms & Conditions</p>
                </div>

<div className="flex items-center gap-20">
                <div className="flex flex-col gap-2">
                    <a href="#" className="text-blue-400">Company</a>
                    <a href="#" className="text-gray-400">Home</a>
                    <a href="#"className="text-gray-400">About Us</a>
                    <a href="#" className="text-gray-400">Services</a>
                    <a href="#" className="text-gray-400">Pricing</a>
                    <a href="#" className="text-gray-400">Portfolio</a>
                </div>


                 <div className="flex flex-col gap-2">
                    <a href="#" className="text-blue-400">Services</a>
                    <a href="#" className="text-gray-400">Web Design</a>
                    <a href="#" className="text-gray-400">Graphic Design</a>
                    <a href="#" className="text-gray-400">Software</a>
                    <a href="#" className="text-gray-400">Webflow</a>
                </div>

                </div>



                <div className="flex flex-col"> 
                    <a href="#" className="text-blue-400">Contact</a>
                    <p className="text-white pt-5">Phunk Creative, Salts Mill, Victoria Rd, <br /> Saltaire, Shipley BD18 3LA</p>
                    <a href="#" className="text-gray-400 pt-9">hello@phunk.co.uk</a>
                    <a href="#" className="text-gray-400" >+441133 908 188</a>
                </div>
            </div>


            
        </section>
    )
}
export default Footer4;