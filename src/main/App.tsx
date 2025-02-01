import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [Loader, setLoader] = useState(true);
  useEffect(() => {
    scrollTo(0, 0);
    setLoader(false);
  }, [location.pathname]);
  useLayoutEffect(() => {
    setLoader(true);
  }, [location.pathname]);

  return (
    <>
      {Loader ? <WebLoader /> : null}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

function WebLoader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-main z-50 flex justify-center items-center">
      <div className="loader flex justify-center items-center gap-1">
        <div className="rounded-[50%] animate-[pulse_2.1s_0s_infinite]  bg-white h-[12px] aspect-square"></div>
        <div className="rounded-[50%] animate-[pulse_2.1s_0.7s_infinite]  bg-white h-[12px] aspect-square"></div>
        <div className="rounded-[50%] animate-[pulse_2.1s_1.4s_infinite]  bg-white h-[12px] aspect-square"></div>
      </div>
    </div>
  );
}
