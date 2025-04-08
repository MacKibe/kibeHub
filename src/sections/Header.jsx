import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    // Ensures the state is toggled correctly.
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="flex justify-between items-center bg-background-2 px-30 py-4 sticky top-0 text-lg">
      <Logo />
      <Navbar direction="row" />
      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? (
            <MdClose style={{ color: "var(--text)" }} size={40} />
          ) : (
            <GiHamburgerMenu style={{ color: "var(--text)" }} size={40} />
          )}
      </button>
    </header>
  );
};

export default Header;
