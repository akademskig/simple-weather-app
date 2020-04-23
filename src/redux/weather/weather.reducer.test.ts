import reducers from './../root.reducer';
import { availableCities } from '../../config/index';
test('reducers', () => {
  let state;
  state = reducers({weather:{selectedCity:availableCities[0],availableCities:availableCities,weatherData:[]}}, {type:'persist/PERSIST'});
  expect(state).toEqual({weather:{selectedCity:availableCities[0],availableCities:availableCities,weatherData:[]},_persist:{version:-1,rehydrated:false}});
});