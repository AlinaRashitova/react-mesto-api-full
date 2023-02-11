import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onOverlayClose, onUpdateAvatar, isLoading }) {
  const editAvatarRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: editAvatarRef.current.value,
    })
  }

  return (
    <PopupWithForm
      name={'avatar'}
      title={'Обновить аватар'}
      button={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlayClose}
      onSubmit={handleSubmit}>
      <label className="popup__label">
        <input
          ref={editAvatarRef}
          type="url"
          name="link"
          id="avatarSourceInput"
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_type_avatar-source"
          required />
        <span id="avatarSourceInput-error" className="error" />
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;

