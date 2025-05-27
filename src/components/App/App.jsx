import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [articlesToShow, setArticlesToShow] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [newsArticleResults, setNewsArticleResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Current User:", currentUser);
  }, [currentUser]);

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

  const handleSignUp = async (email, password, username) => {
    try {
      return await signUp(email, password, username);
    } catch (err) {
      console.error(err);
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("token");
    setSavedArticles([]);
    navigate("/");
  };

  const handleCheckToken = async () => {
    console.log("handleCheckToken called");
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await checkToken(token);
      console.log("checkToken response:", response);
      if (response) {
        setIsLoggedIn(true);
        const { name, email, _id } = response;
        setCurrentUser({ name, email, _id });
        fetchArticles();
      }
    } catch (err) {
      console.error("Error checking token:", err);
    }
  };

  const fetchArticles = async () => {
    const articles = await getArticles();
    setSavedArticles(Array.isArray(articles) ? articles : [articles]);
  };

  const handleSaveArticle = async (article) => {
    try {
      const updatedArticles = await saveArticles({
        article,
        savedArticles,
      });

      setSavedArticles(
        Array.isArray(updatedArticles) ? updatedArticles : [updatedArticles]
      );
      localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
    } catch (err) {
      console.error("Error saving article:", err);
    }
  };

  const handleSearch = async (keyword) => {
    setIsLoading(true);
    setError(null);

    try {
      const articleData = await getNews(keyword);
      console.log("Article Data:", articleData);

      const processedArticles = (articleData || []).map((article) => ({
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

  const handleRegisterSuccessModal = () => {
    setActiveModal("register-success");
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

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(Array.isArray(saved) ? saved : [saved]);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      handleCheckToken();
    } else {
      setIsLoggedIn(false);
      setCurrentUser(null);
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}
    >
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
                    currentUser={currentUser}
                    handleLogout={handleLogout}
                  />
                  <Main
                    articlesToShow={articlesToShow}
                    isLoading={isLoading}
                    handleShowMore={handleShowMore}
                    newsArticleResults={newsArticleResults}
                    hasSearched={hasSearched}
                    error={error}
                    handleSaveArticle={handleSaveArticle}
                    isLoggedIn={isLoggedIn}
                    handleRegisterModal={handleRegisterModal}
                  />
                </>
              }
            ></Route>
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute>
                  <>
                    <SavedNewsHeader
                      isLoggedIn={isLoggedIn}
                      savedArticles={savedArticles}
                      currentUser={currentUser}
                      handleLogout={handleLogout}
                    />
                    <SavedNewsMain
                      articlesToShow={articlesToShow}
                      newsArticleResults={newsArticleResults}
                      savedArticles={savedArticles}
                      handleSaveArticle={handleSaveArticle}
                      isLoggedIn={isLoggedIn}
                    />
                  </>
                </ProtectedRoute>
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
            handleRegisterSuccessModal={handleRegisterSuccessModal}
          />
          <RegisterSuccessModal
            isOpen={activeModal === "register-success"}
            onClose={closeActiveModal}
            onSignInClick={handleLoginModal}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
