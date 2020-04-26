import React from 'react';
import { Paper, createStyles, makeStyles, CircularProgress } from '@material-ui/core';
import { selectWeatherData, selectError, selectLoading } from '../../redux/weather/weather.selectors';
import { useSelector } from 'react-redux';
import ErrorIcon from '@material-ui/icons/Error';
import WeatherDisplay from './WeatherDisplay';
import CModal from '../../components/CModal';
import { CTooltip } from '../../components/CTooltip';

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
  let loading = useSelector(selectLoading)
  let error = useSelector(selectError)
  return (
    <Paper className={classes.paper}>
      {loading && <CModal><CircularProgress></CircularProgress></CModal>}
      {weatherData ?
        <WeatherDisplay weatherData={weatherData}></WeatherDisplay>
        :
        <CModal>
          <ErrorIcon fontSize="large"></ErrorIcon>
          <span className="modalText">No data available</span>
          {error && JSON.stringify(error)}
        </CModal>}
      {error &&
        <CModal color="red" position="topRight">
          <CTooltip title="An error occurred">
            <ErrorIcon fontSize="large"></ErrorIcon>
          </CTooltip>
        </CModal>}
    </Paper>
  )
}


