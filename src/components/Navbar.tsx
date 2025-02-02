import { Link, useLocation } from "react-router-dom";
import { Icon, Phone, Whatsapp } from "../assets/icons";
import georgian_flag from "../assets/images/georgianFlag.png";
import UK_flag from "../assets/images/UKFlag.png";
import russian_flag from "../assets/images/russianFlag.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [blueMode, setBlueMode] = useState(false);
  useEffect(() => {
    if (
      location.pathname == "/" ||
      location.pathname == "/ka" ||
      location.pathname == "/en" ||
      location.pathname == "/ru"
    ) {
      setBlueMode(false);
    } else {
      setBlueMode(true);
    }
    scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`flex items-center justify-center z-20 absolute top-7 left-0 mobile:top-5 w-full ${
        location.pathname == "/" ? "down" : ""
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link
          to={"/"}
          className={` h-[45px] small:h-[40px] bg-whiteIconBg w-[200px] small:w-[180px] mobile:w-[170px] mobileSS:w-[45px] mobileSS:px-0 mobileSS:justify-center rounded-icon  ${
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
            } text-[16px] small:text-[15px] tracking-wider select-none mobile:font-onBold mobileSS:hidden`}
          >
            {t("title")}
          </p>
        </Link>
        <div className="flex gap-4 items-center mobile:gap-3">
          <LanguageChange blueMode={blueMode} />
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

function LanguageChange({ blueMode }: { blueMode: boolean }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<string>(georgian_flag);
  useEffect(() => {
    switch (i18n.language) {
      case "ka":
        setActiveImage(georgian_flag);
        break;
      case "en":
        setActiveImage(UK_flag);
        break;
      case "ru":
        setActiveImage(russian_flag);
        break;
      default:
        setActiveImage(georgian_flag);
        break;
    }
  }, [i18n.language]);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((state: boolean) => !state)}
        className={`${
          blueMode
            ? open
              ? "bg-whiteIconBg"
              : "bg-white hover:bg-whiteIconBg shadow-nav"
            : open
            ? "bg-whiteIconBgHover"
            : "bg-whiteIconBg hover:bg-whiteIconBgHover"
        } h-[45px] small:h-[40px] aspect-square rounded-icon   flex justify-center items-center gap-4 cursor-pointer transition-colors`}
      >
        <img
          src={activeImage}
          className="h-[24px] small:h-[22px] aspect-square "
          alt="georgian flag"
        />
      </button>
      <div
        className={`absolute right-0 top-[55px] h-[120px] w-[200px] mobile:translate-x-2/4 overflow-hidden rounded-icon flex flex-col transition-[opacity,visibility] ${
          open ? "visible opacity-100" : "invisible opacity-0"
        } `}
      >
        {" "}
        <button
          onClick={() => {
            i18n.changeLanguage("ka");
            setOpen(false);
          }}
          className={` h-[40px] w-full flex items-center gap-3 px-5 ${
            blueMode
              ? i18n.language == "ka"
                ? "bg-whiteHover"
                : "bg-white hover:bg-whiteHover "
              : i18n.language == "ka"
              ? "bg-whiteIconBgHover"
              : "bg-whiteIconBg hover:bg-whiteIconBgHover"
          }
          
          ${open ? "cursor-pointer" : "cursor-default"}
              `}
        >
          <img
            src={georgian_flag}
            className="h-[20px] aspect-square "
            alt="georgian flag"
          />
          <p
            className={` text-[14px] tracking-wider ${
              !blueMode ? "text-white" : "text-text"
            }`}
          >
            ქართული
          </p>
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("en");
            setOpen(false);
          }}
          className={` h-[40px] w-full flex items-center gap-3 px-5 ${
            blueMode
              ? i18n.language == "en"
                ? "bg-whiteHover"
                : "bg-white hover:bg-whiteHover "
              : i18n.language == "en"
              ? "bg-whiteIconBgHover"
              : "bg-whiteIconBg hover:bg-whiteIconBgHover"
          }
          ${open ? "cursor-pointer" : "cursor-default"}

              `}
        >
          {" "}
          <img
            src={UK_flag}
            className="h-[20px] aspect-square "
            alt="UK flag"
          />
          <p
            className={` text-[14px] tracking-wider ${
              !blueMode ? "text-white" : "text-text"
            }`}
          >
            English
          </p>
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("ru");
            setOpen(false);
          }}
          className={` h-[40px] w-full flex items-center gap-3 px-5 ${
            blueMode
              ? i18n.language == "ru"
                ? "bg-whiteHover"
                : "bg-white hover:bg-whiteHover "
              : i18n.language == "ru"
              ? "bg-whiteIconBgHover"
              : "bg-whiteIconBg hover:bg-whiteIconBgHover"
          }
          ${open ? "cursor-pointer" : "cursor-default"}

              `}
        >
          {" "}
          <img
            src={russian_flag}
            className="h-[20px] aspect-square "
            alt="russian flag"
          />
          <p
            className={` text-[14px] tracking-wider ${
              !blueMode ? "text-white" : "text-text"
            }`}
          >
            Russian
          </p>
        </button>
      </div>
    </div>
  );
}
