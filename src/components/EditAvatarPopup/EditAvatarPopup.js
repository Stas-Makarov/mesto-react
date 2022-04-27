import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';


function EditAvatartPopup(props){
//const avavtarUrl = React.useRef();

    // function handleSubmit(evt) {
    //     evt.preventDefault();
    //     props.onUpdateAvatar(avavtarUrl.current.value);
    // } 

    // React.useEffect(
    //     ()=>{
    //         avavtarUrl.current.value='';
    //     },[props.isOpen]
    // );

    return (            
        <PopupWithForm 
            title="Обновить аватар" 
            name="edit-avatar" 
            isOpen={props.isOpen} 
            //onSubmit={handleSubmit}
            onClose={props.onClose} 
            buttonText="Сохранить">
            
            <input className="popup__form-item popup__form-item_type_link" type="url" name="avatar" placeholder="Ссылка на страницу" required />
            <span className="popup__form-item-error popup__form-item-error_type_avatar"></span>
        
        </PopupWithForm>
    )

}

export default EditAvatartPopup;