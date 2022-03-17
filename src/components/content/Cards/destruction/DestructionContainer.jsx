import {useContext} from "react";
import {MyContext} from "../../../../App";
import Destruction from "./Destruction";

export const DestructionContainer = () => {
    const {state} = useContext(MyContext);

    return <Destruction forDestroying={state.asteroidsForDestroying}
                 onlyDangerous={state.onlyDangerous}/>
}



