import About from "../components/About";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import LandingScreen from "../components/LandingScreen";
import Membership from "../components/Membership";
import Program from "../components/Program";

function Homepage() {
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
