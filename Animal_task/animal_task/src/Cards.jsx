import React from 'react';
import {BsSuitHeartFill} from 'react-icons/bs'


 const Cards = (props) => {

        return (
        <div className="Cards">
            <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name} />
            <button className="removeCard" onClick={props.removeCard}>x</button>
            <h2 className="title">{props.name}</h2>
            <button className="reduceLikes" onClick={props.reduceLikes}>-</button>
            <BsSuitHeartFill /><span>{props.likes}</span>
            <button className="addLikes" onClick={props.addLikes}>+</button>
        </div>
        )

}

export default Cards

