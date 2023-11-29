import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {getWeatherAction} from "../store/weatherActions";

const FormControl: React.FC = (): JSX.Element =>
{
    const [city, setCity] = useState<string>('')
    const dispatch = useDispatch()

   const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    {
        setCity(event.target.value)
    }

   const handleClick = () =>
    {
        dispatch(getWeatherAction(city))
        setCity('')
    }

      return (
            <div>
                <input type={'text'} name={'city'} placeholder={'City'}
                    onChange={handleChange} value={city}/>
                <button onClick={handleClick}>Get weather</button>
            </div>
        );

}

export default FormControl;