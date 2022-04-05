import React from "react";
import {useContext} from "react";
import {MyContext} from "../../../App";
import Navbar from "./Navbar";

export const NavbarContainer = () => {
    // @ts-ignore
    const {state} = useContext(MyContext);
    return <Navbar asteroidsFor={state.asteroidsForDestroying.length}/>
}



