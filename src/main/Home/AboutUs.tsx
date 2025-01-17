import computer from "../../assets/images/idle_computer.png";

export default function AboutUs() {
  return (
    <section className="py-28">
      <div className="relative container">
        <div className="absolute top-0 right-0 h-[150px] bg-none outline outline-[20px] outline-main translate-x-[40%] translate-y-[-40%] rounded-[50%] afterC aspect-square"></div>
        <div className="absolute top-0 left-0 h-[150px] bg-none outline outline-[20px] outline-main translate-x-[40%] translate-y-[-40%] rounded-[20px] -skew-x-[20deg] -rotate-12 afterS aspect-square"></div>
        <div className="w-full px-10 py-10 rounded-infoCard bg-mainClear backdrop-blur-infoCard">
          <div className="flex ">
            <div className="flex gap-10 flex-col flex-1">
              <h3 className="text-main text-[24px] tracking-wider">
                ჩვენს შესახებ
              </h3>
              <div className="flex flex-col gap-7">
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main"></div>
                  <p className="text-text text-[18px] tracking-wider">
                    ჩვენი გუნდი გთავაზობთ ციფრულ სერვისების სწრაფ და ხარისხიან
                    მომსახურებას.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main"></div>
                  <p className="text-text text-[18px] tracking-wider">
                    მრავალ პროექტიანი გამოცდილებით გთავაზობთ ოპტიმიზირებულ
                    პროდუქტებს, რომელიც მორგებული იქნება თქვენს მოთხოვნებზე.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main"></div>
                  <p className="text-text text-[18px] tracking-wider">
                    24/7 საათიანი დახმარების სერვისი და ლაივ რეჟიმში კონტაქტი
                    დახმარების ცენტრთან{" "}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-2 aspect-square rounded-[50%] translate-y-[10px] bg-main"></div>
                  <p className="text-text text-[18px] tracking-wider">
                    გთავაზობთ თანხის დაბრუნების{" "}
                    <span className=" underline">მორგებულ პოლიტიკას</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center flex-1">
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
