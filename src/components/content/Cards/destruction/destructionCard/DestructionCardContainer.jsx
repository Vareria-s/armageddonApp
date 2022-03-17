import {MyContext} from "../../../../../App";
import {useContext} from "react";
import DestructionCard from "./DestructionCard";


export const DestructionCardContainer = (props) => {
    const {state, dispatch} = useContext(MyContext);
    const {asteroid} = props;

    return <DestructionCard asteroid={asteroid}
                     setIsDistance={state.setIsDistance}
                     dataNew={()=>{dispatch({type: 'DELETE', payload: asteroid})}}/>
}



