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
import {CssBaseline, IconButton} from "@material-ui/core";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

class App extends Component {
    render() {
        return (
            <div>
                <div className='topDiv'><h1><IconButton><ContactPhoneIcon style={{fill: "white"}}/></IconButton>My UT Phone Book!</h1></div>
                <NamePhoneContextProvider>
                    <CssBaseline>
                        <NamePhoneTable/>
                    </CssBaseline>
                </NamePhoneContextProvider>
                <br/><br/>
                <div className='bottomDiv'><h3><br/>Please Hire Me<br/><br/></h3></div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
// export default App;