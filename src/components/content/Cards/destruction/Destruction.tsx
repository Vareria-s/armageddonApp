import React from 'react';
import s from './Destruction.module.css';
import {DestructionCardContainer} from "./destructionCard/DestructionCardContainer";

export type DestructionProps = {
    forDestroying: any;
    onlyDangerous: any;
}

const Destruction = (props: DestructionProps) => {
    const {forDestroying,onlyDangerous} = props;

    const forDestroyingArray = onlyDangerous ? forDestroying.filter((asteroid: { inDangerous: any; }) =>asteroid.inDangerous) : forDestroying;
    return (
        <div className={s.nav}>
                {forDestroyingArray.map((asteroid: { id: any; }) => <div className={s.item}><DestructionCardContainer asteroid={asteroid}
                                                                                          key={asteroid.id}/></div>)}
        </div>
    )
}

export default Destruction;
