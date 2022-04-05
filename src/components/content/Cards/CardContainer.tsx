import {useContext} from "react";
import Card from "./Card";
import {MyContext} from "../../../App";
import React from "react";

export const CardContainer = () => {
    // @ts-ignore
    const {state} = useContext(MyContext);
    return <Card asteroids={state.asteroids}
                 onlyDangerous={state.onlyDangerous}/>
}



