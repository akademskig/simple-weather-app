import React from 'react';
import { Container } from '@material-ui/core';
import { selectWeatherData } from '../redux/weather/weather.selectors';
import { useSelector } from 'react-redux';

export function PMain() {

  const weatherData = useSelector(selectWeatherData)
    return (
        <Container>
         {JSON.stringify(weatherData)}
        </Container>
    )
}