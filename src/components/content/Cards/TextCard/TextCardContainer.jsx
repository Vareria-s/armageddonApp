import {MyContext} from "../../../../App";
import {useContext} from "react";
import TextCard from "./TextCard";


export const TextCardContainer = (props) => {
    const {state, dispatch} = useContext(MyContext);
    const {asteroid} = props;

    return <TextCard asteroid={asteroid}
                     setIsDistance={state.setIsDistance}
                     addNew={()=>{dispatch({type: 'ADD', payload: asteroid})}}/>
}



