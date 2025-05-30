import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const LoginModal = ({ isOpen, onSignUpClick, onClose, handleSignIn }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  // const handleEmailChange = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  // };

  // useEffect(() => {
  //   if (isOpen) {
  //     setEmail("");
  //     setPassword("");
  //   }
  // }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ email: values.email, password: values.password })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
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
          minLength="5"
          maxLength="50"
          className="modal__input"
          id="email-login"
          name="email"
          placeholder="Enter email"
          value={values.email || ""}
          required
          onChange={handleChange}
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password-login"
          name="password"
          minLength="8"
          maxLength="30"
          placeholder="Enter password"
          value={values.password || ""}
          required
          onChange={handleChange}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <div className="modal__button-div">
        <button
          type="submit"
          className="modal__button-login modal__button-submit"
          disabled={!isValid}
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
