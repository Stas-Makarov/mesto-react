import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function EditProfilePopup(props){
    
    return (
        <PopupWithForm 
            title="Редактировать профиль"
            name="edit-profile" 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            buttonText="Сохранить">

            <input className="popup__form-item popup__form-item_type_person-name" type="text" name="name" minLength="2" maxLength="40" placeholder="Имя" required />
            <span className="popup__form-item-error popup__form-item-error_type_name"></span>     
            <input className="popup__form-item popup__form-item_type_job" type="text" name="about" minLength="2" maxLength="200" placeholder="О себе" required />
            <span className="popup__form-item-error popup__form-item-error_type_about"></span>            
        </PopupWithForm>

    );
} 


export default EditProfilePopup;