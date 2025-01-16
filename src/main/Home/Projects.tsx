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
export default function Projects() {
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
          <div className="relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3 cursor-pointer overflow-hidden border-4 border-mainClear shadow-normal">
            <img src={shot1} alt="website design" />
          </div>
          <div className="relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3 cursor-pointer overflow-hidden border-4 border-mainClear shadow-normal">
            <img src={shot2} alt="website design" />
          </div>{" "}
          <div className="relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3 cursor-pointer overflow-hidden border-4 border-mainClear shadow-normal">
            <img src={shot3} alt="website design" />
          </div>{" "}
          <div className="relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3 cursor-pointer overflow-hidden border-4 border-mainClear shadow-normal">
            <img src={shot4} alt="website design" />
          </div>{" "}
          <div className="relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3 cursor-pointer overflow-hidden border-4 border-mainClear shadow-normal">
            <img src={shot5} alt="website design" />
          </div>{" "}
          <div className="relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3 cursor-pointer overflow-hidden border-4 border-mainClear shadow-normal">
            <img src={shot6} alt="website design" />
          </div>{" "}
          <div className="relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3 cursor-pointer overflow-hidden border-4 border-mainClear shadow-normal">
            <img src={shot7} alt="website design" />
          </div>{" "}
          <div className="relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3 cursor-pointer overflow-hidden border-4 border-mainClear shadow-normal">
            <img src={shot8} alt="website design" />
          </div>{" "}
          <div className="relative h-[230px] w-[450px] rounded-projects bg-mainClear backdrop-blur-infoCard transition-[transform_opacity] duration-1000 anim1 hover:-translate-y-3 cursor-pointer overflow-hidden border-4 border-mainClear shadow-normal">
            <img src={shot9} alt="website design" />
          </div>
        </div>
        <button className="w-[250px] h-[50px] text-white rounded-[12px] text-buttonText bg-main font-onSemiBold tracking-wider transition-colors hover:bg-mainLight">
          მეტის ნახვა
        </button>
      </div>
    </section>
  );
}
