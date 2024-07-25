import TestCard from "./TestCard";
const reviewData = [
  {
    mssg: "“6 months after joining I lost 15lbs and I’m getting stronger.”",
    img: "https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/625f3d9abce1fa5c807ad37c_Male.png",
  },
  {
    mssg: "“I've gotten so much stronger after joining it's insane. My deadlift increased by 65lbs.”",
    img: "https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753e3b11a53c5e65da2299_woman-potrait-smiling.png",
  },
  {
    mssg: "“While I am passionate about health and fitness this gym is more like a community to me than anything!”",
    img: "https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753e3b9f62bc34c1f9e865_man-potrait-smiling.png",
  },
];

function Testimonials() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center p-2 gap-10">
      {reviewData.map((item, index) => (
        <div key={index}>
          <TestCard message={item.mssg} image={item.img} />
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
