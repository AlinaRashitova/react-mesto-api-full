function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={props.onOverlay}
      aria-label="popup">
      <div className="popup__container">
        <button
          aria-label="closeButton"
          type="button"
          className="popup__button popup__button_close button"
          onClick={props.onClose} />
        <div className="popup__content">
          <h2 className="popup__title">{props.title}</h2>
          <form
            onSubmit={props.onSubmit}
            name={`${props.name}-form`}
            className={`popup__form popup__form_type_${props.name}`}
            noValidate>
            {props.children}
            <button
              aria-label="saveButton"
              type="submit"
              className="popup__button popup__button_save">{props.button}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopupWithForm
