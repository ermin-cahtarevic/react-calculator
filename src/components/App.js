import React from 'react';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
