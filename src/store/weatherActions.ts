import {api_key, base_url} from "../utils/constants";
import {Action, Dispatch, WeatherInfo} from "../types";

export const PUT_WEATHER_INFO = 'PUT_WEATHER_INFO'
export const PUT_MESSAGE = 'PUT_MESSAGE'

export const putWeatherInfoAction = (weatherInfo: WeatherInfo) : Action =>
    ({
        type: PUT_WEATHER_INFO,
        payload: weatherInfo
    })

export const putMessageAction = (message : string) : Action =>
    ({
        type: PUT_MESSAGE,
        payload: message
    })

export const getWeatherAction = (city:string): any =>
{
    return (dispatch: Dispatch) =>
    {
        dispatch(putMessageAction('Loading........'))
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
                .then(response => response.json())
                .then(data => ({
                                city: data.name,
                                temp: data.main.temp,
                                country: data.sys.country,
                                pressure: data.main.pressure,
                                sunset: data.sys.sunset
                            }))
            .then(info => dispatch(putWeatherInfoAction(info)))
                 .catch(e => dispatch(putMessageAction('Enter correct city name')))
    }
}