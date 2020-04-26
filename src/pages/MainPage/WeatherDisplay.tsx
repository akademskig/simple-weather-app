
import React from 'react';
import { Card, CardContent, Typography, createStyles, makeStyles, Theme, Divider, List, ListItem, CircularProgress, Tooltip, withStyles } from '@material-ui/core';
import { selectLoading } from '../../redux/weather/weather.selectors';
import { useSelector } from 'react-redux';
import CModal from '../../components/CModal';

const useStyles = makeStyles((theme: Theme) => createStyles({
  cardTop: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& .left, & .right': {
      display: 'flex',
      alignItems: 'center',
      '& .weather-caption': {
        textTransform: 'capitalize',
        '& p':
          { marginLeft: '0.5em' }
      },
      [theme.breakpoints.down(500)]: {
        width: '100%',
      }
    },
  },
  temp: {
    display: 'flex',
    '& .MuiTypography-h5': {
      paddingTop: '0.2em'
    },
    '& :hover': {
      cursor: 'pointer'
    }
  },
  list: {
    padding: 0,
    paddingTop: '1em',
    '& li': {
      paddingLeft: '0.5em',
      paddingTop: 0,
      fontWeight: 'normal',
      paddingRight: '0.5em',
      '& p': {
        fontSize: '1.25rem'
      }
    }
  },
  tooltip:{
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
  }
}));

function WeatherDisplay({ weatherData }: any) {
  const { name, weather, iconUrl, main, wind, sys, dt } = weatherData
  let loading = useSelector(selectLoading)
  return (
    <Card variant="elevation">
      {loading && <CModal><CircularProgress></CircularProgress></CModal>}
      <CardTop {...{ name, weather, sys,dt }}></CardTop>
      <Divider />
      <CardBottom {...{ main, wind, weather, iconUrl }}></CardBottom>
    </Card>
  )
}

function CardTop({ name, sys, dt }: any) {
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
function getTime(timestamp: number){
  const date = new Date(timestamp * 1000)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return `${days[date.getDay()]},  ${date.toLocaleTimeString()}`

}

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[2],
    fontSize: '0.8em',
  },
}))(Tooltip);

function CardBottom({ main, wind, weather, iconUrl }: any) {
  const classes = useStyles()
  return (
    <CardContent className={classes.cardTop}>
      <div className="left">
        <img src={iconUrl} alt="Weather Icon" />
        <div className='weather-caption'>
          <Typography color="primary">
            {weather[0].description}
          </Typography>

          <LightTooltip title={`Feels like ${main.feels_like} °C`}>
            <div className={classes.temp}>
              <Typography variant="h3" component="span" >
                {main.temp}
              </Typography>
              <Typography component="span" variant="h5" >°C</Typography>
            </div>
          </LightTooltip>
        </div>
      </div>
      <div className="right">
        <List className={classes.list}>
          <ListItem>
            <Typography >
              Pressure: {main.pressure} hPa
          </Typography>
          </ListItem>
          <ListItem>
            <Typography >
              Wind: {(wind.speed * 3.6).toFixed(1)} km/h
          </Typography>
          </ListItem>
          <ListItem>
            <Typography >
              Humidity: {main.humidity} %
         </Typography>
          </ListItem>
        </List>
      </div>
    </CardContent>
  )
}
export default WeatherDisplay