import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Whatsapp } from "../../assets/icons";
import { ContactBgDecor, ContactStarter } from "./components/DecorBackground";

export default function ContactUs() {
  return (
    <>
      <ContactStarter />
      <section
        id="contact"
        className="relative min-h-[600px] mobile:h-screen bg-gradient-to-b from-[#55B5FF] to-main"
      >
        <ContactBgDecor />

        <div className="relative container flex flex-col items-center justify-center pb-20 pt-6 z-10 h-full">
          <h2 className="text-white tracking-wider text-headText2 font-onBold">
            დაგვიკავშირდით
          </h2>

          <form
            className="min-w-[350px] mobile:w-full mobileS:min-w-0 w-[450px] flex flex-col gap-5 mt-20"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className=" backdrop-blur-md w-full h-[45px] px-4 tracking-wider rounded-icon placeholder:text-inputPlaceHolder bg-inputBg transition-colors focus:bg-inputHover text-[16px] outline-none text-white font-onMedium"
              placeholder="ტელეფონის ნომერი"
            />
            <textarea
              className=" backdrop-blur-md w-full h-[110px] resize-none px-4 py-3 tracking-wider rounded-icon placeholder:text-inputPlaceHolder bg-inputBg transition-colors focus:bg-inputHover text-[16px] outline-none text-white font-onMedium"
              placeholder="შეტყობინება"
            ></textarea>
            <button className=" h-[45px] w-full text-main tracking-wider rounded-icon bg-white transition-colors hover:bg-whiteHover">
              გაგზავნა
            </button>
          </form>
          <p className="my-8 text-white text-[20px]">ან</p>

          <div className="flex gap-5 w-[190px] flex-wrap justify-center">
            <Link
              className=" rounded-icon"
              target="_blank"
              to={"https://wa.me/+995598159215"}
            >
              <button className="flex justify-center items-center h-[50px]  aspect-square rounded-icon bg-whatsapp transition-colors hover:bg-whatsappHover">
                <Whatsapp className=" h-[24px] aspect-square [&>path]:fill-white" />
              </button>
            </Link>
            <Link className=" rounded-icon" to={"https://wa.me/+995598159215"}>
              <button className="flex justify-center items-center h-[50px]  aspect-square rounded-icon bg-facebook transition-colors hover:bg-facebookHover">
                <Facebook className=" h-[24px] aspect-square [&>path]:fill-white" />
              </button>
            </Link>
            <Link className=" rounded-icon" to={"https://wa.me/+995598159215"}>
              <button className="flex justify-center items-center h-[50px]  aspect-square rounded-icon bg-instagram transition-colors hover:bg-instagramHover">
                <Instagram className=" h-[24px] aspect-square [&>g]:stroke-white" />
              </button>
            </Link>
            <Link className="w-full rounded-icon" to={"tel:+995598159215"}>
              <button className="flex px-5 items-center h-[50px]  w-full rounded-icon bg-call transition-colors hover:bg-callHover">
                <Phone className=" h-[24px] aspect-square [&>g]:stroke-white" />
                <p className="mx-auto text-white tracking-wider">დარეკვა</p>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
