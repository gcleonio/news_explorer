import "./RegisterSuccessModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterSuccessModal = ({ isOpen, onClose, onSignInClick }) => {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}
    >
      <button
        type="button"
        className="modal__button-login modal__button-register-success"
        onClick={onSignInClick}
      >
        Sign in
      </button>
    </ModalWithForm>
  );
};

export default RegisterSuccessModal;
