import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";

const SavedNewsHeader = ({
  isLoggedIn,
  currentUser,
  savedArticles = [],
  handleLogout,
}) => {
  const keywords = [
    ...new Set(
      (Array.isArray(savedArticles) ? savedArticles : [])?.map(
        (article) => article.keyword
      )
    ),
  ]; // Remove duplicates
  const formattedKeywords =
    keywords.length > 3
      ? `${keywords.slice(0, 3).join(", ")}, and ${keywords.length - 3} others`
      : keywords.join(", ");

  return (
    <header className="header header_type_saved-news">
      <Navigation
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <div className="header__saved-news-container">
        <p className="header__saved-news-topline">Saved articles</p>
        <h1 className="header__saved-news-title">
          {currentUser?.name || "User"}, you have {savedArticles.length} saved
          articles
        </h1>
        <p className="header__saved-news-keywords">
          By keywords:{" "}
          <span className="header__saved-news-keywords-bold">
            {formattedKeywords}
          </span>
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
