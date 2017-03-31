import React, { Component } from 'react';
import CSSModule from 'react-css-modules';
import styles from'./App.css';

@CSSModule(styles, {allowMultiple: true})

class App extends Component {
  render() {
    return (
      <div styleName="App">
        hello
      </div>
    );
  }
}

export default App;
