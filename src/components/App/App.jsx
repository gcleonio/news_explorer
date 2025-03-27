import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [newsArticles, setnewsArticles] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");

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
      </div>
    </div>
  );
}

export default App;
