import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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

function App() {
  const [newsArticles, setnewsArticles] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isSavedNewsPage = location.pathname === "/saved-news";

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
        {/* <Header onSignInClick={handleLoginModal} /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  onSignInClick={handleLoginModal}
                  isLoggedIn={isLoggedIn}
                />
                <Main newsArticles={newsArticles} isLoading={isLoading} />
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
        />
        <RegisterModal
          isOpen={activeModal === "register"}
          onSignInClick={handleLoginModal}
          onClose={closeActiveModal}
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
