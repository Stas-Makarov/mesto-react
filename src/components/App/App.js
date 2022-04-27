import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import EditAvatartPopup from '../EditAvatarPopup/EditAvatarPopup.js';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import AddCardPopup from '../AddCardPopup/AddCardPopup.js';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  
  function handleEditAvatarClick() { 
    setIsEditAvatarPopupOpen(true); 
  } 

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true); 
  } 

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function closePopups() {   
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    //setSelectedCard(null);
}

  return (
    <div className='page'>
        <Header />
        <Main 
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddCard={handleAddCardClick}
        />
        <Footer />
        <EditAvatartPopup 
              isOpen={isEditAvatarPopupOpen} 
              //onUpdateAvatar={handleUpdateAvatar} 
              onClose={closePopups} 
        /> 
        <EditProfilePopup 
              isOpen={isEditProfilePopupOpen} 
              //onUpdateUser={handleUpdateUser} 
              onClose={closePopups}
        />
        <AddCardPopup 
              isOpen={isAddCardPopupOpen} 
              //onAddCard={handleAddPlaceSubmit} 
              onClose={closePopups}
        />
        
    </div>    
  );
}

export default App;
