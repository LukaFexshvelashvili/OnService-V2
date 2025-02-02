import { memo, useState } from "react";
import { TprojectItem } from "../../../storage/projectsList";
import { getColor, getName } from "../../../func/typer";
import { Arrow } from "../../../assets/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProjectCard({ data }: { data: TprojectItem }) {
  const { t } = useTranslation();
  const [loader, setLoader] = useState(true);

  return (
    <div className="group relative flex justify-center items-start rounded-projects bg-transparent h-[195px] w-[350px] projectsOPT:w-[98%] projectsOPT:h-auto projectsOPT:aspect-video overflow-hidden shadow-offerCard">
      {loader && (
        <div className="loader absolute h-full w-full flex justify-center items-center z-20 gap-1 top-0 left-0 bg-white">
          <div className="rounded-[50%] animate-[pulse_2.1s_0s_infinite]  bg-main h-[12px] aspect-square"></div>
          <div className="rounded-[50%] animate-[pulse_2.1s_0.7s_infinite]  bg-main h-[12px] aspect-square"></div>
          <div className="rounded-[50%] animate-[pulse_2.1s_1.4s_infinite]  bg-main h-[12px] aspect-square"></div>
        </div>
      )}
      <div
        className={`absolute top-0 left-0 z-10 w-[140px] h-[30px] ${getColor(
          data.type
        )} rounded-br-low text-white text-[14px] flex justify-center items-center tracking-wider`}
      >
        {getName(data.type)}
      </div>
      <img
        src={data.image}
        alt={data.name}
        onLoad={() => setLoader(false)}
        loading="lazy"
        className="absolute rounded-[18px] top-0 left-0 w-full object-fit"
      />
      {data.link ? (
        <>
          <div className="absolute top-0 left-0 h-full w-full z-[1] bg-[rgba(0,0,0,0.5)] transition-all duration-[0.5s] invisible opacity-0 group-hover:visible group-hover:opacity-100 flex justify-center items-center flex-col gap-2">
            <div className=" flex flex-col gap-2 w-[200px]">
              <p
                className={`text-white text-[18px] font-onSemiBold tracking-wider text-center mb-5`}
              >
                {data.name}
              </p>

              <Link
                className=" gap-3 z-[2] cursor-pointer h-[35px] flex justify-center items-center w-full rounded-low bg-main text-white tracking-wider text-smallText transition-all duration-300 hover:bg-mainLight invisible opacity-0 group-hover:visible group-hover:opacity-100"
                rel="nofollow"
                to={data.link}
                target="_blank"
              >
                {t("view")}
                <Arrow className="h-[14px] aspect-square [&>path]:fill-white -rotate-90" />
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default memo(ProjectCard);
