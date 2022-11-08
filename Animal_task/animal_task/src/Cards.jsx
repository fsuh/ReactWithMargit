import React from 'react';
import {BsSuitHeartFill} from 'react-icons/bs'


 const Cards = (props) => {

        return (
        <div className="Cards">
            <h2 className="title">{props.name}</h2>
            <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name} />
            <button className="removeCard" onClick={props.removeCard}>x</button>
            <div className='btns'>
            <button className="reduceLikes" onClick={props.reduceLikes}>-</button>
            <p><BsSuitHeartFill /><span>{props.likes}</span></p>
            
            <button className="addLikes" onClick={props.addLikes}>+</button>
            </div>
        </div>
        )

}

export default Cards

