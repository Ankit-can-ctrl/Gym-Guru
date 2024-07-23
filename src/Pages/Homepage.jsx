import Header from "../components/Header";
import Navbar from "../components/Navbar";
function Homepage() {
  return (
    <div>
      <LandingScreen />
    </div>
  );
}

export default Homepage;

function LandingScreen() {
  return (
    <div className={`bg-[url()]`}>
      <Header />
      <Navbar />
    </div>
  );
}
