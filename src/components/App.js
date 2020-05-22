import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';
/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div id="app">
        <Display result={result.toString()} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
