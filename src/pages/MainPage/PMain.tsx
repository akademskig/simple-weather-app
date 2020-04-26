import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LMain } from '../../layouts/LMain';
import { PMainContent } from './PMainContent';
import { fetchWeatherStart } from '../../redux/weather/weather.actions';
import { requestRate } from '../../config';

class PMain extends Component<{ startApp: () => void }>{

  intervalId = 0
  componentDidMount() {
    const { startApp } = this.props
    startApp()
    this.intervalId = setInterval(startApp, requestRate)
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  componentDidCatch(err: Error){
    console.error(err)
    clearInterval(this.intervalId)
  }
  render() {
    return (
      <LMain>
        <PMainContent></PMainContent>
      </LMain>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  startApp: () => dispatch(fetchWeatherStart()),
})

export default connect(null, mapDispatchToProps)(PMain);
