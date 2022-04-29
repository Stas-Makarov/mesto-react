import React from 'react';

function Card(props) {
    
    function handleImageClick() {
        props.onCardClick(props.card);
    }

    function handleDeleteClick() {
        props.onDeleteButtonClick(props.card);
    }

    return (
        <li className="elements-grid__item-container">
            <div className="elements-grid__image-container">
                <img className="elements-grid__item-image"
                    src={props.card.link}
                    alt={props.card.name}
                    onClick={handleImageClick} 
                />
                <button className="elements-grid__item-delete" type="button" onClick={handleDeleteClick}
                ></button>
            </div>
            <div className="elements-grid__item-caption">
                <h2 className="elements-grid__item-text">{props.card.name}</h2>
                <div className="elements-grid__item-like-container">
                    <button className="elements-grid__item-like" type="button"></button>
                    <p className="elements-grid__item-like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;