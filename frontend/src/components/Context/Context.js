import React, { Component } from 'react';
import info from '../../data/data.json'


export const Context = React.createContext();

export class ContextProvider extends Component {

    state = {
        users: info
    }

    render() {
        const {users} = this.state;
        return (
            <ContextProvider 
                value={{users}}>
                    {this.props.children}
            </ContextProvider>
        )
    }

}