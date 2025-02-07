import { memo } from "react";
import computer from "../../assets/images/idle_computer.png";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <section
      id="aboutus"
      className="py-28 mediumS:pb-12 mobile:pb-28  bg-[#ecf7fd]"
    >
      <div className="relative container">
        <div className="absolute bottom-0 right-0 h-[150px] bg-none outline outline-[20px] outline-main translate-x-[40%] translate-y-[40%] rounded-[50%] afterC aspect-square"></div>
        <div className="absolute top-0 left-0 h-[150px] bg-none outline outline-[20px] outline-main translate-x-[40%] translate-y-[-40%] rounded-[20px] -skew-x-[20deg] -rotate-12 afterS aspect-square"></div>
        <div className="w-full px-10 py-10 rounded-infoCard bg-[rgba(255,255,255,0.8)] backdrop-blur-[10px] shadow-offerCard">
          <div className="flex mediumS:flex-col gap-10">
            <div className="flex gap-10 flex-col flex-1">
              <h3 className="text-main text-[24px] mediumS:text-[24px] mediumS:text-center mobile:tracking-wide mobile:font-onBold tracking-wider">
                {t("aboutUs")}
              </h3>
              <div className="flex flex-col gap-7 ">
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main mobile:hidden"></div>
                  <p className="text-text text-[18px] mediumS:text-[17px] mediumS:tracking-wide tracking-wider mobile:text-center">
                    {t("homepage.aboutus1")}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main mobile:hidden"></div>
                  <p className="text-text text-[18px] mediumS:text-[17px] mediumS:tracking-wide tracking-wider mobile:text-center">
                    {t("homepage.aboutus2")}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main mobile:hidden"></div>
                  <p className="text-text text-[18px] mediumS:text-[17px] mediumS:tracking-wide tracking-wider mobile:text-center">
                    {t("homepage.aboutus3")}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main mobile:hidden"></div>
                  <p className="text-text text-[18px] mediumS:text-[17px] mediumS:tracking-wide tracking-wider mobile:text-center">
                    {t("homepage.aboutus4")}{" "}
                    <span className=" underline text-main">
                      {t("homepage.policy")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end mediumS:hidden items-center flex-1">
              <img
                src={computer}
                className="h-[420px] aspect-square"
                alt="idle computer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutUs);
