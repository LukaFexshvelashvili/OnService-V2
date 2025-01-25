import AboutUs from "./AboutUs";
import Starter from "./components/Starter";
import ContactUs from "./ContactUs";
import Offers from "./Offers";
import ProjectsSection from "./ProjectsSection";

export default function Home() {
  return (
    <>
      <Starter />
      <ProjectsSection />
      <AboutUs />
      <Offers />
      <ContactUs />
    </>
  );
}
