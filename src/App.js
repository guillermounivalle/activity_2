//Import Libraries

import React, {Component} from 'react';
import './App.css';

class App extends Component{
    constructor(props){
        super(props)

        this.state ={
            tasks: [],
            newTask:{}
        };
    }


    render(){
        return(
            <div>Primer paso</div>
        );
    }
}

export default App;
