import "./Preloader.css";
import notFoundImage from "../../assets/not-found.png";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="circle-preloader"></div>
      <p className="preloader__text">Searching for news...</p>
      <div className="preloader__noresult">
        <img
          src={notFoundImage}
          alt="Nothing found"
          classsName="preloader__noresult-image"
        />
        <h2 className="preloader__noresult-heading">Nothing found</h2>
        <p className="preloader__noresult-text">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </div>
  );
};

export default Preloader;
