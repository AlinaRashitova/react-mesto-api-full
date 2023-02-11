import React, { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardDelete, onCardLike, cards }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile" aria-label="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img
            src={currentUser ? currentUser.avatar : ''}
            alt="Аватар"
            className="profile__avatar-image" />
        </div>
        <div className="profile__info">
          <div className="profile__info-edit">
            <h1 className="profile__title">{currentUser ? currentUser.name : ''}</h1>
            <button
              onClick={onEditProfile}
              aria-label="editButton"
              type="button"
              className="profile__button profile__button_edit button" />
          </div>
          <p className="profile__subtitle">{currentUser ? currentUser.about : ''}</p>
        </div>
        <button
          onClick={onAddPlace}
          aria-label="addButton"
          type="button"
          className="profile__button profile__button_add button" />
      </section>
      <section className="cards" aria-label="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete} />
        ))}
      </section>
    </main>
  )
}

export default Main
