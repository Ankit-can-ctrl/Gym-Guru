import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" Component={Homepage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
