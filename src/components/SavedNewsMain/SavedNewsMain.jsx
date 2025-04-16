import NewsCard from "../NewsCard/NewsCard";
import "./SavedNewsMain.css";
import { useLocation } from "react-router-dom";

const SavedNewsMain = ({
  articlesToShow,
  newsArticleResults,
  savedArticles = [],
  handleSaveArticle,
  isLoggedIn,
}) => {
  const handleRemoveArticle = (_id) => {
    if (!_id) {
      console.error("Error: _id is undefined or null");
      return;
    }

    console.log("Removing article with _id:", _id);

    handleSaveArticle({
      _id,
      isSaved: false,
    });
  };

  console.log("SavedArticles:", savedArticles);

  return (
    <main className="saved-main">
      <NewsCard
        articlesToShow={articlesToShow}
        newsArticleResults={newsArticleResults}
        handleSaveArticle={handleSaveArticle}
        handleRemoveArticle={handleRemoveArticle}
        isLoggedIn={isLoggedIn}
        savedArticles={savedArticles}
      />
    </main>
  );
};

export default SavedNewsMain;
