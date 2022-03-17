import {useContext} from "react";
import {MyContext} from "../../../App";
import Navbar from "./Navbar";

export const NavbarContainer = () => {
    const {state} = useContext(MyContext);
    return <Navbar asteroidsFor={state.asteroidsForDestroying.length}/>
}



