import StackJourney from "../components/StackJourney";
const Experience = () => {
  return (
    <section>
      <h2>Experience & Education</h2>
      <div className="flex gap-10">
        <div className="flex-1">
          <h3>Work Experience</h3>
          <StackJourney />
          <StackJourney />
          <StackJourney />
          <StackJourney />
        </div>
        <div className="flex-1">
          <h3>Education</h3>
          <StackJourney />
          <StackJourney />
          <StackJourney />
          <StackJourney />
        </div>
      </div>
    </section>
  );
};

export default Experience;