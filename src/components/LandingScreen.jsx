import Header from "../components/Header";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.jpg";

function LandingScreen() {
  return (
    <div className={`bg-[url()]`}>
      <Header />
      <div
        className="main w-full h-screen relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <div className=" z-10  text-white px-2 font-Saira absolute bottom-[2%] text-center w-full">
          <h1 className=" text-7xl text-white md:text-9xl font-bold">
            Unleash the Beast Within.
          </h1>
          <p className=" text-xl md:text-4xl text-white font-semibold pt-2 md:pt-5">
            It doesn&apos;t matter if your goal is to get stronger, burn fat, or
            to just stay fit our world class coaches will guide you every step
            of the way.
          </p>
          <button className=" lg:hidden border-2 text-black font-semibold text-xl hover:scale-110 transition-all duration-500 border-[#97FB57] bg-[#97FB57] mt-10 rounded-full px-3 py-1 w-max">
            Start 7 day free tial
          </button>
          <div className="Review flex flex-col items-center md:pt-20 mt-5 justify-center gap-1">
            <div className="stars text-2xl">
              ⭐⭐⭐⭐⭐
              <span className="px-2 font-bold bg-white rounded-full text-black w-fit text-center">
                83
              </span>
            </div>
            <h2 className="text-xl md:text-3xl font-semibold">
              Five Star Reviews
            </h2>
            <div className="testimonial flex flex-col md:flex-row gap-2 items-center justify-center ">
              <img
                className="h-[60px] w-[60px]"
                src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/625f3d9abce1fa5c807ad37c_Male.png"
                alt="testimonial"
              />
              <h2 className="text-2xl font-semibold">
                "6 months after joining i lost 12 kgs and I&apos;m getting
                stronger."
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
