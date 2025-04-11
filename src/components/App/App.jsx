import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsMain from "../SavedNewsMain/SavedNewsMain";
import { signUp, signIn, checkToken } from "../../utils/auth";
import { getArticles, saveArticles } from "../../utils/api";
import { getNews } from "../../utils/newsApi";

function App() {
  const [articlesToShow, setArticlesToShow] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [newsArticleResults, setNewsArticleResults] = useState([]);
  // const [visibleArticles, setVisibleArticles] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);

  const handleSignIn = async (email, password) => {
    try {
      const response = await signIn(email, password);
      if (response.token) {
        localStorage.setItem("token", response.token);
        handleCheckToken();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignUp = async (email, password, name) => {
    try {
      return await signUp(email, password, name);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("token");
    setSavedArticles([]);
  };

  const handleCheckToken = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await checkToken(token);
      if (response.data) {
        setIsLoggedIn(true);
        const { name, email, _id } = response.data;
        setCurrentUser({ name, email, _id });
        fetchArticles();
      }
    } catch (err) {
      console.error("Error checking token:", err);
    }
  };

  const fetchArticles = async () => {
    const articles = await getArticles();
    setSavedArticles(articles);
  };

  const handleSaveArticle = async ({ _id, isSaved, article }) => {
    try {
      const updatedArticles = await saveArticles({
        _id,
        isSaved,
        article,
        savedArticles,
      });

      setSavedArticles(updatedArticles);
    } catch (err) {
      console.error("Error saving article:", err);
    }
  };

  // Need to fix where the articles are being fetched from. And initially show no cards

  const handleSearch = async (keyword) => {
    setIsLoading(true);
    setError(null);

    try {
      const articleData = await getNews(keyword);

      const processedArticles = articleData.map((article) => ({
        _id: crypto.randomUUID(),
        isSaved: false,
        ...article,
        keyword,
      }));

      if (!hasSearched) {
        setHasSearched(true);
      }

      setNewsArticleResults(processedArticles);
      setArticlesToShow(3);
    } catch (err) {
      setError("An error occured during the response");
      console.error("Error fetching articles:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = () => {
    setArticlesToShow((prev) => prev + 3);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  onSignInClick={handleLoginModal}
                  isLoggedIn={isLoggedIn}
                  handleSearch={handleSearch}
                />
                <Main
                  articlesToShow={articlesToShow}
                  isLoading={isLoading}
                  handleShowMore={handleShowMore}
                  newsArticleResults={newsArticleResults}
                  hasSearched={hasSearched}
                  error={error}
                />
              </>
            }
          ></Route>
          <Route
            path="/saved-news"
            element={
              <>
                <SavedNewsHeader isLoggedIn={isLoggedIn} />
                <SavedNewsMain />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
        <LoginModal
          isOpen={activeModal === "login"}
          onSignUpClick={handleRegisterModal}
          onClose={closeActiveModal}
          handleSignIn={handleSignIn}
        />
        <RegisterModal
          isOpen={activeModal === "register"}
          onSignInClick={handleLoginModal}
          onClose={closeActiveModal}
          handleSignUp={handleSignUp}
        />
        <RegisterSuccessModal
          isOpen={activeModal === "register-success"}
          onClose={closeActiveModal}
        />
      </div>
    </div>
  );
}

export default App;
