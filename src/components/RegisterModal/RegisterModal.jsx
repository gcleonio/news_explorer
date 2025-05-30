import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const RegisterModal = ({
  isOpen,
  onSignInClick,
  onClose,
  handleSignUp,
  handleRegisterSuccessModal,
}) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");

  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // useEffect(() => {
  //   if (isOpen) {
  //     setEmail("");
  //     setPassword("");
  //     setUsername("");
  //   }
  // }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp({
      email: values.email,
      password: values.password,
      name: values.username,
    })
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
          minLength="5"
          maxLength="50"
          className="modal__input"
          id="email-register"
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
          minLength="8"
          maxLength="30"
          className="modal__input"
          id="password-register"
          placeholder="Enter password"
          value={values.password || ""}
          name="password"
          required
          onChange={handleChange}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="username-register"
          placeholder="Enter your username"
          value={values.username || ""}
          name="username"
          minLength="2"
          maxLength="30"
          required
          onChange={handleChange}
        />
        {errors.username && (
          <span className="modal__error">{errors.username}</span>
        )}
      </label>
      <div className="modal__button-div">
        <button
          type="submit"
          className="modal__button-register modal__button-submit"
          disabled={!isValid}
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
