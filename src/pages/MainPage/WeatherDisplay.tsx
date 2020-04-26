
import React from 'react';
import { Card, CardContent, Typography, createStyles, makeStyles, Theme, Divider } from '@material-ui/core';
import CWeatherParametersList from './components/CWeatherParametersList'
import CTemperatureDisplay from './components/CTemperatureDisplay'

const useStyles = makeStyles((theme: Theme) => createStyles({
  cardSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& .left, & .right': {
      display: 'flex',
      alignItems: 'center',
      '& .weather-caption': {
        textTransform: 'capitalize',
        marginLeft: '0.5em',
        color: theme.palette.primary.dark,
      },
      [theme.breakpoints.down(500)]: {
        width: '100%',
      }
    },
    '& .left': {
      justifyContent: 'center',
    }
  },
}));

function WeatherDisplay({ weatherData }: any) {
  const { name, weather, iconUrl, main, wind, sys, dt } = weatherData
  return (
    <Card variant="elevation">
      <CardTop {...{ name, weather, sys, dt }}></CardTop>
      <Divider />
      <CardBottom {...{ main, wind, weather, iconUrl }}></CardBottom>
    </Card>
  )
}

function CardTop({ name, sys, dt }: any) {
  const getTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return `${days[date.getDay()]},  ${date.toLocaleTimeString()}`
  }

  return (
    <CardContent >
      <div className="left">
        <Typography variant="h5" component="h2" gutterBottom>
          {name}, {sys.country}
        </Typography>
        <Typography variant="h6" color="primary" component="h2">
          {getTime(dt)}
        </Typography>
      </div>
    </CardContent>
  )
}

function CardBottom({ main, wind, weather, iconUrl }: any) {
  const classes = useStyles()
  return (
    <CardContent className={classes.cardSection}>
      <div className="left">
        <CTemperatureDisplay {...{ weather, iconUrl, main }} ></CTemperatureDisplay>
      </div>
      <div className="right">
        <CWeatherParametersList {...{ main, wind }}></CWeatherParametersList>
      </div>
    </CardContent>
  )
}


export default WeatherDisplay