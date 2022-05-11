import React from 'react';
import { useRef } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';


function EditAvatartPopup(props){

    const ref = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({avatar: ref.current.value});
      }

    return (            
        <PopupWithForm 
            title="Обновить аватар" 
            name="edit-avatar" 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            onSubmit={handleSubmit}
            buttonText={props.isRenderLoading ? 'Сохранение...' : 'Сохранить'}>
            
            <input className="popup__form-item popup__form-item_type_link" type="url" ref={ref} name="avatar" placeholder="Ссылка на страницу" required />
            <span className="popup__form-item-error popup__form-item-error_type_avatar"></span>
        
        </PopupWithForm>
    )

}

export default EditAvatartPopup;