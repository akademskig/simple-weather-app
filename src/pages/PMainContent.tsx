import React from 'react';
import { Paper, Card, CardContent, Typography, createStyles, makeStyles, Theme, Divider, List, ListItem } from '@material-ui/core';
import { selectWeatherData } from '../redux/weather/weather.selectors';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        maxWidth: '500px',
        minWidth: '250px',
        margin: 'auto',
    },
    cardTop: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '& .left, & .right': {
        },
        '& .right': {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            '& .weather-caption': {
                textTransform: 'capitalize',
                '& p':
                    { marginLeft: '0.5em' }
            },
            [theme.breakpoints.down(550)]: {
                width: '100%'
            }
        },
    },
    temp: {
        display: 'flex',
        '& .MuiTypography-h5': {
            paddingTop: '0.2em'
        }
    },
    list: {
        padding: 0,
        '& li': {
            paddingLeft: '0.5em',
            fontWeight: 'normal',
            paddingRight: '0.5em',
            '& p': {
                fontSize: '1.25rem'
            }
        }
    }
}));
export function PMainContent() {

    const classes = useStyles()
    const weatherData = useSelector(selectWeatherData)
    const { name, weather, iconUrl, main, wind, sys } = weatherData
    return (
        <Paper className={classes.paper}>
            <Card variant="elevation">
                <CardContent className={classes.cardTop}>
                    <div className="left">
                        <Typography variant="h5" component="h2" gutterBottom>
                            {name}, {sys.country}
                        </Typography>
                        <Typography variant="h6" color="primary" component="h2">
                            {weather[0].main}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                        </Typography>
                    </div>
                    <div className="right">
                        <img src={iconUrl} alt="Weather Icon" />
                        <div className='weather-caption'>
                            <Typography color="primary">
                                {weather[0].description}
                            </Typography>
                            <div className={classes.temp}>
                                <Typography variant="h3" component="span" >
                                    {main.temp}
                                </Typography>
                                <Typography component="span" variant="h5" >°C</Typography>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <Divider />
                <CardContent>
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
                </CardContent>
            </Card>
        </Paper>
    )
}