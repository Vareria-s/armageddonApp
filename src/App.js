import React, {createContext, useEffect, useReducer, useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from "./components/content/Content";
import {BrowserRouter} from "react-router-dom";

export const MyContext = createContext();

const App = () => {

    const initialState = {asteroidsForDestroying: [], onlyDangerous: false, setIsDistance:false}

    const asteroidsReducer = (state, action) => {
        switch (action?.type) {
            case 'ADD':
                return {...state, asteroidsForDestroying: [...state.asteroidsForDestroying, action.payload]};
            case 'DELETE':
                return {...state, asteroidsForDestroying: [...state.asteroidsForDestroying.filter(item => item.name !== action.payload.name)]};
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


    const [isDangerous, setIsDangerous] = useState(false);
    const [isDistance, setIsDistance] = useState(true);

    const [asteroids, setAsteroids] = useState([]);

    const dateObj = new Date();
    const day = dateObj.getUTCDate().toString();
    const month = (dateObj.getMonth() + 1).toString(); //months from 1-12
    const year = dateObj.getUTCFullYear();

    console.log("content");

    useEffect(()=>{
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-02-${day-7}&end_date=${year}-${month}-${day}&api_key=DEMO_KEY`)
            .then(response => response.json())
            .then(data => {
                let asteroids = [];
                const nearEarthObjects = data.near_earth_objects;
                for (let day in nearEarthObjects) {
                    asteroids = asteroids.concat(nearEarthObjects[day])
                }
                setAsteroids(asteroids.map(asteroid => {
                    return {
                        name: asteroid.name,
                        date: asteroid.close_approach_data[0].close_approach_date,
                        distance: {
                            kilometers: Math.round(asteroid.close_approach_data[0].miss_distance.kilometers),
                            moon: Math.round(asteroid.close_approach_data[0].miss_distance.lunar),
                        },
                        size: ((asteroid.estimated_diameter.kilometers.estimated_diameter_min + asteroid.estimated_diameter.kilometers.estimated_diameter_max)/2).toFixed(3),
                        inDangerous: asteroid.is_potentially_hazardous_asteroid,
                    }
                }));
            });
    }, [])


    return (
        <MyContext.Provider value={{state, dispatch}}>
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Content state={state}
                             dispatch={dispatch}
                             asteroids={asteroids}
                    />
                </div>
            </BrowserRouter>
        </MyContext.Provider>

    );
}

export default App;
