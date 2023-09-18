import csrfFetch from "./csrf";
import { SET_QUESTION } from "./question";

const ADD_VOTE = 'vote/SET_VOTE';
const REMOVE_VOTE = 'vote/REMOVE_VOTE';
const CHANGE_VOTE = 'vote/CHANGE_VOTE';
const RECEIVE_VOTES = 'vote/RECEIVE_VOTES';

const addVote = (payload) => ({
    type: ADD_VOTE,
    payload
})

const removeVote = (voteId, objId) => ({
    type: REMOVE_VOTE,
    voteId,
    objId
})

const changeVote = (payload) => ({
    type: CHANGE_VOTE,
    payload
})

export const createVote = (vote) => async dispatch => {
        const {questionId, answerId, userId, value, questionComment} = vote;
        const response = await csrfFetch(`/api/votes`,
        {
            method: `POST`,
            body: JSON.stringify({questionId, answerId, userId, value, questionComment})
        })
    const data = await response.json();
        dispatch(addVote(data));
        return response;
}

export const updateVote = (vote) => async dispatch => {
    const {id, questionId, answerId, userId, value, questionComment} = vote;
    const response = await csrfFetch(`/api/votes/${id}`,
    {
        method: `PATCH`,
        body: JSON.stringify({questionId, answerId, userId, value, questionComment})
    })

    const data = await response.json();
    dispatch(changeVote(data))
    return response;
}

export const deleteVote = (voteId, objId) => async dispatch => {
    const response = await csrfFetch(`/api/votes/${voteId}`,
        {
            method: `DELETE`,
        }
    )
    const data = await response.json();
    dispatch(removeVote(voteId, objId));
    return response;
}

 const votesReducer = (oldState = {}, action) => {
    let state = oldState;
    switch(action.type){
        //MARK FOR DELETION
        // case RECEIVE_VOTES:
        //     action.votes.forEach(question => {
        //         // debugger
        //         // console.log(question.question.id);
        //         state = {...state, [question?.question.id]: question.question}
        //         // state = {...state, [question.id]: question}
        //     });
        //     return state
        //     return {...state}
        // case ADD_VOTE: 
        //     return {...state};
        // case REMOVE_VOTE:
        //     return {...state};
        // case CHANGE_VOTE:
        //     return {...state};
        case SET_QUESTION:
            return {...action.payload.votes, ...state}
        case REMOVE_VOTE:
            delete state[action.voteId];
            return state;
        case ADD_VOTE:
            return {...state, [action.payload.id]: action.payload}
        case CHANGE_VOTE:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }
}

export default votesReducer;