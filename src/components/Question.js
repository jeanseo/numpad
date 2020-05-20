import React, {Component} from 'react';

import Pad from "./Pad";
import {connect} from "react-redux";
import Message from "./Message";
import Score from "./Score";
import {getFirstQuestion} from "../actions/actions-types";
let timer = null;
class Question extends Component {


    constructor(props) {
        super(props);
        this.state = {
            displaySuccess : false
        };


    }

    componentDidMount() {
        const {getFirstQuestion}= this.props;
        const {state} = this.props.calcul;
        console.log(state);
        getFirstQuestion();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {questions, totalQuestions, answerMessage} = this.props.calcul;

        if(prevProps.calcul.answerMessage!== answerMessage && questions!==totalQuestions){
            console.log('on affiche le display');
            this.setState({displaySuccess: true});
            timer = setTimeout(()=>this.setState({displaySuccess: false}),3000)
        }

    }

    componentWillUnmount() {
        clearTimeout(timer);
    }

    render() {

        const {result, question, questions, answerMessage, totalQuestions} = this.props.calcul;

        console.log(result);

        let message;

        if(questions === totalQuestions){
            message = `Vous avez ${questions} multiplications à faire. Utilisez les touches du clavier pour
            répondre. Bonne chance`
        }
        else if(answerMessage.correctAnswer) {
            message = `Super! C'est la bonne réponse : ${answerMessage.question.question} ${answerMessage.question.answer}`;
        }
        else {
            message = `Mauvaise réponse, la bonne réponse était : ${answerMessage.question.question} ${answerMessage.question.answer}`;
        }

            return (
                <React.Fragment>
                    <div className={"container"}>
                        <header>
                            <h1>Calcul mental!</h1>
                        </header>
                        <main>
                            <div className={"row"}>
                                <div className={"col-8"}>
                                    { this.state.displaySuccess &&
                                    <Message color={answerMessage.correctAnswer?'success':'danger'}>
                                        {answerMessage.correctAnswer?'Bravo!':'Raté...'}
                                    </Message>
                                    }
                                    <Message>{message}</Message>
                                    <Message>Calculez: {question.question} {result}</Message>
                                    <Pad/>
                                </div>
                                <div className={"col-4"}>
                                    <Score/>
                                </div>
                            </div>

                        </main>
                    </div>
                </React.Fragment>

            );
        }





}


const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {getFirstQuestion};

export default connect(mapStateToProps, mapDispatchToProps)(Question)
