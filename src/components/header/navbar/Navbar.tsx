import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const activeLink =  (navData: { isActive: any; }) => navData.isActive ? s.active : s.item;

const Navbar = (props: { asteroidsFor: any; }) => {
    const {asteroidsFor}=props;

    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to="/armageddonApp" className = {activeLink}>Астеройды</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/destruction" className = {activeLink}>Уничтожение</NavLink>
            </div>
            <div className={s.counter}>{asteroidsFor}</div>
        </div>
    )
}



export default Navbar;