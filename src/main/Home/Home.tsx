import AboutUs from "./AboutUs";
import Starter from "./components/Starter";
import ContactUs from "./ContactUs";
import Offers from "./Offers";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <Starter />
      <Projects />
      <AboutUs />
      <Offers />
      <ContactUs />
    </>
  );
}
