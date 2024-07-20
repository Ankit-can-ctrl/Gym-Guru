import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" Component={Homepage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
