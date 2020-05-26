import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';
import calculate from '../logic/calculate';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const calculations = calculate({total, next, operation}, buttonName);

    this.setState({
      total: calculations.total,
      next: calculations.next,
      operation: calculations.operation,
    });
  }

  render() {
    const { total, next } = this.state;
    const result = next ? next : total;

    return (
      <div id="app">
        <Display result={ result  } />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
