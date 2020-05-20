import React, {Component} from 'react';
import './ButtonNumber.css';

import {connect} from "react-redux";
import {sendNumber} from "../actions/actions-types";

class ButtonNumber extends Component {

    render() {
        const {value} = this.props;

        return (
            <button className="btn btn-dark"
                    onClick={() => this.props.sendNumber(value)}><h2>{value}</h2></button>
        )
    }
}

const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {sendNumber};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonNumber)

