import React, {Component} from 'react';
import ButtonNumber from "./ButtonNumber";
import {connect} from "react-redux";
import {deleteNumber, resetGame, submitAnswer} from "../actions/actions-types";

class Pad extends Component{

    render(){
        const {deleteNumber, submitAnswer, resetGame} = this.props;
        const {result, questions, totalQuestions} = this.props.calcul;

        return(
            <div>
                <div className="row">
                    <ButtonNumber value={1}/><ButtonNumber value={2}/><ButtonNumber value={3}/>
                </div>
                <div className="row">
                    <ButtonNumber value={4}/><ButtonNumber value={5}/><ButtonNumber value={6}/>
                </div>
                <div className="row">
                    <ButtonNumber value={7}/><ButtonNumber value={8}/><ButtonNumber value={9}/>
                </div>
                <div className="row">
                    <ButtonNumber value={0}/>
                </div>
                <div className="row">
                    <button className="btn btn-primary"
                            disabled={!(parseInt(result)>=0)}
                            onClick={submitAnswer}
                    >Go!</button>
                    <button className="btn btn-danger"
                            disabled = {!(parseInt(result)>=0)}
                            onClick={deleteNumber}>CLR</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger"
                            disabled = {(questions === totalQuestions)}
                            onClick={resetGame}>Restart Game</button>
                </div>
            </div>
        )
    }



}
const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {deleteNumber, submitAnswer, resetGame};

export default connect(mapStateToProps, mapDispatchToProps)(Pad)
