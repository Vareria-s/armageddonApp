import React, {useContext} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {MyContext} from "../../../App";


const activeLink =  navData => navData.isActive ? s.active : s.item;

const Navbar = () => {
    const {state} = useContext(MyContext);

    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to="/armageddonApp" className = {activeLink}>Астеройды</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/destruction" className = {activeLink}>Уничтожение</NavLink>
            </div>
            <div className={s.counter}>{state.asteroidsForDestroying.length}</div>
        </div>
    )
}



export default Navbar;