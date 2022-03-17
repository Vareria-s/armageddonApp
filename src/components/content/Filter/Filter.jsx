import React from 'react';
import s from './Filter.module.css';
import {FilterDangerouslyContainer} from "./FilterDangerously/FilterDangerouslyContainer";
import {FilterDistanceContainer} from "./FilterDistance/FilterDistanceContainer";

const Filter = () => {

    return (
        <div className={s.nav}>
            <FilterDangerouslyContainer />
            <FilterDistanceContainer />
        </div>
    )
}



export default Filter;