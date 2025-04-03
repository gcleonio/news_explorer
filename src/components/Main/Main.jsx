import "../Main/Main.css";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

import { articles } from "../../utils/constants";

const Main = ({ articlesToShow, handleShowMore, isLoading }) => {
  return (
    <main className="main">
      {/* Preloader will go here */}
      <Preloader />
      <h3 className="main__header">Search results</h3>
      {/* <ul className="main__news-card-list">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul> */}
      <NewsCard articlesToShow={articlesToShow} articles={articles} />
      {articlesToShow < articles.length && (
        <button className="main__more-button" onClick={handleShowMore}>
          Show more
        </button>
      )}
      <About />
    </main>
  );
};

export default Main;
