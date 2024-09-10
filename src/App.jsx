import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
