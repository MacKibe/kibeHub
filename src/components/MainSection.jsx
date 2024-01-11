import Bio_Section from "./Bio_Section";
import Projects_Section from "./Projects_Section";
import Work_Exp from "./Work_Exp";
import Education_Section from "./Education_Section";
import ContactMe_Section from "./ContactMe_Section";
import Footer from "./Footer";
const MainSection = () => {
  return (
    <>
      <Bio_Section />
      <Projects_Section />
      <Work_Exp />
      <Education_Section />
      <ContactMe_Section />
      <Footer />
    </>
  );
};
export default MainSection;
