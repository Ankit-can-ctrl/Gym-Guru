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
    <div>
      <Header />
      <Navbar />
    </div>
  );
}
