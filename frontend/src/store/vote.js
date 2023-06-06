import csrfFetch from "./csrf";

const ADD_VOTE = 'vote/SET_VOTE';
const REMOVE_VOTE = 'vote/REMOVE_VOTE';
const CHANGE_VOTE = 'vote/CHANGE_VOTE';

const addVote = (payload) => ({
    type: ADD_VOTE,
    payload
})

const removeVote = (voteId) => ({
    type: REMOVE_VOTE,
    voteId
})

const changeVote = (payload) => ({
    type: CHANGE_VOTE,
    payload
})

export const createVote = (vote) => async dispatch => {
    debugger
        const {questionId, answerId, posterId, value} = vote;
        const response = await csrfFetch(`/api/votes`,
        {
            method: `POST`,
            body: JSON.stringify({questionId, answerId, posterId, value})
        })
    const data = await response.json();
        dispatch(addVote(data));
        return response;
}

export const updateVote = (vote) => async dispatch => {
    const {questionId, answerId, posterId, value} = vote;
    const response = await csrfFetch(`/api/votes`,
    {
        method: `UPDATE`,
        body: JSON.stringify({questionId, answerId, posterId, value})
    })

    const data = await response.json();
    dispatch(changeVote(data))
    return response;
}

export const deleteVote = (voteId) => async dispatch => {
    debugger
    const response = await csrfFetch(`/api/votes`,
    {
        method: `DELETE`,
        body: JSON.stringify(voteId)
    }
    )
    const data = await response.json();
}

const votesReducer = (oldState = {}, action) => {
    let state = oldState;
    switch(action.type){
        case ADD_VOTE: 
            return {...state};
        case REMOVE_VOTE:
            return {...state};
        case CHANGE_VOTE:
            return {...state};
        default:
            return state;
    }
}