import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-background-2 px-30 py-4 sticky top-0 text-lg">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
