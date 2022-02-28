import React from 'react';
import s from './Card.module.css';
import TextCard from "./TextCard/TextCard";



const Card = () => {
    const asteroidsArray = state.onlyDangerous ? state.asteroids.filter(asteroid=>asteroid.inDangerous) : state.asteroids;

    return (
        <div className={s.nav}>
            {asteroidsArray.map((asteroid) => <TextCard asteroid={asteroid}
                                                        key={asteroid.id}/>)}
        </div>
    )
}

export default Card;







