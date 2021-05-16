import React, { useState, useEffect } from 'react';

import DayEntry from '../DayEntry';

import TEXT from '../../constants/text'
import useWeatherClient from '../../helpers/weatherClient'
import './DayGrid.scss';

// parent component for every forecast entry
// handles getting the weather data based on supplied coordinates
const DayGrid = ({latLong, numDays, reset}) => {
  const { getForecast, forecastLoading } = useWeatherClient();
  const [weatherDays, setWeatherDays] = useState([]);

  useEffect(() => {
    const getWeatherData = async () => {
      if (numDays && latLong) {
        setWeatherDays(await getForecast(latLong)); 
      }
    };
    getWeatherData();
  }, [latLong])

  const renderGrid = () => {
    return weatherDays?.length && numDays ? weatherDays
      .map((day, i) => i < numDays ? <DayEntry key={day.id} dayData={day}/> : null) : null;
  }

  return <div className='day-grid__outer'>
    {!forecastLoading ? renderGrid() : <div>{TEXT.LOADING_MSG}</div>}
    {!forecastLoading ? <button className='day-grid__button' onClick={reset}>{TEXT.RESET_MSG}</button> : null}
  </div>
}

export default DayGrid;