import { useRef } from "react";
import { Lightning, Lock, Seo, Service } from "../../assets/icons";
import { ScrollParent } from "../../assets/ScrollAnims";

export default function Offers() {
  const animRow = useRef<null | HTMLDivElement>(null);
  ScrollParent(animRow, "anim1", 15, 150);

  return (
    <section className="py-24">
      <div className="relative container">
        <h2 className="text-headText2 text-head tracking-wider text-center ">
          ჩვენ გთავაზობთ
        </h2>
        <div
          ref={animRow}
          className="flex gap-8 flex-wrap justify-center mt-24"
        >
          <div className="flex flex-col gap-4 items-center w-[300px] h-[290px] rounded-icon bg-white shadow-offerCard px-5 py-8 transition-[transform,opacity]  duration-[0.4s] hover:-translate-y-5 anim1">
            <div className="flex justify-center items-center h-[55px] aspect-square">
              <Seo className="h-[55px] aspect-square [&>path]:fill-main" />
            </div>
            <h3 className="text-headCard text-[20px] text-center h-[35px]">
              SEO ოპტიმიზაცია
            </h3>
            <p className="text-descCard text-[15px]  font-onMedium text-center leading-6">
              ოპტიმიზაცია Google საძიებო სისტემაში, რათა უფრო ხილვადი გახადო
              შენი ვებგვერდი
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[300px] h-[290px] rounded-icon bg-white shadow-offerCard px-5 py-8 transition-[transform,opacity]  duration-[0.4s] hover:-translate-y-5 anim1">
            <div className="flex justify-center items-center h-[55px] aspect-square">
              <Lightning className="h-[55px] aspect-square [&>path]:fill-main" />
            </div>
            <h3 className="text-headCard text-[20px] text-center h-[35px]">
              სისწრაფე
            </h3>
            <p className="text-descCard text-[15px]  font-onMedium text-center leading-6">
              ვებგვერდის ოპტიმიზაცია ახალი ტექნოლოგიებით რათა გავზარდოთ სისწრაფე
              და ხელმისაწვდომობა
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[300px] h-[290px] rounded-icon bg-white shadow-offerCard px-5 py-8 transition-[transform,opacity]  duration-[0.4s] hover:-translate-y-5 anim1">
            <div className="flex justify-center items-center h-[55px] aspect-square">
              <Lock className="h-[55px] aspect-square [&>path]:fill-main" />
            </div>
            <h3 className="text-headCard text-[20px] text-center h-[35px]">
              ძლიერი უსაფრთხოება
            </h3>
            <p className="text-descCard text-[15px]  font-onMedium text-center leading-6">
              მაღალი დონის უსაფრთხოება სპეციალურად შემუშავებული მეთოდებით
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[300px] h-[290px] rounded-icon bg-white shadow-offerCard px-5 py-8 transition-[transform,opacity]  duration-[0.4s] hover:-translate-y-5 anim1">
            <div className="flex justify-center items-center h-[55px] aspect-square">
              <Service className="h-[55px] aspect-square [&>path]:fill-main" />
            </div>
            <h3 className="text-headCard text-[20px] text-center h-[35px]">
              დახმარების სერვისი
            </h3>
            <p className="text-descCard text-[15px]  font-onMedium text-center leading-6">
              ლაივ დახმარების სერვისი ჩვენ გაგცემთ ამომწურავ პასუხს ნებისმიერ
              კითხვაზე
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
