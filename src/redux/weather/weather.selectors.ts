import { createSelector } from "reselect"
import { WeatherState } from './types/index';

const selectWeather = (state: any) => state.weather

export const selectSelectedCity = createSelector(
    [selectWeather],
    (weather: WeatherState): any => weather.selectedCity 
)

export const selectAvailableCities = createSelector(
    [selectWeather],
    (weather) => weather.availableCities
)

export const selectCityById = (cityId: number) => createSelector(
    [selectAvailableCities],
    (availableCities: any[]): any => availableCities.find(city => city.id === cityId)
)

export const selectWeatherData = createSelector(
    [selectWeather],
    (weather) => weather.weatherData
)