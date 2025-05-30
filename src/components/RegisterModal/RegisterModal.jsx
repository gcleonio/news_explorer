import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({
  isOpen,
  onSignInClick,
  onClose,
  handleSignUp,
  handleRegisterSuccessModal,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp({ email, password, name: username })
      .then(() => {
        onClose();
        handleRegisterSuccessModal();
      })
      .catch((err) => {
        console.error("Registration failed:", err);
      });
  };

  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="email-login">
        Email
        <input
          type="email"
          className="modal__input"
          id="email-register"
          name="email"
          placeholder="Enter email"
          value={email}
          required
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password-register"
          placeholder="Enter password"
          value={password}
          required
          onChange={handlePasswordChange}
        />
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="username-register"
          placeholder="Enter your username"
          value={username}
          required
          onChange={handleUsernameChange}
        />
      </label>
      <div className="modal__button-div">
        <button
          type="submit"
          className="modal__button-register modal__button-submit"
        >
          Sign up
        </button>
        <div className="modal__botttom-button-div">
          <span className="modal__or-text">or</span>
          <button
            type="button"
            className="modal__button-login modal__button-btm"
            onClick={onSignInClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
