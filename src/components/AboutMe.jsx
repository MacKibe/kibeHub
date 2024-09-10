import me from "../../public/me.jpg";

const AboutMe = () => {
  return (
    <section className="about_me">
      <header>
        <h2 id="about_me">About Me</h2>
      </header>
      <article className="details">
        <div className="about-me_bio">
          <p>
            My journey into tech began with a <strong>curiosity</strong> for web development, and now I build software for clients across various industries. I thrive where{" "}
            <strong>design and engineering</strong> meet, merging <strong>creativity with functionality</strong> to deliver exceptional products.
          </p>
          <p>
            I enjoy designing and developing <strong>clean, responsive, and engaging user experiences</strong>. My approach is driven by the latest technologies and best practices, ensuring
            each project is both <strong>visually appealing and robust</strong>.
          </p>
          <p>
            With a <strong>strong foundation</strong> in JavaScript and an eye for detail, I build software that’s not just <strong>good-looking</strong> but also <strong>powerful</strong>. I prioritize <strong>performance, scalability, and maintainability</strong>.
          </p>
          <p>
            When I’m not coding, you’ll find me exploring new anime series, playing chess, or participating in community initiatives to make a positive impact.
          </p>
          <p>
            <strong>Let’s connect and bring your ideas to life with code!</strong>
          </p>
        </div>
        <div className="image_container">
          <img 
            className="about_me-image" 
            src={me} 
            alt="An image of myself" 
            loading="lazy" 
          />
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
