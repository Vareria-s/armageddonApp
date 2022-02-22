import React, {useContext} from 'react';
import s from './Card.module.css';
import TextCard from "./TextCard/TextCard";
import {MyContext} from "../../../App";


const Card = ({asteroids, isDistance}) => {

    const {state, dispatch} =useContext(MyContext);

    const asteroidsArray = state.onlyDangerous ? asteroids.filter(asteroid=>asteroid.inDangerous) : asteroids;

    return (
        <div className={s.nav}>
            {asteroidsArray.map((asteroid) => <TextCard asteroid={asteroid}
                                                        isDistance={isDistance}
                                                        dispatch={dispatch}
                                                        key={asteroid.id}/>)}
        </div>
    )
}

export default Card;







