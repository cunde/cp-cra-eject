import React, { Component } from 'react';
import CSSModule from 'react-css-modules';
import styles from'./App.css';

class App extends Component {
  render() {
      console.log(styles,'@styles');
    return (
      <div styleName="App">
        hello
      </div>
    );
  }
}

export default CSSModule(App, styles);
