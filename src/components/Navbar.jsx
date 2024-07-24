import { Link } from "react-router-dom";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";

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
    <nav className="navigation_main bg-gradient-to-b from-black to-transparent w-full">
      <div className="title_logo p-5 w-full text-white flex items-center justify-between ">
        <img
          src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6255ed3eded8d1889d5dd8cf_crossfit%20gym%20logo.svg"
          alt="logo"
        />
        <div className="Title flex items-center justify-end w-full">
          {menuOpen ? (
            <CircleChevronUp
              size={30}
              className=" cursor-pointer font-bold lg:hidden"
              onClick={() => handleMenuOpen()}
            />
          ) : (
            <CircleChevronDown
              size={30}
              className=" cursor-pointer font-bold lg:hidden"
              onClick={() => handleMenuOpen()}
            />
          )}
        </div>
        <div className="big_screen_links text-white font-Saira hidden lg:flex items-center justify-center gap-10">
          {navLinks.map((item, index) => (
            <ul key={index} className="group font-medium text-3xl">
              <Link>{item}</Link>
              <div className=" border-b-4  border-white w-0 group-hover:w-full transition-all duration-500" />
            </ul>
          ))}
          <button className=" border-2 text-black font-semibold text-xl hover:scale-110 transition-all duration-500 border-green-400 bg-green-400 rounded-full px-3 py-1 w-max">
            Start 7 day free tial
          </button>
        </div>
      </div>
      <div className="mobile_links z-[100] lg:hidden text-white font-Saira">
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
                className="menu_links text-3xl font-semibold p-14 flex flex-col items-end gap-5"
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
