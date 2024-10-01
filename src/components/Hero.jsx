const Hero = () => {
  //
  // Get the totalnumber of years i have learnt javascript
  const totalYearsCount = () => {
    //
    // Current date
    const date = new Date();
    //
    // Get the year
    const currentYear = date.getFullYear();
    //
    // Starting date
    const startDate = 2023;
    //
    // Get the differences
    const yearCount = currentYear - startDate;

    return yearCount;
  };
  //
  // Get the number of years
  const yearCount = totalYearsCount();
  return (
    <section className="hero_section">
      <h4>Hi, my name is </h4>
      <h2>Ndichu James.</h2>
      <h2>
        I build <strong>pixel-perfect</strong>, <strong>engaging</strong>, and{" "}
        <strong>accessible</strong> digital experiences.
      </h2>
      <p>
        A passionate JavaScript Software Engineer with +{yearCount} year of
        experience building web and cross-platform mobile applications. I
        specialize in creating <strong>scalable</strong> and{" "}
        <strong>efficient</strong> solutions with a focus on{" "}
        <strong>user-friendly interfaces</strong>.
      </p>
    </section>
  );
};

export default Hero;
