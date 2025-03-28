import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";

function App() {
  const [newsArticles, setnewsArticles] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");

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
        <Header onSignInClick={handleLoginModal} />
        <Main newsArticles={newsArticles} isLoading={isLoading} />
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
