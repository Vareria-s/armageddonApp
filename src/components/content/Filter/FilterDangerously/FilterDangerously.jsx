import React from 'react';
import s from './FilterDangerously.module.css';


const FilterDangerously = (props) => {
    const {onlyDangerous, changeOnlyDangerous} = props;

    return (
        <div className={s.nav}>
            <label>
                <input type="checkbox" defaultChecked={onlyDangerous}
    onClick={changeOnlyDangerous}/>Показать только опасные
            </label>
        </div>
    )
}


export default FilterDangerously;
