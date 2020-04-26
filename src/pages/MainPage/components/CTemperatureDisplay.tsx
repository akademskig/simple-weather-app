

import React, { Fragment } from 'react';
import { Typography, createStyles, makeStyles, Theme } from '@material-ui/core';
import { selectSelectedCity } from '../../../redux/weather/weather.selectors';
import { useSelector } from 'react-redux';
import AlertIcon from '@material-ui/icons/Error'
import { CTooltip } from '../../../components/CTooltip';

const useStyles = makeStyles((theme: Theme) => createStyles({
  temp: {
    display: 'flex',
    '& .tempFull': {
      display: 'flex'
    },
    '& .belowNormal': {
      color: theme.palette.primary.main
    },
    '& .aboveNormal': {
      color: theme.palette.error.main
    },
    '& .MuiTypography-h5': {
      paddingTop: '0.2em'
    },
    '& :hover': {
      cursor: 'pointer',
    }
  },
  alert: {
    marginLeft: '0.5em',
  }
}));

export default function CTemperatureDisplay({ iconUrl, weather, main }: any) {
  const { minTemp, maxTemp } = useSelector(selectSelectedCity)
  const classes = useStyles()

  const getClass = () => {
    if (main.temp < minTemp) {
      return 'belowNormal'
    }
    else if (main.temp > maxTemp) {
      return 'aboveNormal'
    }
    else {
      return "normal"
    }
  }

  return (
    <Fragment>
      <img src={iconUrl} alt="Weather Icon" />
      <div >
        <Typography className='weather-caption' color="primary">
          {weather[0].description}
        </Typography>
        <div className={classes.temp}>
          <CTooltip title={`Feels like ${main.feels_like.toFixed()} °C`}>
            <div className={`tempFull ${getClass()}`} >
              <Typography variant="h3" component="span" >
                {main.temp.toFixed(0)}
              </Typography>
              <Typography component="span" variant="h5" >°C</Typography>
            </div>
          </CTooltip>
          {main.temp > maxTemp &&
            <CTooltip title="Temperature above normal">
              <AlertIcon color="error" className={classes.alert}></AlertIcon>
            </CTooltip>
          }
          {main.temp < minTemp &&
            <CTooltip title="Temperature below normal">
              <AlertIcon color="primary" className={classes.alert}></AlertIcon>
            </CTooltip>
          }
        </div>
      </div>
    </Fragment>
  )
}
