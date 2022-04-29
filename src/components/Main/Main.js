import React from 'react';
import Card from '../Card/Card.js';
import { api } from '../../utils/Api.js';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
          .then((res) => {
              setUserName(res.name);
              setUserDescription(res.about);
              setUserAvatar(res.avatar);
          })
          .catch(error => { 
              console.log(error); 
          })
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
          .then((res)  => {
              setCards(res);
          })
          .catch(error => { 
              console.log(error) 
          });
    }, []);  

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