import {useContext} from "react";
import {MyContext} from "../../../../App";
import FilterDistance from "./FilterDistance";

export const FilterDistanceContainer = () => {
    const {state, dispatch} = useContext(MyContext);
    return <FilterDistance  setIsDistance={state.setIsDistance}
                              changeOnlyDistance={()=>dispatch({type: 'CHANGE_ONLY_DISTANCE',})}
                            newChangeOnlyDistance={()=>dispatch({type: 'NEW_CHANGE_ONLY_DISTANCE',})}
    />
}
