import React, {useContext} from 'react';
import Filter from './Filter/Filter';
import Footer from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Destruction from "./Cards/destruction/Destruction";
import {MyContext} from "../../App";
import {CardContainer} from "./Cards/CardContainer";


const Content = () => {
    const {state}=useContext(MyContext);

    return (
        <div>
            <hr></hr>
            <Filter />
            <div className='menu-block'>
                <Routes>
                    <Route path="/armageddonApp" element={<CardContainer />}/>
                    <Route path="/destruction" element={<Destruction forDestroying={state.asteroidsForDestroying}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}




export default Content;
