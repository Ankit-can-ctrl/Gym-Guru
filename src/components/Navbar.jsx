import { Link } from "react-router-dom";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// color purple=#8C52FF #23252E

const navLinks = ["Home", "About", "Services", "Plan", "Contact"];
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navigation_main bg-[#23252E]">
      <div className="title_logo w-full text-white flex items-center justify-between pr-6 pt-3 md:pt-0">
        <img className=" h-[100px] md:h-[120px]" src={logo} alt="logo" />
        {menuOpen ? (
          <CircleChevronUp
            color="#8C52FF"
            size={30}
            className=" cursor-pointer font-bold lg:hidden"
            onClick={() => handleMenuOpen()}
          />
        ) : (
          <CircleChevronDown
            color="#8C52FF"
            size={30}
            className=" cursor-pointer font-bold lg:hidden"
            onClick={() => handleMenuOpen()}
          />
        )}
        <div className="big_screen_links hidden lg:flex gap-10 pr-10">
          {navLinks.map((item, index) => (
            <ul
              key={index}
              className="group text-[#8C52FF] font-Main font-medium text-4xl"
            >
              <Link>{item}</Link>
              <div className=" border-b-4 border-white w-0 group-hover:w-full transition-all duration-500" />
            </ul>
          ))}
        </div>
      </div>
      <div className="mobile_links lg:hidden">
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className=" overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="menu_links text-[#8C52FF] font-Main text-2xl font-semibold p-7 flex flex-col items-end gap-5"
              >
                {menuOpen &&
                  navLinks.map((item, index) => (
                    <ul key={index}>
                      <Link onClick={() => handleMenuOpen()}>{item}</Link>
                    </ul>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
