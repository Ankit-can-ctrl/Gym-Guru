import { Link } from "react-scroll";
import image1 from "../assets/Carousel/1.jpg";
import image2 from "../assets/Carousel/2.jpg";
import image3 from "../assets/Carousel/3.jpg";
import image4 from "../assets/Carousel/4.jpg";

function Benefits() {
  return (
    <div
      id="BeneFits"
      className=" text-white font-Saira bg-black w-full gap-10 py-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl md:text-8xl text-center font-semibold ">
        We offer something for everybody
      </h1>
      <div className="Cards flex flex-col gap-16 md:flex-row flex-wrap items-center justify-center overflow-hidden">
        <BenefitCards id="Group" text="CrossFit Group Classes" image={image1} />
        <BenefitCards id="Personal" text="Personal Training" image={image2} />
        <BenefitCards id="Strength" text="Strength Training" image={image3} />
        <BenefitCards id="Event" text="Member only Events" image={image4} />
      </div>
    </div>
  );
}

export default Benefits;

function BenefitCards({ id, image, text }) {
  return (
    <Link
      to={id}
      smooth={true}
      duration={1500}
      href="#"
      style={{ backgroundImage: `url(${image})` }}
      className=" bg-cover hover:scale-105 transition-all duration-500 bg-center flex items-center justify-center rounded-xl min-w-[340px] min-h-[300px]"
    >
      <h1 className="text-4xl font-semibold md:text-5xl p-5">{text}</h1>
    </Link>
  );
}
