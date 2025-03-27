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
  const [activeModal, setActiveModal] = useState("register-success");

  const closeActiveModal = () => {
    setActiveModal("");

    const handleLoginModal = () => {
      setActiveModal("login");
    };
  };

  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main newsArticles={newsArticles} isLoading={isLoading} />
        <Footer />
        <LoginModal isOpen={activeModal === "login"} />
        <RegisterModal isOpen={activeModal === "register"} />
        <RegisterSuccessModal isOpen={activeModal === "register-success"} />
      </div>
    </div>
  );
}

export default App;
