import "./ModalWithForm.css";

function ModalWithForm({ children, title, isOpen, onClose, onSubmit }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen && "modal_opened"}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" onClick={onClose} />
        <form action="" className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
