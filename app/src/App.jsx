import './App.css'

import React from 'react';
import Welcome from './components/Welcome';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Foo"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

export default App
