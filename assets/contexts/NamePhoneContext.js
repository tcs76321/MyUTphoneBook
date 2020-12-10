// import React, {Component} from 'react';
// import {createContext} from "react/cjs/react.production.min";
import React, {createContext} from 'react';

export const NamePhoneContext = createContext(undefined, undefined);

class NamePhoneContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namephones: [
                {name: 'John Doe'},
                {name: 'Tom Smith'},
            ],
        };
    }

    //create
    createNamePhone(event, namephone){
        event.preventDefault();

        let newData = [...this.state.namephones];
        newData.push(namephone);
        this.setState({
           namephones: newData,
        });
    }

    //read
    readNamePhone(){

    }

    //update
    updateNamePhone(){

    }

    //delete
    deleteNamePhone(){

    }

    render() {
        return (

            <NamePhoneContext.Provider value={{
                ...this.state,
                createNamePhone: this.createNamePhone.bind(this),
                updateNamePhone: this.updateNamePhone.bind(this),
                deleteNamePhone: this.deleteNamePhone.bind(this)
            }}>
                {this.props.children}
            </NamePhoneContext.Provider>
        );
    }
}

export default NamePhoneContextProvider;