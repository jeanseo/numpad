import {SEND_SCORE, GET_HIGHSCORES} from '../constants/actions';



const stateInit = {
    player: {
        name: '',
        highScore: null
    },
    highScores:[]
};

export default (state = stateInit, action = {}) => {


    switch ( action.type) {
        case SEND_SCORE:
            console.log('envoi du score');
            return {state};

        case GET_HIGHSCORES:
            console.log('get highscore list', action.payload);
            return {...state, highScores: action.payload};

        default:
            return state;
    }

}
