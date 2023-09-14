import csrfFetch from "./csrf";
import { SET_QUESTION } from "./question";
const ADD_ANSWER = 'answer/ADD_ANSWER';
const addAnswer = (answer) => ({
    type: ADD_ANSWER,
    answer
})

export const createAnswer = (answer) => async dispatch => {
    const {posterId, questionId, body} = answer;
    const response = await csrfFetch(`/api/answers`,
    {
        method: `POST`,
        body: JSON.stringify({posterId, questionId, body})
    })
    
    const data = await response.json();
    dispatch(addAnswer(data));
    return response;
}
const answersReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_ANSWER:
            return {...state, ...action.answer.answer}
        case SET_QUESTION:
            return {...state, ...action.payload.answers}
        default:
            return state
    }
} 

export default answersReducer;