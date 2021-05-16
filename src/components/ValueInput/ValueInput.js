import React, { useRef, useState } from 'react';

import './ValueInput.scss';

// generic form input for entering and setting user entered values
const ValueInput = ({labelText, buttonText, setValue, validator}) => {
  const [inputValue, setInputValue] = useState('');
  const textRef = useRef(null);

  const buttonClick = () => setValue(inputValue);
  const inputChange = evt => {
    if (!validator || (validator && validator(evt.target.value))) {
      setInputValue(evt.target.value);
    }
  }

  return <div className='value-input'>
    <label className='value-input__label'>{labelText}</label>
    <div className='value-input__input-wrapper'>
      <input className='value-input__input' ref={textRef} onInput={inputChange} value={inputValue}/>
      <button className='value-input__button' onClick={buttonClick}>{buttonText}</button>
    </div>
  </div>;
}

export default ValueInput;