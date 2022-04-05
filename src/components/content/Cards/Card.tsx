import React from 'react';
import {TextCardContainer} from "./TextCard/TextCardContainer";

export type CardProps  = {
    asteroids: any;
    onlyDangerous: any;
}

const Card = (props: CardProps) => {
    const {asteroids,onlyDangerous} = props;

    const asteroidsArray = onlyDangerous ? asteroids.filter((asteroid: { inDangerous: any; }) =>asteroid.inDangerous) : asteroids;

    return (
        <div>
            {asteroidsArray.map((asteroid: { id: any; }) => <TextCardContainer asteroid={asteroid}
                                                        key={asteroid.id}/>)}
        </div>
    )
}

export default Card;







