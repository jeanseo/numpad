import {
    SEND_NUMBER,
    DELETE_NUMBER,
    CREATE_FIRST_QUESTION,
    CHECK_RESULT,
    RESET_GAME,
    SEND_SCORE, GET_HIGHSCORES
} from "../constants/actions";

export const sendNumber = (payload)=>{
    return {
        type : SEND_NUMBER, payload
    }
};

export const deleteNumber = ()=>{
    return {
        type : DELETE_NUMBER,
    }
};

export const getFirstQuestion = ()=>{
    return {
        type : CREATE_FIRST_QUESTION,
    }
};

export const submitAnswer = ()=>{
    return {
        type : CHECK_RESULT,
    }
};

export const resetGame = ()=>{
    return {
        type : RESET_GAME,
    }
};

export const submitScore = (payload)=>{
    return {
        type : SEND_SCORE, payload
    }
};

export const getHighScores = (payload)=>{
    return {
        type : GET_HIGHSCORES, payload
    }
};

export const fetchHighScoresAsync = () =>{

    const highscores = [
        {name: "Jean-Louis", highScore: 10},
        {name: "Jean-Luc", highScore: 8},
        {name: "Jean-Charles", highScore: 8},
        {name: "Jean-Claude", highScore: 7},
        {name: "Jean-Michel", highScore: 5}
    ];

    return dispatch => {

        setTimeout(()=>{
            console.log('entrée dans le dispatch');
            dispatch(getHighScores(highscores))
        },2000);
    }
};