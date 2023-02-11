function ImagePopup({ card, onClose, onOverlay }) {
  return (
    <section
      className={`popup popup_type_photo ${card ? 'popup_opened' : ''}`}
      aria-label="popup"
      onClick={onOverlay}>
      <div className="popup__container popup__container_photo">
        <button
          aria-label="closeButton"
          type="button"
          className="popup__button popup__button_close button"
          onClick={onClose} />
        <figure className="popup__figure">
          <img
            src={card ? card.link : ''}
            alt={card ? card.name : ''}
            className="popup__image" />
          <figcaption className="popup__caption">{card ? card.name : ''}</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default ImagePopup
