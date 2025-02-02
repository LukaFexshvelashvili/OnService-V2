import { memo, useMemo, useRef, useState } from "react";
import { ScrollParent } from "../../assets/ScrollAnims";
import { ProjectsDecor } from "./components/DecorBackground";
import { Link } from "react-router-dom";
import { Arrow } from "../../assets/icons";
import { projectsList, TprojectItem } from "../../storage/projectsList";
import { getColor, getName } from "../../func/typer";
import { useTranslation } from "react-i18next";
function ProjectsSection() {
  const { t } = useTranslation();
  const animRow = useRef<null | HTMLDivElement>(null);
  ScrollParent(animRow, "anim1", 15, 150);
  const shuffledList = useMemo(() => {
    const newList = [...projectsList];
    const shuffled = newList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 9);
  }, []);

  return (
    <section className="relative mb-10 flex items-center justify-center">
      <ProjectsDecor />
      <div className="container flex flex-col gap-16 items-center mobile:gap-10 mobile:mt-5">
        <h2 className="text-headText2 text-head tracking-wider text-center mobile:font-onBold ">
          {t("projects")}
        </h2>
        <div ref={animRow} className="flex gap-5 flex-wrap justify-center">
          {shuffledList.map((project: TprojectItem) => (
            <ProjectCardStarter key={project.id} data={project} />
          ))}
        </div>
        <Link className=" rounded-[12px] " to={"/projects"}>
          <button className="w-[250px] small:w-[220px] h-[50px] small:h-[42px] text-white rounded-[12px] text-buttonText bg-main font-onSemiBold tracking-wider transition-colors hover:bg-mainLight">
            {t("seeMore")}
          </button>
        </Link>
      </div>
    </section>
  );
}

function ProjectCardStarter(props: { data: TprojectItem }) {
  const { t } = useTranslation();
  const [loader, setLoader] = useState(true);

  return (
    <>
      <div className="group relative h-[230px] w-[450px]  mediumS:h-[180px] mediumS:w-[330px] small:w-[290px] small:h-[160px] mobile:w-full mobile:aspect-video mobile:h-auto projectsOPT:w-[98%] projectsOPT:h-auto projectsOPT:aspect-video rounded-projects transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3  overflow-hidden border-4 border-mainClear shadow-normal ">
        <img
          src={props.data.image}
          alt="website design"
          className="w-full object-fill object-top rounded-[13px]"
          loading="lazy"
          onLoad={() => setLoader(false)}
        />
        {loader && (
          <div className="loader absolute h-full w-full flex justify-center items-center z-20 gap-1 top-0 left-0 bg-white">
            <div className="rounded-[50%] animate-[pulse_2.1s_0s_infinite]  bg-main h-[12px] aspect-square"></div>
            <div className="rounded-[50%] animate-[pulse_2.1s_0.7s_infinite]  bg-main h-[12px] aspect-square"></div>
            <div className="rounded-[50%] animate-[pulse_2.1s_1.4s_infinite]  bg-main h-[12px] aspect-square"></div>
          </div>
        )}
        <div
          className={`absolute top-0 left-0 z-10 w-[140px] h-[30px] ${getColor(
            props.data.type
          )} rounded-br-low text-white text-[14px] flex justify-center items-center tracking-wider`}
        >
          {getName(props.data.type)}
        </div>
        {props.data.link ? (
          <>
            <div className="absolute top-0 left-0 h-full w-full z-[1] bg-[rgba(0,0,0,0.5)] transition-all duration-[0.5s] invisible opacity-0 group-hover:visible group-hover:opacity-100 flex justify-center items-center flex-col gap-2">
              <div className=" flex flex-col gap-2 w-[200px]">
                <p
                  className={`text-white text-[18px] font-onSemiBold tracking-wider text-center mb-5`}
                >
                  {props.data.name}
                </p>

                <Link
                  className=" gap-3 z-[2] cursor-pointer h-[35px] flex justify-center items-center w-full rounded-low bg-main text-white tracking-wider text-smallText transition-all duration-300 hover:bg-mainLight invisible opacity-0 group-hover:visible group-hover:opacity-100"
                  rel="nofollow"
                  to={props.data.link}
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
    </>
  );
}
export default memo(ProjectsSection);
