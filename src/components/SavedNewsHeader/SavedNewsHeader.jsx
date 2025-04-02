import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";

const SavedNewsHeader = ({ isLoggedIn }) => {
  return (
    <header className="header header_type_saved-news">
      <Navigation isLoggedIn={isLoggedIn} />
      <div className="header__saved-news-container">
        <p className="header__saved-news-topline">Saved articles</p>
        <h1 className="header__saved-news-title">
          Elise, you have 5 saved articles
        </h1>
        <p className="header__saved-news-keywords">
          By keywords: Nature, Yellowstone, and 2 other
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
