import React, { useRef, useEffect, useState } from 'react';

import useWeatherClient from '../../helpers/weatherClient'
import TEXT from '../../constants/text'
import './CityList.scss';

// renders the list of cities retrieved from the API
// sets the selected one when clicked
const CityList = ({cityName, setCoords}) => {
  const { searchLocation, locationsLoading } = useWeatherClient();
  const selectedRef = useRef(null);
  const [ cities, setCities ] = useState([]);

  // reset the style of the selected city
  const resetSelected = () => {
    if (selectedRef.current) {
      selectedRef.current.style.color = 'black';
    }
  };

  // change the colour of the selected city
  const buttonClick = evt => {
    resetSelected();
    selectedRef.current = evt.currentTarget;
    selectedRef.current.style.color = 'green';
    setCoords(evt.currentTarget.value);
  };

  useEffect(() => {
    const getCities = async () => {
      if (cityName) {
        resetSelected();
        setCities(await searchLocation(cityName)); 
      }
    };
    getCities();
  }, [cityName])

  const renderListItems = () => {
    return cities?.length ? cities.map(city => 
      <li key={city.id}>
        <button value={`${city.latitude},${city.longitude}`} onClick={buttonClick}>{`${city.name}, ${city.country}`}</button>
      </li>) : <li>{TEXT.NO_RESULTS_MSG}</li>
  }

  return cityName ? <div className='city-list'>
    <label className='city-list__label'>{TEXT.SELECT_CITY_LABEL}</label>
    <ul>
      {!locationsLoading ? renderListItems() : <li>{TEXT.LOADING_MSG}</li>}
    </ul>
  </div> : null;
}

export default CityList;