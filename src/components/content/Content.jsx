import React, {useContext, useEffect, useReducer, useState,} from 'react';
import Filter from './Filter/Filter';
import Footer from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Destruction from "./Cards/destruction/Destruction";
import Card from "./Cards/Card";
import {MyContext} from "../../App";


const Content = (props) => {
    const {asteroids} = props;
    const {state, dispatch}=useContext(MyContext);

    return (
        <div>
            <hr></hr>
            <Filter />
            <div className='menu-block'>
                <Routes>
                    <Route path="/armageddonApp" element={<Card  asteroids={asteroids}
                                                             state={state} dispatch={dispatch}
                    />}/>
                    <Route path="/destruction" element={<Destruction forDestroying={state.asteroidsForDestroying}
                                                                     dispatch={dispatch}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}




export default Content;
