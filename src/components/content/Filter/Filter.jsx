import React from 'react';
import s from './Filter.module.css';
import FilterDangerously from "./FilterDangerously/FilterDangerously";
import FilterDistance from "./FilterDistance/FilterDistance";

const Filter = (props) => {

    return (
        <div className={s.nav}>
            <FilterDangerously />
            <FilterDistance />
        </div>
    )
}



export default Filter;