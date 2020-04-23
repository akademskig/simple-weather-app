
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { selectAvailableCities, selectSelectedCity } from '../redux/weather/weather.selectors';
import { selectCity } from '../redux/weather/weather.actions';

export function CSelect() {
  const availableCities = useSelector(selectAvailableCities)
  const selectedCity = useSelector(selectSelectedCity)
  const dispatch = useDispatch()

  function handleChange(e: React.ChangeEvent<any>) {
    e.preventDefault()
    dispatch(selectCity(e.target.value))
  }

  return (
    <FormControl color="primary">
      <InputLabel id="select-label">Select city</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedCity.id}
        onChange={handleChange}
      >
        {availableCities.map((city: any, idx: number) =>
          <MenuItem key={idx} value={city.id}>{city.name}</MenuItem>
        )}
      </Select>
    </FormControl>
  )
}