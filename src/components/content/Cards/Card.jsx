import React from 'react';
import s from './Card.module.css';
import {TextCardContainer} from "./TextCard/TextCardContainer";


const Card = (props) => {
    const {asteroids,onlyDangerous} = props;

    const asteroidsArray = onlyDangerous ? asteroids.filter(asteroid=>asteroid.inDangerous) : asteroids;

    return (
        <div className={s.nav}>
            {asteroidsArray.map((asteroid) => <TextCardContainer asteroid={asteroid}
                                                        key={asteroid.id}/>)}
        </div>
    )
}

export default Card;







