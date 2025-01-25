import { useRef } from "react";
import { ScrollParent } from "../../assets/ScrollAnims";
import shot1 from "../../assets/images/webshots/1.png";
import shot2 from "../../assets/images/webshots/2.png";
import shot3 from "../../assets/images/webshots/3.png";
import shot4 from "../../assets/images/webshots/4.png";
import shot5 from "../../assets/images/webshots/5.png";
import shot6 from "../../assets/images/webshots/6.png";
import shot7 from "../../assets/images/webshots/7.png";
import shot8 from "../../assets/images/webshots/8.png";
import shot9 from "../../assets/images/webshots/9.webp";
import { ProjectsDecor } from "./components/DecorBackground";
import { Link, Links } from "react-router-dom";
import { Arrow } from "../../assets/icons";
export default function ProjectsSection() {
  const animRow = useRef<null | HTMLDivElement>(null);
  ScrollParent(animRow, "anim1", 15, 150);

  return (
    <section className="relative mb-10 flex items-center justify-center">
      <ProjectsDecor />
      <div className="container flex flex-col gap-16 items-center">
        <h2 className="text-headText2 text-head tracking-wider text-center ">
          პროექტები
        </h2>
        <div ref={animRow} className="flex gap-5 flex-wrap justify-center">
          <ProjectCard image={shot1} link="" />
          <ProjectCard image={shot2} link="" />
          <ProjectCard image={shot3} link="" />
          <ProjectCard image={shot4} link="" />
          <ProjectCard image={shot5} link="" />
          <ProjectCard image={shot6} link="" />
          <ProjectCard image={shot7} link="" />
          <ProjectCard image={shot8} link="" />
          <ProjectCard image={shot9} link="" />
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

function ProjectCard(props: { image: string; link: string }) {
  return (
    <>
      <div className="group relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3  overflow-hidden border-4 border-mainClear shadow-normal ">
        <img src={props.image} alt="website design" />
        <Link
          className="flex items-center gap-3 cursor-pointer px-8 py-[6px] rounded-low bg-mainClear backdrop-blur-whiteCard absolute bottom-[10px] right-[10px] text-main tracking-wider text-smallText transition-all duration-300 hover:bg-mainClearHover invisible opacity-0 group-hover:visible group-hover:opacity-100"
          rel="nofollow"
          to={props.link}
        >
          ნახვა
          <Arrow className="h-[14px] aspect-square [&>path]:fill-main -rotate-90" />
        </Link>
      </div>
    </>
  );
}
