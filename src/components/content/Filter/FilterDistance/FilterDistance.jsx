import React, {useContext} from 'react';
import s from './FilterDistance.module.css';
import {MyContext} from "../../../../App";

const FilterDistance = (props) => {

    const {state, dispatch} = useContext(MyContext);

    return (

        <div className={s.nav}>
            <div>Расстояние <span className={state.setIsDistance ? s.kilometers : s.moon } onClick={() => dispatch({type: 'CHANGE_ONLY_DISTANCE'})}>в километрах</span>,
                <span className={state.setIsDistance ? s.moon : s.kilometers } onClick={() =>  dispatch({type: 'NEW_CHANGE_ONLY_DISTANCE'})}>в дистанциях до луны</span></div>
        </div>
    )
}



export default FilterDistance;