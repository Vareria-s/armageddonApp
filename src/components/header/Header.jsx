import React from 'react';
import s from './Header.module.css';
import {NavbarContainer} from "./navbar/NavbarContainer";

const Header = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <h3>ARMAGGEDON V </h3>
                <p>Сервис мониторинга и уничтожения астероидов,
                    опасно подлетающих к Земле.</p>
            </div>
            <NavbarContainer/>
        </div>
    )
}

export default Header;
