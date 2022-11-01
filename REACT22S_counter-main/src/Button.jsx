import React from 'react';
import btnStyle from './Button.module.css'


const Button = (props) => {
    return (
        <button
        className={btnStyle.btn}
        type={props.type || 'button'}
        onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button