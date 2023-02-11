export const popupFormAdd = document.querySelector('.popup__form_type_add');
export const popupFormEdit = document.querySelector('.popup__form_type_edit');
export const popupFormAvatar = document.querySelector('.popup__form_type_avatar');
export const nameInput = popupFormEdit.querySelector('.popup__input_type_name');
export const jobInput = popupFormEdit.querySelector('.popup__input_type_job');
export const buttonEdit = document.querySelector('.profile__button_edit');
export const buttonAdd = document.querySelector('.profile__button_add');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileAvatarImage = document.querySelector('.profile__avatar-image');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'error_visible'
}
