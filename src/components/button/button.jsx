import React from 'react';
import cl from './button.module.scss';

const Button = (props) => {
    return (
        <button {...props} className={`${cl.button} + ${props.className}`}/>
    );
};

export default Button;