import React, {Component} from 'react';
import {connect} from "react-redux";

class HighScores extends Component {


    render(){
        const {highScores} = this.props.score;
        if (highScores.length > 0)
            return(
                <div>
                    <h3>High scores</h3>
                    <ul className="list-group list-group-flush ">
                        {highScores.map((score,index)=>
                            <li className="list-group-item d-flex justify-content-between align-items-center"
                                key={index}>
                                {score.name} <span>{score.highScore}PTS</span>
                            </li>
                        )}
                    </ul>
                </div>
            );
        else
            return (
                <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
    }

}


const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  { };

export default connect(mapStateToProps, mapDispatchToProps)(HighScores)