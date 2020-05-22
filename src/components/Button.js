import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ buttonName, color, wide }) => (
  <button 
    className="button" 
    type="button"
    style={{ 
      backgroundColor: color,
      width: wide ? '50%' : null, 
    }}
  >
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'rgb(189, 120, 8)',
  wide: false
};

export default Button;
