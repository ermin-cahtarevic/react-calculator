import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  return (
    <div>
      <div className='btn-group'>
        <Button buttonName='AC' />
        <Button buttonName='+/-' />
        <Button buttonName='%' />
        <Button buttonName='÷' />
      </div>
      <div className='btn-group'>
        <Button buttonName='7' />
        <Button buttonName='8' />
        <Button buttonName='9' />
        <Button buttonName='×' />
      </div>
      <div className='btn-group'>
        <Button buttonName='4' />
        <Button buttonName='5' />
        <Button buttonName='6' />
        <Button buttonName='-' />
      </div>
      <div className='btn-group'>
        <Button buttonName='1' />
        <Button buttonName='2' />
        <Button buttonName='3' />
        <Button buttonName='+' />
      </div>
      <div className='btn-group'>
        <Button buttonName='0' />
        <Button buttonName='.' />
        <Button buttonName='=' />
      </div>
    </div>
  );
}

export default ButtonPanel;
