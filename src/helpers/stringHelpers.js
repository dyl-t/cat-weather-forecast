// remove dashes and capitalize the weather type for display
export const formatWeatherTypeForDisplay = type => {
    const noDash = type.replace('-', ' ')
    return noDash.charAt(0).toUpperCase() + noDash.slice(1);
};

export const validateNumericInput = input => /^[1-7]{1}$|^$/.test(input);