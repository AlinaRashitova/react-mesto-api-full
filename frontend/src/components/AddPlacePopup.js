
import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup({ isLoading, isOpen, onClose, onOverlayClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: name,
      link: link
    })
  }

  useEffect(() => {
    if (isOpen) {
      setName('');
      setLink('');
    }
  }, [isOpen]);


  return (
    <PopupWithForm
      name={'add'}
      title={'Новое место'}
      button={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlayClose}
      onSubmit={handleSubmit}>
      <label className="popup__label">
        <input
          type="text"
          name="name"
          value={name}
          onChange={evt => setName(evt.target.value)}
          id="placeNameInput"
          placeholder="Название"
          className="popup__input popup__input_type_place-name"
          required
          minLength="2"
          maxLength="30" />
        <span id="placeNameInput-error" className="error" />
      </label>
      <label className="popup__label">
        <input
          type="url"
          name="link"
          value={link}
          onChange={evt => setLink(evt.target.value)}
          id="imageSourceInput"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_image-source"
          required />
        <span id="imageSourceInput-error" className="error" />
      </label>
    </PopupWithForm>
  )
}
export default AddPlacePopup;

