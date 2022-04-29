import React from 'react';
import {useEffect, useState} from 'react';
import Card from '../Card/Card.js';
import { api } from '../../utils/Api.js';

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(cards)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-container">
                        <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}></button>
                        <img className="profile__avatar" src={userAvatar} alt="фото кусто"/>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__heading-text">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__paragraph-text">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddCard}></button>
            </section>
            <section>
                <ul className="elements-grid">
                    {cards.map((card) => (
                        < Card
                            card={card}
                            onCardClick={props.onCardClick}
                            onDeleteButtonClick={props.onDeleteButtonClick}
                            key={card._id}
                        />
                    ))}
                </ul>
            </section> 
    </main>
    );
}

export default Main;