import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import { useEffect, useState } from "react";
const Body = () => {
  const [activeHeader, setActiveHeader] = useState("");

  useEffect(() => {
    const headers = document.querySelectorAll("h2");
    console.log(headers);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeader(entry.target.innerText);
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold based on when you want to switch headers
    );

    headers.forEach((header) => observer.observe(header));

    return () => {
      headers.forEach((header) => observer.unobserve(header));
    };
  }, []);
  return (
    <div className="body-section">
      <div className="sticky-header">{activeHeader}</div>
      <h2>ABOUT.</h2>
      <div className="body-bio-section">
        <p>
          <b>Hey there!</b> I'm Ndichu James Kiberenge, a <em>passionate</em>{" "}
          JavaScript Software Engineer with over +1 year of experience in
          building web and cross-platform mobile applications. I specialize in
          crafting <em>scalable</em> and <em>efficient</em> solutions with a
          focus on <em>user-friendly interfaces</em>.
        </p>
        <p>
          <b>Design:</b> I love designing and developing{" "}
          <em>clean, responsive, and engaging user experiences</em>. My work is
          driven by the latest technologies and best practices, ensuring that
          every project I take on is both <em>visually appealing and robust</em>
          .
        </p>
        <p>
          <b>Engineering:</b> With a <em>strong foundation</em> in JavaScript
          and an eye for detail, I build software that’s not just{" "}
          <em>good-looking</em> but also <em>powerful</em> under the hood. I
          prioritize <em>performance, scalability, and maintainability</em>.
        </p>
        <p>
          <b> Journey: </b> My journey into the tech world began with a
          <em>curiosity</em> for creating web applications, and now, I have the
          privilege of building software for a variety of clients across
          industries. I thrive at the intersection of{" "}
          <em>design and engineering</em>, where I can merge{" "}
          <em>creativity with functionality to deliver exceptional products</em>
          .
        </p>
        <p>
          <b>Beyond Code:</b> When I'm not coding, you will find me{" "}
          <em>
            {" "}
            exploring new anime series, honing my skills, playing chess or
            planning & attending community initiatives
          </em>{" "}
          to make a positive impact.
        </p>
        <p>
          <b>Let’s connect and bring your ideas to life with code!</b>
        </p>
      </div>
      <WorkExperience />
      <Projects />
    </div>
  );
};

export default Body;
