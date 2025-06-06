import "../Main/Main.css";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import notFoundImage from "../../assets/not-found.png";

const Main = ({
  articlesToShow,
  handleShowMore,
  isLoading,
  newsArticleResults,
  hasSearched,
  error,
  handleSaveArticle,
  isLoggedIn,
  handleRegisterModal,
  handleRemoveArticle,
  savedArticles = [],
}) => {
  return (
    <main className={`${hasSearched ? "main" : ""}`}>
      {isLoading && <Preloader />}
      {hasSearched && newsArticleResults.length === 0 && error === null && (
        <div className="main__noresult">
          <img
            src={notFoundImage}
            alt="Nothing found"
            classsName="main__noresult-image"
          />
          <h2 className="main__noresult-heading">Nothing found</h2>
          <p className="main__noresult-text">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      )}
      {hasSearched && error && (
        <div className="main__response-error">
          <img
            src={notFoundImage}
            className="main__response-error-image"
            alt="response error image"
          />
          <h2 className="main__response-error-heading">
            Sorry, something when wrong during the request.
          </h2>
          <p className="main__response-error-text">Please try again later.</p>
        </div>
      )}
      {newsArticleResults.length > 0 && (
        <h3 className="main__header">Search results</h3>
      )}
      <NewsCard
        articlesToShow={articlesToShow}
        newsArticleResults={newsArticleResults}
        handleSaveArticle={handleSaveArticle}
        isLoggedIn={isLoggedIn}
        handleRegisterModal={handleRegisterModal}
        handleRemoveArticle={handleRemoveArticle}
        savedArticles={savedArticles}
      />
      {articlesToShow < newsArticleResults.length && (
        <button className="main__more-button" onClick={handleShowMore}>
          Show more
        </button>
      )}
      <About />
    </main>
  );
};

export default Main;
