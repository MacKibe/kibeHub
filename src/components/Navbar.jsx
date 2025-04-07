const Navbar = ({ direction = "row" }) => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#About" },
    { name: "Experience", href: "#Experience" },
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
    { name: "Contact", href: "#Contact" },
  ];
  return (
    // Display the links
    <ul className={`flex ${ direction === "row" ? "flex-row space-x-6" : "flex-col space-y-3"}`} >
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
