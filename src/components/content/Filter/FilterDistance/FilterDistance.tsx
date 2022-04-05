import React from 'react';
import s from './FilterDistance.module.css';

export type FilterDistanceProps = {
    setIsDistance: any;
    changeOnlyDistance: any;
    newChangeOnlyDistance: any;
}

const FilterDistance = (props: FilterDistanceProps) => {
    const  {setIsDistance, changeOnlyDistance, newChangeOnlyDistance} = props;

    return (

        <div className={s.nav}>
            <div>Расстояние <span className={setIsDistance ? s.kilometers : s.moon } onClick={changeOnlyDistance}>в километрах</span>,
                <span className={setIsDistance ? s.moon : s.kilometers } onClick={newChangeOnlyDistance}> в дистанциях до луны</span></div>
        </div>
    )
}



export default FilterDistance;