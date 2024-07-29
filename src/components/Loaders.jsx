import Lottie from "lottie-react";
import animationData from "../assets/loading.json";
function Loaders() {
  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };
  return (
    <div className=" bg-black flex flex-col items-center justify-center overflow-hidden">
      <Lottie
        className="bg-black"
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}

export default Loaders;
