import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';


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
        <Display result={result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
