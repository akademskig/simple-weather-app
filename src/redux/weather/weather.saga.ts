import { call, put, takeEvery, select } from 'redux-saga/effects';
import WeatherApi from '../../api/weatherApi';
import { FETCH_WEATHER_OK, FETCH_WEATHER_START, SELECT_CITY } from './weather.types';
import { selectSelectedCity } from './weather.selectors';
import { fetchWeatherStart } from './weather.actions';


/**
 * Fetches weather data.
 */
function* fetchWeather() {
   const { value } = yield select(selectSelectedCity)
   try {
      const weatherData = yield call(WeatherApi.fetchWeather, value);
      yield put({ type: FETCH_WEATHER_OK, payload: { weatherData } });
   } catch (error) {
      console.error(error)
   }
}

/**
 * Dispatches fetchWeatherStart action on city select.
 */
function* selectCity() {

   try {
      yield put(fetchWeatherStart())
   }
   catch (error) {
      console.error(error)
   }
}

function* weatherSaga() {
   yield takeEvery(SELECT_CITY, (action: any) => selectCity())
   yield takeEvery(FETCH_WEATHER_START, (action: any) => fetchWeather())
}

export default weatherSaga