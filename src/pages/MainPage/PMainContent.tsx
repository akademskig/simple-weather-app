import React from 'react';
import { Paper, createStyles, makeStyles } from '@material-ui/core';
import { selectWeatherData } from '../../redux/weather/weather.selectors';
import { useSelector } from 'react-redux';
import ErrorIcon from '@material-ui/icons/Error';
import WeatherDisplay from './WeatherDisplay';
import CModal from '../../components/CModal';

const useStyles = makeStyles(() => createStyles({
  paper: {
    maxWidth: '500px',
    minWidth: '250px',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '30vh',
    position: 'relative'
  }
}));
export function PMainContent() {

  const classes = useStyles()
  let weatherData = useSelector(selectWeatherData)
  return (
    <Paper className={classes.paper}>
      {weatherData ?
        <WeatherDisplay weatherData={weatherData}></WeatherDisplay>
        :
        <CModal>
          <ErrorIcon fontSize="large"></ErrorIcon>
          <span className="modalText">No data available</span>
        </CModal>}
    </Paper>
  )
}


