import React, {
    Component
} from 'react';
import CSSModule from 'react-css-modules';
import styles from './App.css';
import http from './lib/http.client';

@CSSModule(styles, {
    allowMultiple: true
})

class App extends Component {
    componentDidMount() {
        http.get('json/data.json').then((data) => {
            console.log(data);
        })
    }
    render() {
        return (
             <div styleName="App" >
            hello
            </div>
        );
    }
}

export default App;
