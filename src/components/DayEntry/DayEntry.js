import React from 'react';

import TEXT from '../../constants/text'
import getImageFromWeatherType from '../../helpers/imageHelper'
import { getFormattedDate } from '../../helpers/dateHelpers'
import { formatWeatherTypeForDisplay } from '../../helpers/stringHelpers'
import './DayEntry.scss';

// the entry for a single day in the provided forecast range
const DayEntry = ({dayData}) => {
  return <div className='day-entry__outer'>
    <label className='day-entry__label'>{getFormattedDate(dayData.date)}</label>
    <img alt='day' className='day-entry__image' src={getImageFromWeatherType(dayData)}/>
    <span className='day-entry__info'>{formatWeatherTypeForDisplay(dayData.type)}</span>
    <span className='day-entry__info'>{`${TEXT.TEMPERATURE_LABEL} ${Math.round(dayData.temperature)}${TEXT.CELCIUS}`}</span>
  </div>
}

export default DayEntry;