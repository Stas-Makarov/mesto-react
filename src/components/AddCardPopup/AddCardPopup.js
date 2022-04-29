import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function AddCardPopup(props){
    
    return (
        <PopupWithForm 
            title="Новое место" 
            name="add-card" 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            buttonText="Сохранить">
            
            <input className="popup__form-item popup__form-item_type_place-name" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__form-item-error popup__form-item-error_type_name"></span>
            <input className="popup__form-item popup__form-item_type_link" type="url" name="link" placeholder="Ссылка на страницу" required />
            <span className="popup__form-item-error popup__form-item-error_type_link"></span>

        </PopupWithForm>
    );
}

export default AddCardPopup;