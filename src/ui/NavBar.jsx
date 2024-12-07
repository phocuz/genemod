import { useState } from "react"
import btnClose from "../assets/icon-close.svg"
import btnOpen from "../assets/icon-menu.svg"
import MobileProducts from "../mobile/MobileProducts"
import MobileResources from "../mobile/MobileResources"
import MobileSolutions from "../mobile/MobileSolutions"
import MobileCompany from "../mobile/MobileCompany"
function NavBar() {
    const[isOpen,setIsOpen] =useState(false)

    const handleToggleIsOpen =() =>{
        setIsOpen(!isOpen)
    }
    return (
        <div className="relative">
            <button onClick={handleToggleIsOpen}>{isOpen ? (<img src={btnClose} alt="open-btn" />):(<img src={btnOpen} alt="close-btn" />)} </button>
            
        {isOpen && (
                    <div className="absolute top-full right-0 flex-shrink w-[350px] sm:w-[450px] md:w-[700px]  h-auto bg-white  lg:hidden z-50 ">
                        <ul className="p-6 space-y-6 text-lg font-medium">
                            <li className="cursor-pointer">
                                <MobileProducts />
                            </li>
                            <li className=" cursor-pointer">
                                <MobileSolutions />
                            </li>
                            <li className=" cursor-pointer">
                                <MobileResources />
                            </li>
                            <li className=" cursor-pointer text-[20px] font-bold ml-4 text-customBluee">
                                Pricing
                            </li>
                            <li className="cursor-pointer">
                                <MobileCompany />
                            </li>
                        </ul>

                        <div className="flex justify-center flex-col gap-4 mb-20">
                            <button className="w-[80%] mx-auto p-4 border-customBluee border-2 text-customBluee text-[20px] font-bold">Login</button>
                        <button className="w-[80%] p-4 border-customBluee border-2 bg-customBluee mx-auto text-white text-[20px]">Request Demo</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default NavBar
