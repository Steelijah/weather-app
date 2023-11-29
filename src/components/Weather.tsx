import React from 'react';
import {useSelector} from "react-redux";
import {State, WeatherInfo} from "../types";

const Weather: React.FC = (): JSX.Element =>
{
    const weatherInfo = useSelector<State, WeatherInfo>(state => state.weatherInfo!)
    const message = useSelector<State, string | null>(state => state.message)

    return (
        <div className={'infoWeath'}>
            {message ||
            <div>
                <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                <p>Temperature: {weatherInfo.temp} <sup>0</sup></p>
                <p>Pressure: {weatherInfo.pressure}</p>
                <p>Sunset: {new Date(weatherInfo.sunset*1000).toTimeString()}</p>
            </div> }
        </div>
    )
}

export default Weather;