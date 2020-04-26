import { SELECT_CITY, FETCH_WEATHER_START, FETCH_WEATHER_OK, FETCH_WEATHER_ERROR } from './weather.types';
import { availableCities } from '../../config';
import { WeatherState } from './types/index';
const initialState : WeatherState = {
    availableCities: availableCities,
    weatherData: null,
    selectedCity: availableCities[0],
    loading: false,
    error: null
}

function weatherReducer(state = initialState, action: { type: string, payload?: any }):WeatherState {
    switch (action.type) {
        case SELECT_CITY: {
            const { selectedCityId } = action.payload
            return {
                ...state,
                selectedCity: state.availableCities.find(ac=> selectedCityId===ac.id)
            }
        }
        case FETCH_WEATHER_START: {
            return {
                ...state,
                loading: !state.weatherData && true
            }
        }
        case FETCH_WEATHER_OK: {
            const {weatherData} = action.payload
            return {
                ...state,
                error: null,
                weatherData: getIconUrl(weatherData),
                loading: false
            }
        }
        case FETCH_WEATHER_ERROR: {
            const {error} = action.payload
            return {
                ...state,
                error: error,
                loading: false
            }
        }
        default: return state
    }
}

function getIconUrl(weatherData: any){
        weatherData['iconUrl'] = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
        return weatherData
}



export default weatherReducer