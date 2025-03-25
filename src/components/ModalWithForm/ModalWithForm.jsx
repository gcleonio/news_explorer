import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">Sign in</h2>
        <button type="button" className="modal__close" />
        <form action="" className="modal__form">
          {/* Make the button optional by checking if buttonText exists before rendering it. This way, if buttonText is not provided, the button inside ModalWithForm won't render */}

          <button type="submit" className="modal__submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
