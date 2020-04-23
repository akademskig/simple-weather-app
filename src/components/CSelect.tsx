
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles, createStyles, Theme } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { selectAvailableCities, selectSelectedCity } from '../redux/weather/weather.selectors';
import { selectCity } from '../redux/weather/weather.actions';

const useStyles = makeStyles((theme: Theme) => createStyles({
  select: {
    '& div, & label, & svg': {
      color: theme.palette.getContrastText(theme.palette.primary.main)
    }
  }
}));
export function CSelect({ theme }: { theme?: any }) {
  const classes = useStyles()
  const availableCities = useSelector(selectAvailableCities)
  const selectedCity = useSelector(selectSelectedCity)
  const dispatch = useDispatch()

  function handleChange(e: React.ChangeEvent<any>) {
    e.preventDefault()
    dispatch(selectCity(e.target.value))
  }

  return (
    <FormControl color="secondary" className={classes.select}  >
      <InputLabel id="select-label">Select city</InputLabel>
      <Select
        labelId="selectCity"
        id="select-city"
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