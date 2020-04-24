import { call, put, takeEvery, select } from 'redux-saga/effects';
import WeatherApi from '../../api/weatherApi';
import { FETCH_WEATHER_OK, FETCH_WEATHER_START, SELECT_CITY } from './weather.types';
import { selectCityById } from './weather.selectors';
import { fetchWeatherStart } from './weather.actions';


/**
 * Fetches weather data.
 */
function* fetchWeather(query: string) {
   try {
      const weatherData = yield call(WeatherApi.fetchWeather, query);
      yield put({ type: FETCH_WEATHER_OK, payload: { weatherData } });
   } catch (error) {
      console.error(error)
   }
}

function* selectCity(selectedCityId: number) {
   const { value } = yield select(selectCityById(selectedCityId))

   try {
      yield put(fetchWeatherStart(value))
   }
   catch (err) {

   }
}


function* weatherSaga() {
   yield takeEvery(SELECT_CITY, (action: any) => selectCity(action.payload.selectedCityId))
   yield takeEvery(FETCH_WEATHER_START, (action: any) => fetchWeather(action.payload.cityValue))
}

export default weatherSaga