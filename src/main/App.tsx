import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import { Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Arrow } from "../assets/icons";

function App() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [Loader, setLoader] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setLoader(true);

    switch (location.pathname) {
      case "/ka":
        i18n.changeLanguage("ka");
        navigate("/", { replace: true });
        break;
      case "/en":
        i18n.changeLanguage("en");
        navigate("/", { replace: true });
        break;
      case "/ru":
        i18n.changeLanguage("ru");
        navigate("/", { replace: true });
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    scrollTo(0, 0);
    if (
      location.pathname !== "/ka" &&
      location.pathname !== "/en" &&
      location.pathname !== "/ru"
    ) {
      setLoader(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{t("title")}</title>
      </Helmet>
      {Loader ? <WebLoader /> : null}
      <Navbar />
      <Suspense fallback={<WebLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
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
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={` flex justify-center items-center bg-main rounded-icon shadow-mainShadow fixed bottom-20 right-20 h-[50px] mobile:bottom-5 mobile:right-5 aspect-square text-white transition-all hover:bg-mainLight ${
        isVisible
          ? "visible opacity-100 cursor-pointer"
          : "invisible opacity-0 cursor-default"
      } `}
    >
      <Arrow className="h-[18px] aspect-square rotate-180" />
    </button>
  );
}
