import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const LoginModal = ({ isOpen, onSignUpClick, onClose, handleSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ email, password });
    onClose();
  };

  return (
    <ModalWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="email-login">
        Email
        <input
          type="email"
          className="modal__input"
          id="email-login"
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
          id="password-login"
          placeholder="Enter password"
          value={password}
          required
          onChange={handlePasswordChange}
        />
      </label>
      <div className="modal__button-div">
        <button
          type="submit"
          className="modal__button-login modal__button-submit"
        >
          Sign in
        </button>
        <div className="modal__botttom-button-div">
          <span className="modal__or-text">or</span>
          <button
            type="button"
            className="modal__button-register modal__button-btm"
            onClick={onSignUpClick}
          >
            Sign up
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
