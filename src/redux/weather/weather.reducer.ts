import { SELECT_CITY, FETCH_WEATHER_START, FETCH_WEATHER_OK } from './weather.types';
import { availableCities } from '../../config';
import { WeatherState } from './types/index';
const initialState : WeatherState = {
    availableCities: availableCities,
    weatherData: null,
    selectedCity: availableCities[0]
}

function weatherReducer(state = initialState, action: { type: string, payload: any }) {
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
                loading: true
            }
        }
        case FETCH_WEATHER_OK: {
            const {weatherData} = action.payload
            return {
                ...state,
                weatherData: weatherData,
                loading: false
            }
        }
        default: return state
    }
}

//openweathermap.org/img/wn/02d@2x.png



export default weatherReducer