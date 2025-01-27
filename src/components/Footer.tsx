import { Link } from "react-router-dom";
import { Icon } from "../assets/icons";

export default function Footer() {
  return (
    <footer className=" border-t-8 border-footerTop bg-main">
      <div className="container">
        <div className=" flex justify-between mt-16 small:flex-col small:gap-10">
          <div className="flex gap-4 flex-col">
            <div className=" backdrop-blur-whiteIcon flex justify-start items-start gap-4">
              <Icon className="h-[22px] aspect-square " />
              <p className="text-white tracking-wider text-[18px]">
                ონ-სერვისი
              </p>
            </div>
            <p className="max-w-[350px] w-[100%] text-descWhite font-onMedium tracking-wider">
              ჩვენ გთავაზობთ თანამედროვე ციფრული სერვისების მომსახურებას,
              ხელმისაწვდომად და სწრაფად
            </p>
          </div>
          <div className="flex gap-4 flex-col">
            <div className=" backdrop-blur-whiteIcon flex justify-start items-start gap-4">
              <p className="text-white tracking-wider text-[18px]">კონტაქტი</p>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={""}
              >
                FACEBOOK
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={""}
              >
                WHATSAPP
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={""}
              >
                onservicege@gmail.com
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={""}
              >
                +995 598 15 92 15
              </Link>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <div className=" backdrop-blur-whiteIcon flex justify-start items-start gap-4">
              <p className="text-white tracking-wider text-[18px]">ნავიგაცია</p>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={""}
              >
                მთავარი
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={""}
              >
                პროექტები
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={""}
              >
                ჩვენს შესახებ
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={""}
              >
                რას გთავაზობთ
              </Link>
              <Link
                className=" text-descWhite transition-color hover:text-white cursor-pointer"
                to={""}
              >
                დაგვიკავშირდი
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-footerTop w-full h-[2px] mt-12"></div>
      <div className="container flex justify-between font-onRegular py-2">
        <p className="text-descWhite small:text-[14px] transition-color hover:text-white cursor-pointer">
          წესები და პირობები
        </p>
        <p className="text-descWhite small:text-[14px] transition-color hover:text-white cursor-pointer">
          ONSERVICE 2025 © ყველა უფლება დაცულია
        </p>
      </div>
    </footer>
  );
}
