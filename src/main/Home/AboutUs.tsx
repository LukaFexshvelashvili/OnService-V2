import { memo } from "react";
import computer from "../../assets/images/idle_computer.png";

function AboutUs() {
  return (
    <section
      id="aboutus"
      className="py-28 mediumS:pb-12 mobile:pb-28  bg-[#ecf7fd]"
    >
      <div className="relative container">
        <div className="absolute bottom-0 right-0 h-[150px] bg-none outline outline-[20px] outline-main translate-x-[40%] translate-y-[40%] rounded-[50%] afterC aspect-square"></div>
        <div className="absolute top-0 left-0 h-[150px] bg-none outline outline-[20px] outline-main translate-x-[40%] translate-y-[-40%] rounded-[20px] -skew-x-[20deg] -rotate-12 afterS aspect-square"></div>
        <div className="w-full px-10 py-10 rounded-infoCard bg-[rgba(255,255,255,0.85)] backdrop-blur-[10px] shadow-offerCard">
          <div className="flex mediumS:flex-col gap-10">
            <div className="flex gap-10 flex-col flex-1">
              <h3 className="text-main text-[24px] mediumS:text-[24px] mediumS:text-center mobile:tracking-wide mobile:font-onBold tracking-wider">
                ჩვენს შესახებ
              </h3>
              <div className="flex flex-col gap-7 ">
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main mobile:hidden"></div>
                  <p className="text-text text-[18px] mediumS:text-[17px] mediumS:tracking-wide tracking-wider mobile:text-center">
                    ჩვენი გუნდი გთავაზობთ ციფრულ სერვისების სწრაფ და ხარისხიან
                    მომსახურებას.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main mobile:hidden"></div>
                  <p className="text-text text-[18px] mediumS:text-[17px] mediumS:tracking-wide tracking-wider mobile:text-center">
                    მრავალ პროექტიანი გამოცდილებით გთავაზობთ ოპტიმიზირებულ
                    პროდუქტებს, რომელიც მორგებული იქნება თქვენს მოთხოვნებზე.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main mobile:hidden"></div>
                  <p className="text-text text-[18px] mediumS:text-[17px] mediumS:tracking-wide tracking-wider mobile:text-center">
                    24/7 საათიანი დახმარების სერვისი და ლაივ რეჟიმში კონტაქტი
                    დახმარების ცენტრთან{" "}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main mobile:hidden"></div>
                  <p className="text-text text-[18px] mediumS:text-[17px] mediumS:tracking-wide tracking-wider mobile:text-center">
                    გთავაზობთ თანხის დაბრუნების{" "}
                    <span className=" underline text-main">
                      მორგებულ პოლიტიკას
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
