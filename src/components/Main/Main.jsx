import "../Main/Main.css";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

const Main = ({ newsArticles, isLoading }) => {
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
      <NewsCard />
      <button className="main__more-button">Show more</button>
      <About />
    </main>
  );
};

export default Main;
