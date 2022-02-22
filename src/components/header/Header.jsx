import React, {useContext} from 'react';
import Navbar from './navbar/Navbar'
import s from './Header.module.css';

const Header = () => {


    return (
        <div className={s.nav}>
            <div className={s.item}>
                <h3>ARMAGGEDON V </h3>
                <p>Сервис мониторинга и уничтожения астероидов,
                    опасно подлетающих к Земле.</p>
            </div>
            <Navbar/>
        </div>
    )
}

export default Header;
