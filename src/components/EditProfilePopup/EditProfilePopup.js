import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function EditProfilePopup(props){
    

    // React.useEffect(()=>{
    //     setName(currentUser.name);
    //     setDescription(currentUser.about);
    //     },[currentUser, props.isOpen]
    // );

    // const [name, setName] = React.useState('');
    // const [description, setDescription] = React.useState('');

    // function handleChangeName(e){setName(e.target.value)};
    // function handleChangeDescription(e){setDescription(e.target.value)};

    // function handleSubmit(e){
    //     // Запрещаем браузеру переходить по адресу формы
    //     e.preventDefault();

    //     // Передаём значения управляемых компонентов во внешний обработчик
    //     props.onUpdateUser({
    //         name,
    //         about: description,
    //     });
    // }

    return (
        <PopupWithForm 
            title="Редактировать профиль"
            name="edit-profile" 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            //onSubmit={handleSubmit}
            buttonText="Сохранить">
            
            <input className="popup__form-item popup__form-item_type_person-name" type="text" name="name" minLength="2" maxLength="40" required />
            <span className="popup__form-item-error popup__form-item-error_type_name"></span>     
            <input className="popup__form-item popup__form-item_type_job" type="text" name="about" minLength="2" maxLength="200" required />
            <span className="popup__form-item-error popup__form-item-error_type_about"></span>            
        </PopupWithForm>

    );
} 


export default EditProfilePopup;