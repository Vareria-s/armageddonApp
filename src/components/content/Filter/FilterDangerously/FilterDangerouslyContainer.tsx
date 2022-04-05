import React from "react";
import {useContext} from "react";
import {MyContext} from "../../../../App";
import FilterDangerously from "./FilterDangerously";

export const FilterDangerouslyContainer = () => {
    // @ts-ignore
    const {state, dispatch} = useContext(MyContext);
    return <FilterDangerously  onlyDangerous={state.onlyDangerous}
                              changeOnlyDangerous={()=>dispatch({type: 'CHANGE_ONLY_DANGEROUS',})}/>
}
