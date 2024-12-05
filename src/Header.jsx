import { Link } from "react-router-dom"
import logo from "./assets/Logo.png"
import Menu from "./ui/menu"
import NavBar from "./ui/NavBar"
function Header() {
    return (
        <div className="flex justify-between bg-white top-0 h-[100px]  p-4 z-50 ">
            <div className="flex gap-4">
                <img src={logo} alt="logo" className="w-[142px] h-[40px]" />
                <Menu />
            </div>

            <div className=" gap-4 hidden lg:flex">
                <Link to="/login" className="py-2 px-4 border-blue-700 border-2 text-customDark rounded-lg ">
                    Log in
                </Link>
                <button className="text-white bg-blue-700 px-6 py-2 rounded-md">
                    Request demo
                </button>
            </div>

           <div className="flex lg:hidden">
             <NavBar />
           </div>
        </div>
    )
}

export default Header
