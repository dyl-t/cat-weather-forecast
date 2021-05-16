
import { useState } from 'react';

const useWeatherClient = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = 'https://api.troposphere.io/';

  const [locationsLoading, setLocationsLoading] = useState(false);
  const [forecastLoading, setForecastLoading] = useState(false);

  // load cities from troposphere API, and return an array with relevant information
  const searchLocation = async name => {
    try {
      setLocationsLoading(true);
      const response = await fetch(`${BASE_URL}place/name/${name}?token=${API_KEY}`);
      const json = await response.json();
      const data = json.data; 

      return data.map(place => ({
        id: place.id,
        latitude: place.latitude,
        longitude: place.longitude,
        name: place.name,
        country: place.country,
      }));
    } catch {
      return [];
    } finally {
      setLocationsLoading(false);
    }
  }
  
  // get weather data for supplied coordinates and return only the 7 day forecast 
  const getForecast = async coords => {
    try {
      setForecastLoading(true);
      const response = await fetch(`${BASE_URL}forecast/${coords}?token=${API_KEY}`);
      const json = await response.json();
      const daily = json.data.daily; 

      return daily.map((day, i) => ({
        id: i,
        date: new Date(Date.parse(day.time)),
        type: day.type,
        temperature: day.temperature,
      }));
    } catch {
      return [];
    } finally {
      setForecastLoading(false);
    }
  }

  return { 
    searchLocation, 
    locationsLoading, 
    getForecast, 
    forecastLoading 
  };
}

export default useWeatherClient;