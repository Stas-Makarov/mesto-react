import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import EditAvatartPopup from '../EditAvatarPopup/EditAvatarPopup.js';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import AddCardPopup from '../AddCardPopup/AddCardPopup.js';
import ImagePopup from '../ImagePopup/imagePopup.js';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup.js';
import CurrentUserContext from './../../contexts/CurrentUserContext.js';
import { api } from '../../utils/Api.js';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [deletedCard, setDeletedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
    avatar: ''
  });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  
  useEffect(() => {
    api.getInitialCards()
      .then(cardsData => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function handleCardLike(card) {
    
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateUser(userData) {
    api.updateUserInfo(userData)
      .then(userData => {
        setCurrentUser(userData);
        closePopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateAvatar(data) {
    api.editAvatar(data)
      .then(data => {
        setCurrentUser(data);
        closePopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleAddCardSubmit(cardData) {
    api.addNewCard(cardData)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closePopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }



  
  function handleEditAvatarClick() { 
    setIsEditAvatarPopupOpen(true); 
  } 

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true); 
  } 

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleCardImageClick(card) {
    setImagePopupOpen(true);
    setSelectedCard(card);
  }

  // function handleDeleteCardClick(card) {
  //   setConfirmPopupOpen(true);
  //   setDeletedCard(card);
  // }

  function closePopups() {   
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setImagePopupOpen(false);
    setConfirmPopupOpen(false);
}

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddCard={handleAddCardClick}
            onCardClick={handleCardImageClick}
            // onDeleteButtonClick={handleDeleteCardClick}
            cards={cards}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
        />
        <Footer />
        <EditAvatartPopup 
              isOpen={isEditAvatarPopupOpen} 
              onClose={closePopups} 
              onUpdateAvatar={handleUpdateAvatar}
        /> 
        <EditProfilePopup 
              isOpen={isEditProfilePopupOpen} 
              onClose={closePopups}
              onUpdateUser={handleUpdateUser}
        />
        <AddCardPopup 
              isOpen={isAddCardPopupOpen} 
              onClose={closePopups}
              onAddCard={handleAddCardSubmit}
        />
        <ImagePopup
              isOpen={isImagePopupOpen} 
              card={selectedCard}
              onClose={closePopups}
        />
        <ConfirmPopup
              isOpen={isConfirmPopupOpen}
              card={deletedCard}
              onClose={closePopups}
        />
      </CurrentUserContext.Provider>
    </div>    
  );
}

export default App;
