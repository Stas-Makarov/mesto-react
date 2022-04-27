import React from 'react';
import Avatar from '../../images/кусто.jpg';
// import Card from './Card.js';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    // const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-container">
                        <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}></button>
                        <img className="profile__avatar" src={Avatar} alt="фото кусто"/>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__heading-text">Жак-Ив Кусто</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__paragraph-text">Исследователь океана</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddCard}></button>
            </section>
            <section>
                <ul className="elements-grid"></ul>
            </section> 
    </main>
    );
}

export default Main;