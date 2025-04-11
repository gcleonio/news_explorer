import NewsCard from "../NewsCard/NewsCard";
import "./SavedNewsMain.css";

const SavedNewsMain = ({ articlesToShow, newsArticleResults }) => {
  return (
    <main className="saved-main">
      <NewsCard
        articlesToShow={articlesToShow}
        newsArticleResults={newsArticleResults}
      />
    </main>
  );
};

export default SavedNewsMain;
