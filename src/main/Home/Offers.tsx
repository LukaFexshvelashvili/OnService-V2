import { useRef } from "react";
import { Lightning, Lock, Seo, Service } from "../../assets/icons";
import { ScrollParent } from "../../assets/ScrollAnims";
import { useTranslation } from "react-i18next";

export default function Offers() {
  const { t } = useTranslation();
  const animRow = useRef<null | HTMLDivElement>(null);
  ScrollParent(animRow, "anim1", 15, 150);

  return (
    <section className="py-24 mobile:py-16" id="offers">
      <div className="relative container">
        <h2 className="text-headText2 text-head tracking-wider text-center ">
          {t("weOffer")}
        </h2>
        <div
          ref={animRow}
          className="flex gap-8 flex-wrap justify-center mt-32 small:gap-5 small:mt-24 mobile:mt-16"
        >
          <div className="flex flex-col gap-4 items-center w-[300px] h-[290px] small:w-[280px] small:h-[270px] small:gap-3 rounded-icon bg-white shadow-offerCard px-5 py-8 transition-[transform,opacity]  duration-[0.4s] hover:-translate-y-5 anim1">
            <div className="flex justify-center items-center h-[55px] aspect-square">
              <Seo className="h-[55px] aspect-square [&>path]:fill-main" />
            </div>
            <h3 className="text-headCard text-[20px] text-center h-[35px] small:h-[30px] small:text-[19px]">
              {t("SEOoptimization")}
            </h3>
            <p className="text-descCard text-[15px]  font-onMedium text-center leading-6">
              {t("SEOoptimizationDesc")}
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[300px] h-[290px] small:w-[280px]  small:h-[270px] small:gap-3 rounded-icon bg-white shadow-offerCard px-5 py-8 transition-[transform,opacity]  duration-[0.4s] hover:-translate-y-5 anim1">
            <div className="flex justify-center items-center h-[55px] aspect-square">
              <Lightning className="h-[55px] aspect-square [&>path]:fill-main" />
            </div>
            <h3 className="text-headCard text-[20px] text-center h-[35px] small:h-[30px] small:text-[19px]">
              {t("speedOptimization")}
            </h3>
            <p className="text-descCard text-[15px]  font-onMedium text-center leading-6">
              {t("speedOptimizationDesc")}
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[300px] h-[290px] small:w-[280px]  small:h-[270px] small:gap-3 rounded-icon bg-white shadow-offerCard px-5 py-8 transition-[transform,opacity]  duration-[0.4s] hover:-translate-y-5 anim1">
            <div className="flex justify-center items-center h-[55px] aspect-square">
              <Lock className="h-[55px] aspect-square [&>path]:fill-main" />
            </div>
            <h3 className="text-headCard text-[20px] text-center h-[35px] small:h-[30px] small:text-[19px]">
              {t("highSecurity")}
            </h3>
            <p className="text-descCard text-[15px]  font-onMedium text-center leading-6">
              {t("highSecurityDesc")}
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[300px] h-[290px] small:w-[280px]  small:h-[270px] small:gap-3 rounded-icon bg-white shadow-offerCard px-5 py-8 transition-[transform,opacity]  duration-[0.4s] hover:-translate-y-5 anim1">
            <div className="flex justify-center items-center h-[55px] aspect-square">
              <Service className="h-[55px] aspect-square [&>path]:fill-main" />
            </div>
            <h3 className="text-headCard text-[20px] text-center h-[35px] small:h-[30px] small:text-[19px]">
              {t("customerService")}
            </h3>
            <p className="text-descCard text-[15px]  font-onMedium text-center leading-6">
              {t("customerServiceDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
