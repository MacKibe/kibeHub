import "./PortfolioFooterSection.css";
// import DarkGithubLogo from "../assets/github-mark"
// import GithubLogo from "../assets/github-mark-white"
const PortfolioFooterSection = () => {
  const socials = [
    {
      // image:{GithubLogo}
      name: "Ndichu James Github Accout",
      url: "https://github.com/MacKibe",
    },
  ];
  return (
    <>
      <div className="footer">
        <h3>Let's Connect</h3>
        <dir>
          name:{socials.name}
          <a href={socials.url}>as</a>
        </dir>
      </div>
    </>
  );
};
export default PortfolioFooterSection;
