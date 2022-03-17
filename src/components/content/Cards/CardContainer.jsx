import {useContext} from "react";
import Card from "./Card";
import {MyContext} from "../../../App";

export const CardContainer = () => {
    const {state} = useContext(MyContext);
    return <Card asteroids={state.asteroids}
                 onlyDangerous={state.onlyDangerous}/>
}



