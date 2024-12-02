import Company from "./Company"
import Products from "./Products"
import Resources from "./Resources"
import Solutions from "./Solutions"
//import DropdownMenu from "./Products"

function Menu() {
    return (
        <div className="lg:flex gap-4 items-center  font-medium text-customDark text-[18px] tracking-wider cursor-pointer hidden ">
           <nav className="flex gap-4">
        <Products />
        <Solutions />
        <Resources />
        <button className="font-bold">Pricing</button>
        <Company />
      </nav>
        </div>
    )
}

export default Menu
