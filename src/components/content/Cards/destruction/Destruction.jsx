import React from 'react';
import s from './Destruction.module.css';
import {DestructionContainer} from "./DestructionContainer";
import {DestructionCardContainer} from "./destructionCard/DestructionCardContainer";


const Destruction = (props) => {
    const {forDestroying,onlyDangerous} = props;

    const forDestroyingArray = onlyDangerous ? forDestroying.filter(asteroid=>asteroid.inDangerous) : forDestroying;
    return (
        <div className={s.nav}>
                {forDestroyingArray.map((asteroid) => <div className={s.item}><DestructionCardContainer asteroid={asteroid}
                                                                                          key={asteroid.id}/></div>)}
        </div>
    )
}

export default Destruction;
