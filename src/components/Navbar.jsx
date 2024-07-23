import { Link } from "react-router-dom";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// color purple=#8C52FF #23252E

const navLinks = ["Home", "About", "Services", "Plan", "Contact"];
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // for scroll effect of nav
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down
        setIsVisible(false);
      } else {
        // if scroll up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="navigation_main bg-transparent fixed w-full"
    >
      <div className="title_logo w-full text-white flex items-center justify-between pr-6 pt-3 md:pt-0">
        {/* <img className=" h-[100px] md:h-[120px]" src={logo} alt="logo" /> */}
        <div className="Title p-5 md:p-10 flex items-center justify-between w-full">
          <h1 className="Title font-Quote text-white text-4xl md:text-6xl">
            Gym Guru
          </h1>
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
        <div className="big_screen_links hidden lg:flex gap-10 pr-10">
          {navLinks.map((item, index) => (
            <ul
              key={index}
              className="group text-white font-Quote font-medium text-3xl"
            >
              <Link>{item}</Link>
              <div className=" border-b-4 pt-2 border-white w-0 group-hover:w-full transition-all duration-500" />
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
                className="menu_links  text-white font-Quote text-2xl font-semibold p-14 flex flex-col items-end gap-5"
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
    </motion.nav>
  );
}

export default Navbar;
