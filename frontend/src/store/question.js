import csrfFetch from "./csrf";

const SET_QUESTION = 'question/RECEIVE_QUESTION';
const SET_QUESTIONS = 'question/SET_QUESTIONS';
const REMOVE_QUESTION = 'question/REMOVE_QUESTION';
const ADD_QUESTION = 'question/ADD_QUESTION';

const setQuestion = (question) => ({
    type: SET_QUESTION,
    question
})

const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    questions
})

const removeQuestion = (questionId) => ({
    type: REMOVE_QUESTION,
    questionId
})

const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question
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

export const deleteQuestion = (questionId) => async dispatch => {
    const response = await csrfFetch(`/api/questions/${questionId}`, {method: `DELETE`})
    const data = await response.json();

    dispatch(removeQuestion(response.question.id));
    return response;
}




export const createQuestion = (question) => async dispatch => {
    const response = await csrfFetch(`/api/questions`,
    {
        method: `POST`,
        body: JSON.stringify(question)
    })
    const data = await response.json();
    dispatch(createQuestion(data))
    return response;
}

const questionsReducer = (oldState = {}, action) => {
    let state = oldState
    switch(action.type){
        case SET_QUESTIONS:
            return {...state, ...action.questions};
        case SET_QUESTION:
            // state.question = action.question;
            return {...state, question: action.question}
        case REMOVE_QUESTION:
            const {[action.questionId]: _remove, ...newState } = state;
            return newState;
        case ADD_QUESTION:
            return {...state, [action.question.id]: action.question}
        default:
            return state;
    }
}
export default questionsReducer;