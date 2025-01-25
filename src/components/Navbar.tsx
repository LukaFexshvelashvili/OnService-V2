import { Link, useLocation } from "react-router-dom";
import { Icon, Phone, Whatsapp } from "../assets/icons";
import georgian_flag from "../assets/images/georgianFlag.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [blueMode, setBlueMode] = useState(false);
  useEffect(() => {
    if (location.pathname == "/") {
      setBlueMode(false);
    } else {
      setBlueMode(true);
    }
    scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="flex items-center justify-center z-20 absolute top-10 left-0 w-full down">
      <div className="container flex items-center justify-between mx-auto">
        <Link
          to={"/"}
          className={`h-[45px] w-[200px] rounded-icon ${
            blueMode
              ? "bg-white hover:bg-whiteIconBg shadow-nav"
              : "bg-whiteIconBg hover:bg-whiteIconBgHover"
          } backdrop-blur-whiteIcon flex justify-start items-center px-5 gap-4 cursor-pointer transition-colors `}
        >
          <Icon
            className={` ${
              !blueMode ? "[&>rect]:fill-white" : "[&>rect]:fill-main"
            } h-[20px] aspect-square `}
          />
          <p
            className={`${
              !blueMode ? "text-white" : "text-main"
            } text-[16px]] tracking-wider select-none`}
          >
            ონ-სერვისი
          </p>
        </Link>
        <div className="flex gap-4 items-center">
          <div
            className={`${
              blueMode
                ? "bg-white hover:bg-whiteIconBg shadow-nav"
                : "bg-whiteIconBg hover:bg-whiteIconBgHover"
            } h-[45px] aspect-square rounded-icon backdrop-blur-whiteIcon flex justify-center items-center gap-4 cursor-pointer transition-colors`}
          >
            <img
              src={georgian_flag}
              className="h-[24px] aspect-square "
              alt="georgian flag"
            />
          </div>
          <div
            className={`${
              blueMode
                ? "bg-white hover:bg-whiteIconBg shadow-nav"
                : "bg-whiteIconBg hover:bg-whiteIconBgHover"
            } h-[45px] aspect-square rounded-icon  backdrop-blur-whiteIcon flex justify-center items-center gap-4 cursor-pointer transition-colors`}
          >
            <Whatsapp
              className={`h-[22px] aspect-square ${
                !blueMode ? "[&>path]:fill-white" : "[&>path]:fill-secondIcon"
              }`}
            />
          </div>
          <div
            className={`${
              blueMode
                ? "bg-white hover:bg-whiteIconBg shadow-nav"
                : "bg-whiteIconBg hover:bg-whiteIconBgHover"
            } h-[45px] aspect-square rounded-icon  backdrop-blur-whiteIcon flex justify-center items-center gap-4 cursor-pointer transition-colors`}
          >
            <Phone
              className={`h-[22px] aspect-square ${
                !blueMode ? "[&>path]:fill-white" : "[&>path]:fill-secondIcon"
              }`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
