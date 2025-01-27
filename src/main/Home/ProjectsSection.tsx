import { memo, useMemo, useRef } from "react";
import { ScrollParent } from "../../assets/ScrollAnims";
import { ProjectsDecor } from "./components/DecorBackground";
import { Link } from "react-router-dom";
import { Arrow } from "../../assets/icons";
import { projectsList, TprojectItem } from "../../storage/projectsList";
function ProjectsSection() {
  const animRow = useRef<null | HTMLDivElement>(null);
  ScrollParent(animRow, "anim1", 15, 150);
  const slicedList = useMemo(() => {
    return projectsList.slice(0, 9);
  }, []);
  return (
    <section className="relative mb-10 flex items-center justify-center">
      <ProjectsDecor />
      <div className="container flex flex-col gap-16 items-center">
        <h2 className="text-headText2 text-head tracking-wider text-center ">
          პროექტები
        </h2>
        <div ref={animRow} className="flex gap-5 flex-wrap justify-center">
          {slicedList.map((project: TprojectItem) => (
            <ProjectCardStarter
              key={project.id}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
        <Link className=" rounded-[12px] " to={"/projects"}>
          <button className="w-[250px] h-[50px] text-white rounded-[12px] text-buttonText bg-main font-onSemiBold tracking-wider transition-colors hover:bg-mainLight">
            მეტის ნახვა
          </button>
        </Link>
      </div>
    </section>
  );
}

function ProjectCardStarter(props: { image: string; link: string | null }) {
  return (
    <>
      <div className="group relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3  overflow-hidden border-4 border-mainClear shadow-normal ">
        <img src={props.image} alt="website design" />
        {props.link ? (
          <>
            <div className="absolute top-0 left-0 h-full w-full z-[1] bg-gradient-to-t from-[rgba(99,164,255,0.3)] to-30% to-[#00000000] transition-all duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100"></div>
            <Link
              className="flex items-center gap-3 z-[2] cursor-pointer px-8 py-[6px] rounded-low bg-main absolute bottom-[10px] right-[10px] text-white tracking-wider text-smallText transition-all duration-300 hover:bg-mainLight invisible opacity-0 group-hover:visible group-hover:opacity-100"
              rel="nofollow"
              to={props.link}
              target="_blank"
            >
              ნახვა
              <Arrow className="h-[14px] aspect-square [&>path]:fill-white -rotate-90" />
            </Link>
          </>
        ) : null}
      </div>
    </>
  );
}
export default memo(ProjectsSection);
