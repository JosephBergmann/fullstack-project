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
        const {questionId, answerId, posterId} = vote;
        const response = await csrfFetch(`/api/votes`,
        {
            method: `POST`,
        body: JSON.stringify({questionId, answerId, posterId})
        })
    const data = await response.json();;
        dispatch(addVote(data));
        return response;
}

const votesReducer = (oldState = {}, action) => {
    let state = oldState;
    switch(action.type){
        
    }
}