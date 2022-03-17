import React from 'react';
import s from './TextCard.module.css';
import dino from './../../../../img/dino.png';
import Destruction from './../../../../img/asteroid3.png';
import Normal from './../../../../img/asteroid2.png';
import Close from './../../../../img/asteroid1.png';


const TextCard = (props) => {
    const {asteroid, setIsDistance, addNew} = props;

    const distanceObject = setIsDistance ? `${asteroid.distance.kilometers} км` : `${asteroid.distance.moon} км`

    const statusObject= asteroid.inDangerous ? "опасен" : "неопасен";
    const asteroidPicture = asteroid.size > 1 ? Destruction : asteroid.size > 0.09 ? Normal: Close


    return (
        <div className={asteroid.inDangerous ? s.redGradient : s.greenGradient}>
            <img src={dino} className={s.dino} alt=""/>
            <img src={asteroidPicture} className={s.logoRed} alt=""/>
            <div className={s.nav}>
                <div className={s.header}>{asteroid.name}</div>
                <div className={s.item}>Дата {asteroid.date}</div>
                <div className={s.item}>Расстояние {distanceObject}</div>
                <div className={s.item}>Размер {asteroid.size}</div>
            </div>
            <div className={s.grade}>
                <div className={s.text}>Оценка:</div>
                <div className={s.status}>{statusObject}</div>
                <button onClick={addNew}>На уничтожение</button>
            </div>
        </div>
    )
}



export default TextCard;
