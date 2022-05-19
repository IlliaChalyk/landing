import React from 'react'
import logo from '../icons/podspire-logo.svg';
import Button from './Button';


const Header = ({ handleClick }) => {
    return (
        <div className='header'>
            <img src={logo} alt='Podspire logo' className='logo' />
            <Button handleClick={handleClick} />
        </div>
    )
}

export default Header