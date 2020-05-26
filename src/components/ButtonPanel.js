import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const white = 'rgb(224, 224, 224)';
const orange = 'rgb(189, 120, 8)';

const groups = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => (
    clickHandler(buttonName)
  );

  return (
    <div className="btn-panel">
      {
        groups.map((group, i) => (
          <div key={group} className={`btn-group group-${i + 1}`}>
            {
              group.map(sym => (
                <Button
                  key={sym}
                  buttonName={sym}
                  color={group.indexOf(sym) === group.length - 1 ? orange : white}
                  wide={sym === '0'}
                  clickHandler={() => handleClick(sym)}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
