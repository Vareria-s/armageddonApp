import {MyContext} from "../../../../App";
import {useContext} from "react";
import TextCard from "./TextCard";
import React from "react";

export type TextCardContainerProps  = {
    asteroid: any;
}

export const TextCardContainer = (props: TextCardContainerProps) => {
    const {state, dispatch} = useContext(MyContext);
    const {asteroid} = props;

    return <TextCard asteroid={asteroid}
                     setIsDistance={state.setIsDistance}
                     addNew={()=>{dispatch({type: 'ADD', payload: asteroid})}}/>
}



