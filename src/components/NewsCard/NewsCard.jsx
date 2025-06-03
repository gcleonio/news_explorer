// import { articles } from "../../utils/constants";
import "./NewsCard.css";
import defaultImage from "../../assets/default-image.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const NewsCard = ({
  articlesToShow,
  newsArticleResults,
  handleSaveArticle,
  isLoggedIn,
  handleRemoveArticle,
  savedArticles = [],
  handleRegisterModal,
}) => {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";
  const [markedCards, setMarkedCards] = useState({});

  const articlesToRender = Array.isArray(
    isSavedNewsPage
      ? savedArticles
      : newsArticleResults.slice(0, articlesToShow)
  )
    ? isSavedNewsPage
      ? savedArticles
      : newsArticleResults.slice(0, articlesToShow)
    : [];

  const handlePrepareSaveArticle = (article) => {
    if (!isLoggedIn) return;

    const updatedMarked = !markedCards[article._id];
    setMarkedCards((prev) => ({
      ...prev,
      [article._id]: updatedMarked,
    }));

    const updateArticle = {
      _id: article._id,
      isSaved: updatedMarked,
      title: article.title,
      urlToImage: article.urlToImage,
      keyword: article.keyword,
      description: article.description,
      publishedAt: article.publishedAt,
      source: { name: article.source.name },
      url: article.url,
    };

    handleSaveArticle(updateArticle);
  };

  function normalizeArticle(article) {
    return {
      _id: article._id,
      title: article.title,
      description: article.description || article.text || "",
      publishedAt: article.publishedAt || article.date || "",
      urlToImage: article.urlToImage || article.image || defaultImage,
      keyword: article.keyword,
      url: article.url || article.link || "",
      source:
        typeof article.source === "string"
          ? { name: article.source }
          : article.source || { name: "" },
    };
  }

  // console.log("article in NewsCards.jsx", article);
  // const isSaved = savedArticles.some((saved) => saved.link === article.url);
  // const savedArticle = savedArticles.find(
  //   (saved) => saved.link === article.url
  // );

  // const handleIconClick = () => {
  //   if (isSaved && savedArticle) {
  //     handleRemoveArticle(savedArticle._id);
  //   } else {
  //     handlePrepareSaveArticle(normalized);
  //   }
  // };

  return (
    <ul
      className={`card-list ${
        articlesToRender.length === 0 ? "card-list--hidden" : ""
      }`}
    >
      {(Array.isArray(articlesToRender) ? articlesToRender : [])?.map(
        (article, index) => {
          const normalized = normalizeArticle(article);
          const isSaved = savedArticles.some(
            (saved) => saved.link === normalized.url
          );
          const savedArticle = savedArticles.find(
            (saved) => saved.link === normalized.url
          );

          const handleIconClick = () => {
            if (isSaved && savedArticle) {
              handleRemoveArticle(savedArticle._id);
            } else {
              handlePrepareSaveArticle(normalized);
            }
          };

          return (
            <li className="card" key={normalized._id || index}>
              <img
                src={normalized?.urlToImage || defaultImage}
                alt="card image"
                className="card__image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImage;
                }}
              />
              {!isLoggedIn && location.pathname === "/" && (
                <button
                  type="button"
                  className="card__button"
                  onClick={handleRegisterModal}
                >
                  <span className="card__button-hover-text">
                    Sign in to save articles
                  </span>
                </button>
              )}
              {isLoggedIn && location.pathname === "/" && (
                <button
                  type="button"
                  className={
                    markedCards[normalized._id]
                      ? "card__button-marked"
                      : "card__button-loggedin"
                  }
                  // onClick={() => handlePrepareSaveArticle(normalized)}
                  onClick={handleIconClick}
                ></button>
              )}
              {isLoggedIn && location.pathname === "/saved-news" && (
                <>
                  <span className="card__keyword">{normalized.keyword}</span>
                  <button
                    type="button"
                    className="card__button-trash"
                    onClick={() => {
                      console.log("Removing article with _id", normalized?._id);
                      handleRemoveArticle(normalized?._id);
                    }}
                  >
                    <span className="card__button-remove-text">Delete</span>
                  </button>
                </>
              )}
              <div className="card__content">
                <p className="card__pub-date">
                  {new Date(normalized?.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>
                <h3 className="card__title">{normalized?.title}</h3>
                <p className="card__description">{normalized?.description}</p>
                <p className="card__source">{normalized?.source?.name}</p>
              </div>
            </li>
          );
        }
      )}
    </ul>

    // <li className="card">
    //   <img
    //     src="https://pagesix.com/wp-content/uploads/sites/3/2025/03/100585308.jpg?quality=75&strip=all&w=1024"
    //     alt="card image"
    //     className="card__image"
    //   />
    //   <button type="button" className="card__button"></button>
    //   <div className="card__content">
    //     <p className="card__pub-date">2025-03-16T19:09:50Z</p>
    //     <h3 className="card__title">
    //       Grimes says she ‘begged’ Elon Musk to keep their kids offline: Young
    //       people are being ‘destroyed by the internet
    //     </h3>
    //     <p className="card__description">
    //       The Canadian-born singer and the tech billionaire share three kids: X
    //       Æ A-XII, Exa Dark Sideræl and Techno Mechanicus.
    //     </p>
    //     <p className="card__source">Page Six</p>
    //   </div>
    // </li>
  );
};

export default NewsCard;
