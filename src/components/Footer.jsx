import { Link } from "react-scroll";

function Footer() {
  return (
    <div id="Footer" className=" font-Saira text-white bg-black">
      <div className=" border-t-2 border-gray-600" />
      <div className="footer flex flex-col gap-10 py-20 px-5 md:px-10 items-center">
        <img
          className="h-[110px]"
          src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6255ed3eded8d1889d5dd8cf_crossfit%20gym%20logo.svg"
          alt="Gym Logo"
        />
        <div className="Navigation_links flex flex-col items-center justify-center gap-10  ">
          <h1 className=" text-4xl md:text-5xl font-semibold">Navigation</h1>
          <div className="Links flex gap-2 md:gap-5 justify-center text-xl font-semibold md:text-3xl flex-wrap">
            <Link
              className=" cursor-pointer"
              to="Home"
              smooth={true}
              duration={4000}
            >
              Home
            </Link>
            <Link
              className=" cursor-pointer"
              to="Group"
              smooth={true}
              duration={3500}
            >
              CrossFit Classes
            </Link>
            <Link
              className=" cursor-pointer"
              to="Strength"
              smooth={true}
              duration={3500}
            >
              Strength Training
            </Link>
            <Link
              className=" cursor-pointer"
              to="Personal"
              smooth={true}
              duration={3000}
            >
              Personal Training
            </Link>
            <Link
              className=" cursor-pointer"
              to="Event"
              smooth={true}
              duration={3000}
            >
              Member Events
            </Link>
            <Link
              className=" cursor-pointer"
              to="About"
              smooth={true}
              duration={2000}
            >
              About
            </Link>
            <Link
              className=" cursor-pointer"
              to="Contact"
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </div>
          <h2 className="Copyright text-xl">
            Copyright 2024 | ak537664@gmail.com
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
