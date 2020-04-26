
import React from 'react';
import { Typography, createStyles, makeStyles, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
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
}));

export default function CWeatherParametersList({ main, wind }: any) {
    const classes = useStyles()

    const msToKmh = (speed: number)=>{
        return (speed * 3.6).toFixed(1)
    }
    
    return (
        <List className={classes.list}>
            <ListItem>
                <Typography>
                    Pressure: {main.pressure} hPa
                </Typography>
            </ListItem>
            <ListItem>
                <Typography>
                    Wind: {msToKmh(wind.speed)} km/h
                </Typography>
            </ListItem>
            <ListItem>
                <Typography>
                    Humidity: {main.humidity} %
                </Typography>
            </ListItem>
        </List>
    )
}