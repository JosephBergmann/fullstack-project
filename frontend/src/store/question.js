import csrfFetch from "./csrf";

const SET_QUESTION = 'question/RECEIVE_QUESTION';
const SET_QUESTIONS = 'question/SET_QUESTIONS';

const setQuestion = (questionId) => ({
    type: SET_QUESTION,
    questionId
})

const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    questions
})

export const fetchQuestions = () => async dispatch => {
    const response = await csrfFetch(`/api/questions/`)
    const data = await response.json();
    dispatch(setQuestions(data));
    return response
}

export const fetchQuestion = (questionId) => async dispatch => {
    const response = await csrfFetch(`/api/questions/${questionId}`)
    const data = await response.json();
    dispatch(setQuestion(data));
    return response;
}

const questionsReducer = (oldState = {}, action) => {
    let state = oldState
    switch(action.type){
        case SET_QUESTIONS:
            return {...state, ...action.questions};
        case SET_QUESTION:
            state.question = action.question;
            return {...state}
        default:
            return state;
    }
}
export default questionsReducer;