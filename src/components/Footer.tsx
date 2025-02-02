import { Link } from "react-router-dom";
import { Icon } from "../assets/icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className=" border-t-8 border-footerTop bg-main">
      <div className="container">
        <div className=" flex justify-between mt-16 small:flex-col small:gap-10">
          <div className="flex gap-4 flex-col">
            <div className=" backdrop-blur-whiteIcon flex justify-start items-start gap-4">
              <Icon className="h-[22px] aspect-square " />
              <p className="text-white tracking-wider text-[18px]">
                {t("title")}
              </p>
            </div>
            <p className="max-w-[350px] w-[100%] text-descWhite font-onMedium tracking-wider">
              {t("description")}
            </p>
          </div>
          <div className="flex gap-4 flex-col">
            <div className=" backdrop-blur-whiteIcon flex justify-start items-start gap-4">
              <p className="text-white tracking-wider text-[18px]">
                {t("contact")}
              </p>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={""}
              >
                FACEBOOK
              </Link>
              <Link
                target="_blank"
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={"https://wa.me/+995598159215"}
              >
                WHATSAPP
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={"mailto:onservicege@gmail.com"}
              >
                onservicege@gmail.com
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={"tel:+995598159215"}
              >
                +995 598 15 92 15
              </Link>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <div className=" backdrop-blur-whiteIcon flex justify-start items-start gap-4">
              <p className="text-white tracking-wider text-[18px]">
                {t("navigation")}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={"/"}
              >
                {t("home")}
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={"/projects"}
              >
                {t("projects")}
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={"/"}
              >
                {t("aboutUs")}
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={"/"}
              >
                {t("whatWeOffer")}
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={"/"}
              >
                {t("contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-footerTop w-full h-[2px] mt-12"></div>
      <div className="container flex justify-between font-onRegular py-2 mobile:px-5">
        <p className="text-descWhite small:text-[14px] mobile:text-[11px] mobile:text-left transition-color hover:text-white cursor-pointer">
          {t("rulesAndPolicies")}
        </p>
        <p className="text-descWhite small:text-[14px] mobile:text-[11px] mobile:text-right transition-color hover:text-white cursor-pointer">
          ONSERVICE 2025 © {t("allRightsServed")}
        </p>
      </div>
    </footer>
  );
}
