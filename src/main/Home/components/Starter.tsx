import { useRef } from "react";
import { Ads, Arrow, Design, Print, WebIcon } from "../../../assets/icons";
import { ScrollParent } from "../../../assets/ScrollAnims";
import Navbar from "../../../components/Navbar";
import Drops from "./Drops";
import DecorBackground from "./DecorBackground";
export default function Starter() {
  const animRow = useRef<null | HTMLDivElement>(null);
  ScrollParent(animRow, "anim1", 0, 150, 600);
  return (
    <>
      <main className="relative min-h-[700px] h-screen bg-main flex justify-center items-center overflow-hidden">
        <DecorBackground />
        <div className="relative container h-full flex justify-evenly items-center flex-col z-10 ">
          <Navbar />
          <div className="flex flex-col items-center gap-6 text-center thenShow">
            <h1 className="text-white text-headText font-onBold">ონ-სერვისი</h1>
            <p className="text-descWhite font-onMedium text-headDescText max-w-[550px] tracking-wider  leading-[28px]">
              ჩვენ გთავაზობთ თანამედროვე ციფრული სერვისების მომსახურებას,
              ხელმისაწვდომად და სწრაფად
            </p>
            <div className="flex items-center gap-5 mt-5">
              <button className="w-[250px] h-[50px] text-main text-buttonText rounded-[12px] bg-white font-onSemiBold tracking-wider transition-colors hover:bg-whiteHover">
                შეკვეთა
              </button>
              <button className="w-[250px] h-[50px] text-main text-buttonText rounded-[12px] bg-white font-onSemiBold tracking-wider transition-colors hover:bg-whiteHover">
                ჩვენს შესახებ
              </button>
            </div>
          </div>
          <div
            ref={animRow}
            className="flex w-full justify-center gap-6 flex-wrap"
          >
            <div className="anim1 cursor-pointer w-[350px] flex-col flex justify-between items-start h-[110px] rounded-[15px] bg-whiteCardBg backdrop-blur-whiteCard p-[15px] pb-[15px] shadow-[0_8px_0_rgba(103,103,103,0.05)] hovEffects transition-[transform_opacity] duration-[0.6s] after:bg-cyan hover:-rotate-[2deg] origin-bottom-left">
              <div className="h-[38px] aspect-square bg-cyan flex justify-center items-center rounded-[10px] shadow-[0_8px_0_rgba(59,225,217,0.25)]">
                <WebIcon className="h-[24px] aspect-square" />
              </div>
              <p className=" w-full text-right text-white tracking-[1.2px] font-onMedium text-addonText">
                ვებგვერდის დამზადება
              </p>
            </div>
            <div className="anim1 cursor-pointer w-[350px] flex-col flex justify-between items-start h-[110px] rounded-[15px] bg-whiteCardBg backdrop-blur-whiteCard p-[15px] pb-[15px] shadow-[0_8px_0_rgba(103,103,103,0.05)] hovEffects transition-[transform_opacity] duration-[0.6s] after:bg-red hover:-rotate-[2deg] origin-bottom-left">
              <div className="h-[38px] aspect-square bg-red flex justify-center items-center rounded-[10px] shadow-[0_8px_0_rgba(247,37,133,0.25)]">
                <Design className="h-[24px] aspect-square" />
              </div>
              <p className=" w-full text-right text-white tracking-[1.2px] font-onMedium text-addonText">
                დიზაინის დამზადება
              </p>
            </div>
            <div className="anim1 cursor-pointer w-[350px] flex-col flex justify-between items-start h-[110px] rounded-[15px] bg-whiteCardBg backdrop-blur-whiteCard p-[15px] pb-[15px] shadow-[0_8px_0_rgba(103,103,103,0.05)] hovEffects transition-[transform_opacity] duration-[0.6s] after:bg-purple hover:-rotate-[2deg] origin-bottom-left">
              <div className="shrink-0 h-[38px] aspect-square bg-purple flex justify-center items-center rounded-[10px] shadow-[0_8px_0_rgba(199,31,255,0.25)]">
                <Print className="h-[24px] aspect-square" />
              </div>
              <p className=" w-full text-right text-white tracking-[1.2px] font-onMedium text-addonText">
                რეკლამის/ბანერის დაბეჭდვა
              </p>
            </div>
            <div className="anim1 cursor-pointer w-[350px] flex-col flex justify-between items-start h-[110px] rounded-[15px] bg-whiteCardBg backdrop-blur-whiteCard p-[15px] pb-[15px] shadow-[0_8px_0_rgba(103,103,103,0.05)] hovEffects transition-[transform_opacity] duration-[0.6s] after:bg-yellow hover:-rotate-[2deg] origin-bottom-left">
              <div className="h-[38px] aspect-square bg-yellow flex justify-center items-center rounded-[10px] shadow-[0_8px_0_rgba(255,206,31,0.25)]">
                <Ads className="h-[24px] aspect-square" />
              </div>
              <p className=" w-full text-right text-white tracking-[1.2px] font-onMedium text-addonText">
                GOOGLE რეკლამირება
              </p>
            </div>
          </div>
        </div>
        <div className=" opshow bottom-5 absolute">
          <Arrow className=" h-[18px] aspect-square animate-bounce" />
        </div>
      </main>
      <Drops />
    </>
  );
}
