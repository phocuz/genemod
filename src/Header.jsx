import logo from "./assets/Logo.png"
import Menu from "./ui/menu"
function Header() {
    return (
        <div className="flex justify-between pb-4  sticky z-50">
            <div className="flex gap-4">
                <img src={logo} alt="logo" className="w-[142px] h-[40px]" />
                <Menu />
            </div>

            <div className="flex gap-4">
                <button className="py-2 px-4 border-blue-700 border-2 text-customDark rounded-lg ">
                    Log in
                </button>
                <button className="text-white bg-blue-700 px-6 py-2 rounded-md">
                    Request demo
                </button>
            </div>
        </div>
    )
}

export default Header