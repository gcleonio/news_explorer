import { articles } from "../../utils/constants";
import "./NewsCard.css";
import defaultImage from "../../assets/default-image.png";

const NewsCard = () => {
  return (
    <ul className="main__news-card-list">
      {articles.map((article, index) => (
        <li className="card" key={index}>
          <img
            src={article.urlToImage || defaultImage}
            alt="card image"
            className="card__image"
            onError={(e) => {
              e.target.onerror = null; // prevents looping
              e.target.src = defaultImage; // fallback to default image
            }}
          />
          <button type="button" className="card__button"></button>
          <div className="card__content">
            <p className="card__pub-date">{article.publishedAt}</p>
            <h3 className="card__title">{article.title}</h3>
            <p className="card__description">{article.description}</p>
            <p className="card__source">{article.source.name}</p>
          </div>
        </li>
      ))}
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
