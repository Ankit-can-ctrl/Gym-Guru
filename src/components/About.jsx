import Contact from "./Contact";

function About() {
  return (
    <div
      id="About"
      className=" bg-black text-white font-Saira px-4 md:px-10 py-20 md:py-32 flex flex-col items-center justify-center gap-20"
    >
      <div className="header flex flex-col items-center justify-center md:gap-16 gap-10">
        <div className="tag text-3xl border-white border-4 px-3 rounded-xl py-2 font-semibold md:text-6xl">
          About CrossFit Gym
        </div>
        <h1 className="text-5xl text-center font-bold md:text-8xl">
          Hi! We’re a local CrossFit gym in Denver, Colorado.
        </h1>
        <p className=" text-xl text-center font-semibold md:text-4xl">
          CrossFit Gym was started by Alex and Sparky in 2012. It’s our mission
          to help people in Denver get fit, stay healthy, and live life on their
          terms without fitness being an obstacle.
        </p>
      </div>
      <div className="Form">
        <Contact />
      </div>
    </div>
  );
}

export default About;
