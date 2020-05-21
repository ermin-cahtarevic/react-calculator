import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName }) => {
  return(
    <button className='button'>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;