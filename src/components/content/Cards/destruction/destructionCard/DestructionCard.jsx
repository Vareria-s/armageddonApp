import React, {useContext} from 'react';
import s from './DestructionCard.module.css';
import Destruction from './../../../../../img/asteroid3.png';
import Close from './../../../../../img/asteroid1.png';
import {MyContext} from "../../../../../App";
import Normal from "../../../../../img/asteroid2.png";


const TextCard = (props) => {
    const {asteroid} = props;

    const {state, dispatch} =useContext(MyContext);

    const distanceObject = state.setIsDistance ? `${asteroid.distance.kilometers} км` : `${asteroid.distance.moon} км`

    const statusObject= asteroid.inDangerous ? "опасен" : "неопасен";

    const asteroidPicture = asteroid.size > 1 ? Destruction : asteroid.size > 0.09 ? Normal: Close

    return (
        <div className={asteroid.inDangerous ? s.redGradient : s.greenGradient}>
            <img src={asteroidPicture} className={s.logoRed} alt=""/>
            <div className={s.nav}>
                <div className={s.header}>{asteroid.name}</div>
                <div className={s.item}>Дата {asteroid.date}</div>
                <div className={s.item}>Расстояние {distanceObject}</div>
                <div className={s.item}>Размер {asteroid.size}</div>
            </div>
            <div className={s.grade}>
                <div className={s.text}>Оценка:
                    <div className={s.status}> {statusObject}</div>
                </div>
                <button onClick={()=>{dispatch({
                    type: 'DELETE',
                    payload: asteroid
                })}}>Убрать из списка</button>
            </div>
        </div>
    )
}



export default TextCard;
