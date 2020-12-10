/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import ReactDOM from 'react-dom';


// start the Stimulus application
import './bootstrap';

import React, {Component} from 'react';
import NamePhoneContextProvider, {NamePhoneContext} from "./contexts/NamePhoneContext";
import NamePhoneTable from "./components/NamePhoneTable";
import {CssBaseline} from "@material-ui/core";

class App extends Component {
    render() {
        return (
            <div>
                <NamePhoneContextProvider>
                    <CssBaseline>
                        <NamePhoneTable/>
                    </CssBaseline>
                </NamePhoneContextProvider>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
// export default App;