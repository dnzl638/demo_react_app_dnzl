import './App.css'

import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="3AKIFT"/>
            <Counter></Counter>
            <SharedCounter></SharedCounter>
            { /* Change code above this line */ }
        </div>
    );
  }
};

export default App
