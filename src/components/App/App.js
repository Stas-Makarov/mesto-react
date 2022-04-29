import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import EditAvatartPopup from '../EditAvatarPopup/EditAvatarPopup.js';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import AddCardPopup from '../AddCardPopup/AddCardPopup.js';
import ImagePopup from '../ImagePopup/imagePopup.js';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup.js';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [deletedCard, setDeletedCard] = React.useState({});
  
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

  function handleDeleteCardClick(card) {
    setConfirmPopupOpen(true);
    setDeletedCard(card);
  }

  function closePopups() {   
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setImagePopupOpen(false);
    setConfirmPopupOpen(false);
}

  return (
    <div className='page'>
        <Header />
        <Main 
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddCard={handleAddCardClick}
            onCardClick={handleCardImageClick}
            onDeleteButtonClick={handleDeleteCardClick}
        />
        <Footer />
        <EditAvatartPopup 
              isOpen={isEditAvatarPopupOpen} 
              onClose={closePopups} 
        /> 
        <EditProfilePopup 
              isOpen={isEditProfilePopupOpen} 
              onClose={closePopups}
        />
        <AddCardPopup 
              isOpen={isAddCardPopupOpen} 
              onClose={closePopups}
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
    </div>    
  );
}

export default App;
