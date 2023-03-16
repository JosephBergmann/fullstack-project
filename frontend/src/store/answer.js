import { SET_QUESTION } from "./question";

export const createAnswer = (question) => async dispatch => {
    
}
const answersReducer = (state = {}, action) => {
    switch(action.type){
        case SET_QUESTION:
            return {...state, ...action.payload.answers}
        default:
            return state
    }
} 

export default answersReducer;