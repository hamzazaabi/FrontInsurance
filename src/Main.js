import React, { Component } from "react";
import  Home from './Home/Home'
class Main extends Component {
    render() {
        return (
            <div>
            <h1>hello From Main component</h1>
                <p>--------MAIN----------</p>
                <Home />
                <p>---------MAIN---------</p>
            </div>
        );
    }
}
export  default  Main;
