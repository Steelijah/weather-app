export interface WeatherInfo
{
    country: string
    city: string
    temp: number
    pressure: number
    sunset: number
}
export interface State {
    message: string | null
    weatherInfo?: WeatherInfo
}
export interface Action {
    type: string
    payload?: any
}
export type Dispatch = (action: Action) => State