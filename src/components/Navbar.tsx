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
    <nav className="flex items-center justify-center z-20 absolute top-7 left-0 mobile:top-5 w-full down">
      <div className="container flex items-center justify-between mx-auto">
        <Link
          to={"/"}
          className={` h-[45px] small:h-[40px] bg-whiteIconBg w-[200px] small:w-[180px] mobile:w-[170px] rounded-icon  ${
            blueMode
              ? "bg-white hover:bg-whiteIconBg shadow-nav"
              : "bg-whiteIconBg hover:bg-whiteIconBgHover"
          } flex justify-start items-center px-5 gap-4 cursor-pointer transition-colors  mobile:gap-3 mobile:px-4`}
        >
          <Icon
            className={` ${
              !blueMode ? "[&>rect]:fill-white" : "[&>rect]:fill-main"
            } h-[20px] small:h-[18px]  aspect-square `}
          />
          <p
            className={`${
              !blueMode ? "text-white" : "text-main"
            } text-[16px] small:text-[15px] tracking-wider select-none mobile:font-onBold`}
          >
            ონ-სერვისი
          </p>
        </Link>

        <div className="flex gap-4 items-center ">
          <button
            className={`${
              blueMode
                ? "bg-white hover:bg-whiteIconBg shadow-nav"
                : "bg-whiteIconBg hover:bg-whiteIconBgHover"
            } h-[45px] small:h-[40px] aspect-square rounded-icon   flex justify-center items-center gap-4 cursor-pointer transition-colors`}
          >
            <img
              src={georgian_flag}
              className="h-[24px] small:h-[22px] aspect-square "
              alt="georgian flag"
            />
          </button>
          <Link
            target="_blank"
            to={"https://wa.me/+995598159215"}
            className={`${
              blueMode
                ? "bg-white hover:bg-whiteIconBg shadow-nav"
                : "bg-whiteIconBg hover:bg-whiteIconBgHover"
            } h-[45px] small:h-[40px] aspect-square rounded-icon flex justify-center items-center gap-4 cursor-pointer transition-colors`}
          >
            <Whatsapp
              className={`h-[22px] small:h-[20px] aspect-square ${
                !blueMode ? "[&>path]:fill-white" : "[&>path]:fill-secondIcon"
              }`}
            />
          </Link>
          <Link
            to={"tel:+995598159215"}
            className={`${
              blueMode
                ? "bg-white hover:bg-whiteIconBg shadow-nav"
                : "bg-whiteIconBg hover:bg-whiteIconBgHover"
            } h-[45px] small:h-[40px] aspect-square rounded-icon flex justify-center items-center gap-4 cursor-pointer transition-colors`}
          >
            <Phone
              className={`h-[22px] small:h-[20px] aspect-square ${
                !blueMode ? "[&>path]:fill-white" : "[&>path]:fill-secondIcon"
              }`}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
