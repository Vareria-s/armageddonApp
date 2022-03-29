import React from 'react';
import Filter from './Filter/Filter';
import Footer from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {CardContainer} from "./Cards/CardContainer";
import {DestructionContainer} from "./Cards/destruction/DestructionContainer";


const Content = () => {

    return (
        <div>
            <hr></hr>
            <Filter />
            <div className='menu-block'>
                <Routes>
                    <Route path="/armageddonApp" element={<CardContainer />}/>
                    <Route path="/destruction" element={<DestructionContainer />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default Content;
