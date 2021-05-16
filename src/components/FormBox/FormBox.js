import React, { useState, useEffect } from 'react';

import DayGrid from '../DayGrid';
import CityList from '../CityList';
import LogoImage from '../LogoImage';
import ValueInput from '../ValueInput';

import TEXT from '../../constants/text'
import { validateNumericInput } from '../../helpers/stringHelpers'
import './FormBox.scss';

// parent component to manage state for all forms
// displays the form for city search and selection, as well as number of days to display
const FormBox = () => {
  const [currentCity, setCurrentCity] = useState('');
  const [latLong, setLatLong] = useState('');
  const [numDays, setNumDays] = useState(0);

  // reset the num days and city list if searched city changes
  useEffect(() => {
    setLatLong('');
    setNumDays(0);
  }, [currentCity])

  // reset num days if selected city changes
  useEffect(() => setNumDays(0), [latLong]);

  // reset all fields
  const resetForm = () => {
    setLatLong('');
    setNumDays(0);
    setCurrentCity('')
  }

  const renderFormPanel = () => {
    if (!numDays) {
      return <div className='form-box__outer'>
        <LogoImage/>
        <ValueInput labelText={TEXT.CITY_SEARCH_LABEL} buttonText={TEXT.SEARCH_MSG} setValue={setCurrentCity}/>
        {currentCity ? <CityList cityName={currentCity} setCoords={setLatLong}/> : null}
        {latLong ? <ValueInput labelText={TEXT.NUM_DAYS_LABEL} buttonText={TEXT.SUBMIT_MSG} setValue={setNumDays} validator={validateNumericInput}/> : null}
      </div>
    }
  }

  const renderDayGrid = () => {
    if (numDays && latLong) {
      return <DayGrid latLong={latLong} numDays={+numDays} reset={resetForm}/>;
    }
  }

  return <>
    {renderFormPanel()}
    {renderDayGrid()}
  </>
}

export default FormBox;