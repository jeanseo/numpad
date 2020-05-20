import React, {Component} from 'react';
import {connect} from "react-redux";

class Score extends Component{

    render(){
        const {questions, score} = this.props.calcul;
        return(
            <div className="card">
                <ul className={"list-group list-group-flush"}>
                    <li className={"list-group-item"}>
                        Nombre de question{questions>1?'s':null} restante{questions>1?'s':null}: {questions}
                    </li>
                    <li className={"list-group-item"}>Score: {score}</li>
                </ul>
            </div>
        )
    }



}
const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {};

export default connect(mapStateToProps, mapDispatchToProps)(Score)
