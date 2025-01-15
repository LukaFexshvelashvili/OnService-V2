import { Icon, Phone, Whatsapp } from "../assets/icons";
import georgian_flag from "../assets/images/georgianFlag.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between z-10 absolute top-10 left-0 w-full down">
      <div className="h-[45px] w-[200px] rounded-icon bg-whiteIconBg backdrop-blur-whiteIcon flex justify-start items-center px-5 gap-4 cursor-pointer">
        <Icon className="h-[22px] aspect-square " />
        <p className="text-white text-logoText tracking-wider">ონ-სერვისი</p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="h-[45px] aspect-square rounded-icon bg-whiteIconBg backdrop-blur-whiteIcon flex justify-center items-center gap-4 cursor-pointer transition-colors hover:bg-whiteIconBgHover">
          <img
            src={georgian_flag}
            className="h-[24px] aspect-square "
            alt="georgian flag"
          />
        </div>
        <div className="h-[45px] aspect-square rounded-icon bg-whiteIconBg backdrop-blur-whiteIcon flex justify-center items-center gap-4 cursor-pointer transition-colors hover:bg-whiteIconBgHover">
          <Whatsapp className="h-[24px] aspect-square " />
        </div>
        <div className="h-[45px] aspect-square rounded-icon bg-whiteIconBg backdrop-blur-whiteIcon flex justify-center items-center gap-4 cursor-pointer transition-colors hover:bg-whiteIconBgHover">
          <Phone className="h-[24px] aspect-square " />
        </div>
      </div>
    </nav>
  );
}
