import "./ModalWithForm.css";

function ModalWithForm({ buttonText, children, title, isOpen }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" />
        <form action="" className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
