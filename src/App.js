import React, {Component} from 'react';

import './App.css';

import GameOver from "./components/GameOver";
import Question from "./components/Question";
import {connect} from "react-redux";

class App extends Component {

    render() {
        const {questions} = this.props.calcul;

        if(questions>0)
            return (<Question/>);

        return(
        <div className={"container"}>
            <GameOver/>
        </div>
        )
    }


}


const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
