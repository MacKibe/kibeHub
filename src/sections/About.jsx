import StackJourney from "../components/StackJourney";
const About = () => {
  return (
    <section>
      <h2 className="underline decoration-secondary">About Me.</h2>
      <div className="flex gap-10 py-[3%] ">
        <span className="flex-1 text-lg space-y-8">
          <p className="text-justify">
            My journey began as an IT intern, where I discovered my passion for
            creating digital solutions that solve real-world problems. Since
            then, I've grown into a full-stack developer focused on building
            clean, scalable, and user-friendly web applications.{" "}
          </p>
          <p>
            I thrive on challenges and continuously seek to expand my skill set
            to stay current with emerging technologies. My adaptability and
            problem-solving abilities allow me to approach each project with
            fresh perspectives.{" "}
          </p>
          <p>
            I'm driven by the impact my work can have—whether it's streamlining
            business operations, enhancing user experiences, or creating tools
            that make life easier. When I'm not coding, you'll find me
            researching new technologies and contributing to the developer
            community.
          </p>
        </span>
        <span className="flex-1">
          <h3>Tech Stack Journey</h3>
          <div className="flex flex-col space-y-6">
            <StackJourney />
            <StackJourney />
            <StackJourney />
            <StackJourney />
          </div>
        </span>
      </div>
    </section>
  );
};

export default About;
