// import { useRef } from "react";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import LandingScreen from "../components/LandingScreen";
import Membership from "../components/Membership";
import Program from "../components/Program";

function Homepage() {
  // const section1Ref = useRef(null);
  // const section2Ref = useRef(null);
  // const section3Ref = useRef(null);

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <div>
      <LandingScreen />
      <Benefits />
      <Program />
      <Membership />
      <About />
      <Footer />
    </div>
  );
}

export default Homepage;
