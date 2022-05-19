import React from 'react';

const Button = ({ handleClick, clsName }) => {
    return (
        <div className={'btn' + ' ' + clsName} onClick={handleClick}>
            <p>Notify me</p>
        </div>
    )
}

export default Button;