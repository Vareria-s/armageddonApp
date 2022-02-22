import React, {useContext, useState} from 'react';
import s from './FilterDangerously.module.css';
import {MyContext} from "../../../../App";


const FilterDangerously = () => {

    const {state, dispatch} = useContext(MyContext);

    return (
        <div className={s.nav}>
            <label>
                <input type="checkbox" defaultChecked={state.onlyDangerous}
    onClick={() => {
        dispatch({type: 'CHANGE_ONLY_DANGEROUS'})
    }}/>Показать только опасные
            </label>
        </div>
    )
}


export default FilterDangerously;
