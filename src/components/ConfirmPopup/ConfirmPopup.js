import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function ConfirmPopup(props){
    
    return (
        <PopupWithForm 
            title="Вы уверены?" 
            name="confirm-popup" 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            buttonText="Да">

        </PopupWithForm>
    );
}

export default ConfirmPopup;