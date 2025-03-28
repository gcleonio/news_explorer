import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({ isOpen, onSignInClick, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign up"
      // buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
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
