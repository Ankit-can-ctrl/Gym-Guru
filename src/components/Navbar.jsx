import { Link } from "react-router-dom";
import { CircleChevronDown, CircleChevronUp, Flashlight } from "lucide-react";
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
      <div className="title_logo w-full text-white flex items-center justify-between pr-6 pt-5">
        <img className=" h-[100px] md:h-[120px]" src={logo} alt="logo" />
        {menuOpen ? (
          <CircleChevronUp
            color="#8C52FF"
            size={30}
            className=" cursor-pointer font-semibold"
            onClick={() => handleMenuOpen()}
          />
        ) : (
          <CircleChevronDown
            color="#8C52FF"
            size={30}
            className=" cursor-pointer font-semibold"
            onClick={() => handleMenuOpen()}
          />
        )}
      </div>
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
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              className="menu_links text-[#8C52FF] text-xl font-semibold p-7 flex flex-col items-end gap-5"
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
    </nav>
  );
}

export default Navbar;
