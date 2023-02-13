import csrfFetch from "./csrf";

const ADD_QUESTION = 'question/RECEIVE_QUESTION';
const SET_QUESTIONS = 'question/SET_QUESTIONS';

const receiveQuestion = (question) => ({
    type: ADD_QUESTION,
    question
})

const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    questions
})

export const fetchQuestions = (questionId = 0) => async dispatch => {
    /*NOTE 
        Not sure if its a good idea to use csrfFetch here. Return here if there is an error
    */
    const response = await csrfFetch(`/api/questions/`)
    const data = await response.json();
    dispatch(setQuestions(data.questions));
    return response 
}

const questionsReducer = (oldState = {}, action) => {
    let state = oldState
    switch(action.type){
        case SET_QUESTIONS:
            return action.questions;
        default:
            return state;
    }
}
export default questionsReducer;