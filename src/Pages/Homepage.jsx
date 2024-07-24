import Benefits from "../components/Benefits";
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
    </div>
  );
}

export default Homepage;
