const getURL = id => `https://media.giphy.com/media/${id}/source.gif`;

const getBasedOnTemperature = temp => {
  if (temp > 20) {
    return getURL('ToMjGppLes0ENI5osCc');
  } else if (temp > -10) {
    return getURL('gB4KWtd3uSsJq');
  } else {
    return getURL('l0NwscKPAiPjFcixG');
  }
}

// pass in a string describing weather conditions, and return a GIPHY image link with a related image
// each option has passes in a GIPHY id to construct a full image URL
const getImageFromWeatherType = dayData => {
  switch (dayData.type) {
    case 'clear':
    case 'partly-cloudy':
      return getBasedOnTemperature(dayData.temperature); // weather types 'clear' and 'partly-cloudy' image is based on temperature instead
    case 'cloudy':
    case 'fog':
    case 'mist':
    case 'dust':
      return getURL('xfleD6ByCmgta');
    case 'rain':
    case 'drizzle':
    case 'sleet':
    case 'rain-showers':
    case 'rain-freezing':
    case 'rain-snow-shower':
    case 'thunderstorm':
      return getURL('v51HcJWdhAemA');
    case 'snow':
    case 'snow-shower':
    case 'snow-hail':
    case 'hail':
    case 'snowdrifting':
      return getURL('xfs2eBhQ6ujgA');
    case 'sandstorm':
      return getURL('12bpEjD05ac2IM');
    default:
      return getURL('wKQRIoFXsQIGA');
  }
}

export default getImageFromWeatherType;