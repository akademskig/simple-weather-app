import { FETCH_WEATHER_OK, SELECT_CITY, FETCH_WEATHER_START } from './weather.types';

export const fetchWeatherStart = () => ({
    type: FETCH_WEATHER_START,
})

export const fetchWeatherOk = (weatherData: []) => ({
    type: FETCH_WEATHER_OK,
    payload: {
        weatherData
    }
})

export const selectCity = (selectedCityId: string) => ({
    type: SELECT_CITY,
    payload: {
        selectedCityId
    }
})
