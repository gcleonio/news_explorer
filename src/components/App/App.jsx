import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [newsArticles, setnewsArticles] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main newsArticles={newsArticles} isLoading={isLoading} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
