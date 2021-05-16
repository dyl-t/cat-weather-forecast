import React from 'react';

import TEXT from '../../constants/text'
import cloudCatImage from '../../images/cloud_cat.jpg';
import './LogoImage.scss';

// display the logo image on the front form
const LogoImage = () => {
  return <div className='logo-image'>
    <img alt='logo' className='logo-image__image' src={cloudCatImage}/>
    <h1>{TEXT.TITLE}</h1>
  </div>;
}

export default LogoImage;