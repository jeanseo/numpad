import {DELETE_NUMBER, SEND_NUMBER, CREATE_FIRST_QUESTION, CHECK_RESULT, RESET_GAME} from '../constants/actions';
import {multiplication} from '../utils/multiplication.js'

const numberQuestions = 1;
const initialAnswerMessage = {
    question:{
        question:'',
            result:''},
    correctAnswer: null
};

const stateInit = {
    result: '',
    questions: numberQuestions,
    totalQuestions: numberQuestions,
    score:0,
    question :{
        question:'',
        result:''
    },
    answerMessage:initialAnswerMessage

};

export default (state = stateInit, action = {}) => {

    let newQuestion;

    switch ( action.type) {
        case SEND_NUMBER:
            return {...state,result:parseInt(state.result.toString().concat(action.payload))};

        case DELETE_NUMBER:
            console.log('delete number');
            return {...state,result:''};

        case CREATE_FIRST_QUESTION:
            newQuestion = multiplication();
            console.log('créer une question', newQuestion);
            return {...state, question: newQuestion};

        case CHECK_RESULT:
            console.log('Vérifier la réponse', state.result==state.question.answer);
            const question = state.question;
            const isCorrect = (state.result===state.question.answer);

            return {...state, answerMessage: {question: question, correctAnswer: isCorrect},
                question: multiplication(),
                score: isCorrect? state.score +1 : state.score,
                questions: state.questions -1,
                result: ''
            };

        case RESET_GAME:
            console.log('reset game');
            return {...state, questions:numberQuestions,
                question: multiplication(),
                score: 0,
                answerMessage:initialAnswerMessage,
                result:''
            };


        default:
            return state;
    }

}
