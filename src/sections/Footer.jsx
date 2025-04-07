import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
const Footer = () => {
  return (
    <footer className="bg-background-2 px-16 py-8">
      <section className="flex justify-evenly py-4 items-center">
        <div className="flex-1">
          <div className="w-[50%]"><Logo />
          <p>
            A passionate software developer with a knack for building functional
            and user-friendly web applications.
          </p></div>
        </div>
        <div className="flex justify-evenly flex-1">
          <div>
            <h2>Quick Links</h2>
            <Navbar direction="col"/>
          </div>
          <div>
            <h2>Connect.</h2>
            <ul>
              <li>Linked</li>
              <li>Github</li>
              <li>Email</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <p className="text-center py-8">
          © 2025 Ndichu James Kiberenge. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
