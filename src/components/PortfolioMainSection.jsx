import DevDiaries from "./DevDiaries";
import CreativeGallery from "./CreativeGallery";
import PortfolioImage from "./PortfolioImage";
import "./PortfolioMainSection.css"
const PortfolioMainSection = () => {
  return (
    <div className="PortfolioMainSection">
      <DevDiaries />
      <PortfolioImage />
      <CreativeGallery />
    </div>
  );
};
export default PortfolioMainSection;
