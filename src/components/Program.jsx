import ProgramCard from "./ProgramCard";
import image5 from "../assets/Carousel/5.jpg";
import image6 from "../assets/Carousel/6.jpg";
import image7 from "../assets/Carousel/7.jpg";
import image8 from "../assets/Carousel/8.jpg";
const programData = [
  {
    tag: "Group Crossfit Classes",
    heading: "Get fit while having fun with our group CrossFit classes.",
    points: [
      "Just 30 minute long.",
      "Warm up & workout included",
      "Fun is guaranteed",
    ],
    img: image5,
  },
  {
    tag: "Strength Training",
    heading: "Crush any strength program with our suite of strength equipment",
    points: [
      "Fully fitted powerlifting and strongman section",
      "Olympic lifting platforms, weights, and bars",
      "Dumbells ranging 5lbs-250lbs",
    ],
    img: image6,
  },
  {
    tag: "Personal Training",
    heading:
      "Be guided every step of the way with one of our world class coaches",
    points: ["Weightloss", "Competitive CrossFit", "Powerlifting"],
    img: image7,
  },
  {
    tag: "Member Only Events",
    heading: "Make new friends and get competitive with fun member events",
    points: [
      "Friendly competitions",
      "Monthly challenges",
      "Summer potlucks and games",
    ],
    img: image8,
  },
];
function Program() {
  return (
    <div
      id="Program"
      className="bg-black text-white font-Saira py-10 overflow-hidden"
    >
      {programData.map((item, index) => (
        <div className="py-20" key={index}>
          <ProgramCard
            index={index}
            tag={item.tag}
            heading={item.heading}
            points={item.points}
            img={item.img}
          />
        </div>
      ))}
    </div>
  );
}

export default Program;
