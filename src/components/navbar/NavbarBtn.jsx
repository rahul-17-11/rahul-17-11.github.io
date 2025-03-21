import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link to='contact' smooth={true} spy={true} duration={500} offset={-130}><button className="px-4 py-2 rounded-full text-xl font-bold text-white border border-cyan flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange  hover:scale-110 transition-all duration-500 hover:shadow-cyanshadow">
        Hire Me 
        <div className="sm:hidden md:block">
            <LuArrowDownRight />
        </div>
    </button></Link>
  )
}

export default NavbarBtn