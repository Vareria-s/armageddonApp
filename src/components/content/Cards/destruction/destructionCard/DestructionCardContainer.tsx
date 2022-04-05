import {MyContext} from "../../../../../App";
import {useContext} from "react";
import DestructionCard from "./DestructionCard";
import React from "react";

export type DestructionCardContainerProps = {
    asteroid: any;
}

export const DestructionCardContainer = (props: DestructionCardContainerProps) => {
    // @ts-ignore
    const {state, dispatch} = useContext(MyContext);
    const {asteroid} = props;

    return <DestructionCard asteroid={asteroid}
                     setIsDistance={state.setIsDistance}
                     dataNew={()=>{dispatch({type: 'DELETE', payload: asteroid})}}/>
}



