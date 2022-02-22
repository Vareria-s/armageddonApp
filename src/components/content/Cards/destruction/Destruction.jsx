import React from 'react';
import s from './Destruction.module.css';
import DestructionCard from "./destructionCard/DestructionCard";


const Destruction = ({forDestroying, isDistance, dispatch}) => {
    return (
        <div className={s.nav}>
                {forDestroying.map((asteroid) => <div className={s.item}><DestructionCard asteroid={asteroid}
                                                                                   isDistance={isDistance}
                                                                                          dispatch={dispatch}
                                                                                          key={asteroid.id}/></div>)}
        </div>
    )
}

export default Destruction;
