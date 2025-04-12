import NewsCard from "../NewsCard/NewsCard";
import "./SavedNewsMain.css";

const SavedNewsMain = ({
  articlesToShow,
  newsArticleResults,
  savedArticles,
  handleSaveArticle,
}) => {
  const handleRemoveArticle = (_id) => {
    const updatedArticles = savedArticles.filter(
      (article) => article._id !== _id
    );
    handleSaveArticle({
      _id,
      isSaved: false,
      article: updatedArticles,
    });
  };

  return (
    <main className="saved-main">
      <NewsCard
        articlesToShow={articlesToShow}
        newsArticleResults={newsArticleResults}
        handleSaveArticle={handleSaveArticle}
        handleRemoveArticle={handleRemoveArticle}
      />
    </main>
  );
};

export default SavedNewsMain;
