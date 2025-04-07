import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WorkExperience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
