import React, {createContext, useEffect, useReducer} from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from "./components/content/Content";
import {BrowserRouter} from "react-router-dom";


// @ts-ignore
export const MyContext= createContext();



export type asteroidsContextType = {
    asteroids: any,
    asteroidsForDestroying: any,
    onlyDangerous: boolean,
    setIsDistance:boolean,
}

export const initialState: asteroidsContextType = {
    asteroids: [],
    asteroidsForDestroying: [],
    onlyDangerous: false,
    setIsDistance:false,
}

export const asteroidsReducer = (state = initialState, action: any) => {
    switch (action?.type) {
        case 'LOAD_ASTEROIDS':
            return {...state, asteroids: action.payload};
        case 'ADD':
            return {...state, asteroidsForDestroying: [...state.asteroidsForDestroying, action.payload]};
        case 'DELETE':
            return {...state, asteroidsForDestroying: [...state.asteroidsForDestroying.filter((item: { name: any; }) => item.name !== action.payload.name)]};
        case 'CHANGE_ONLY_DANGEROUS':
            return {...state, onlyDangerous: !state.onlyDangerous};
        case 'NEW_CHANGE_ONLY_DISTANCE':
            return {...state, setIsDistance: false};
        case 'CHANGE_ONLY_DISTANCE':
            return {...state, setIsDistance: true};
        default:
            return state;
    }
}

const [state, dispatch] = useReducer(asteroidsReducer, initialState);

const App = () => {

    useEffect(()=>{
        fetch(makeRequest())
            .then(response => response.json())
            .then(data => {
                dispatch({payload: mapAsteroids(data.near_earth_objects), type: 'LOAD_ASTEROIDS'});
            });
    }, [])


    return (
        <MyContext.Provider value={{state, dispatch}}>
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Content/>
                </div>
            </BrowserRouter>
        </MyContext.Provider>

    );
}

export default App;


const mapAsteroids = (nearEarthObjects: any) =>{
    let asteroids: any = [];
    for (let day in nearEarthObjects) {
        asteroids = asteroids.concat(nearEarthObjects[day])
    }
    return asteroids.map((asteroid : any) => {
        return {
            id: asteroid.id,
            name: asteroid.name,
            date: asteroid.close_approach_data[0].close_approach_date,
            distance: {
                kilometers: Math.round(asteroid.close_approach_data[0].miss_distance.kilometers),
                moon: Math.round(asteroid.close_approach_data[0].miss_distance.lunar),
            },
            size: ((asteroid.estimated_diameter.kilometers.estimated_diameter_min + asteroid.estimated_diameter.kilometers.estimated_diameter_max)/2).toFixed(3),
            inDangerous: asteroid.is_potentially_hazardous_asteroid,
        }
    })
}

const makeRequest =()=>{
    const dateObj = new Date();
    const day: any = dateObj.getUTCDate().toString();
    const month = (dateObj.getMonth() + 1).toString(); //months from 1-12
    const year = dateObj.getUTCFullYear();
    return `https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-04-${day-4}&end_date=${year}-${month}-${day}&api_key=DEMO_KEY`;
}


