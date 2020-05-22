import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = () => {
  const white = "rgb(224, 224, 224)";
  const orange = "rgb(189, 120, 8)"
  return (
    <div className="btn-panel">
      <div className="btn-group">
        <Button buttonName="AC" color={white} />
        <Button buttonName="+/-" color={white} />
        <Button buttonName="%" color={white} />
        <Button buttonName="÷" color={orange} />
      </div>
      <div className="btn-group">
        <Button buttonName="7" color={white} />
        <Button buttonName="8" color={white} />
        <Button buttonName="9" color={white} />
        <Button buttonName="×" color={orange} />
      </div>
      <div className="btn-group">
        <Button buttonName="4" color={white} />
        <Button buttonName="5" color={white} />
        <Button buttonName="6" color={white} />
        <Button buttonName="-" color={orange} />
      </div>
      <div className="btn-group">
        <Button buttonName="1" color={white} />
        <Button buttonName="2" color={white} />
        <Button buttonName="3" color={white} />
        <Button buttonName="+" color={orange} />
      </div>
      <div className="btn-group group-5">
        <Button buttonName="0" color={white} wide={true} />
        <Button buttonName="." color={white} />
        <Button buttonName="=" color={orange} />
      </div>
    </div>
  );
}

export default ButtonPanel;
