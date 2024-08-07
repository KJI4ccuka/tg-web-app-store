import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import cl from './header.module.scss'
import Button from "../button/button.jsx";
const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={cl.header}>
            <Button onClick={onClose}>Close</Button>
            <span className={cl.username}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;