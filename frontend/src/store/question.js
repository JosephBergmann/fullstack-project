import csrfFetch from "./csrf";

export const SET_QUESTION = 'question/RECEIVE_QUESTION';
const SET_QUESTIONS = 'question/SET_QUESTIONS';
const REMOVE_QUESTION = 'question/REMOVE_QUESTION';
const ADD_QUESTION = 'question/ADD_QUESTION';
const ADD_VOTE = 'vote/SET_VOTE';
const REMOVE_VOTE = 'vote/REMOVE_VOTE';

const setQuestion = (payload) => ({
    type: SET_QUESTION,
    payload
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

export const fetchQuestions = (query) => async dispatch => {
    debugger
    const response = await csrfFetch(`/api/questions/?query=${encodeURIComponent(query)}`)
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
    const {title, body, posterId} = question;
    const response = await csrfFetch(`/api/questions`,
    {
        method: `POST`,
        body: JSON.stringify({title, body, posterId})
    })
    const data = await response.json();
    dispatch(addQuestion(data));
    return response;
}

const questionsReducer = (oldState = {}, action) => {
    let state = {...oldState}
    // let newState = {...oldState};
    switch(action.type){
        case SET_QUESTIONS:
            debugger
            console.log(action.questions)
                if (action.questions){
                    state = {}
                    action.questions.forEach(question => {
                        state = {...state, [question?.question.id]: question.question}
                        // state = {...state, [question.id]: question}
                    
                    });
                }
            return state
        case SET_QUESTION:
            // state.question = action.question;
            return {...state, [action.payload.question.id]: action.payload.question}
            // return {...state, ...action.payload.question}
        case REMOVE_QUESTION:
            let {[action.questionId]: _remove, ...newState } = state;
            return newState;
        case ADD_QUESTION:
            //CONSIDER DELETION
            // return {...state, [action.question.id]: action.question}
            // This seems like it resolves the issue where a duplicate question appears
            // on the show page initially. Consider revisiting
            return {...state}
        case ADD_VOTE:
            debugger
            // return {...state}
            let updatedScore = action.payload.value ? 1 : -1
            // state = {...state, [action.question_id].score: state.score + updatedScore }
            state[action.payload.question_id].score = state[action.payload.question_id].score + updatedScore;
            return state;
            // return { ...state, [action.payload.vote.userId]: action.payload.vote}
        case REMOVE_VOTE:
            // let oldScore = oldState.questionsReducer.votes
            // newState = {...state}
            // const {[action.voteId]: _rem, ...theState} = state;
            // return theState;

            //!!!!!
            state[action.objId].score = state[action.objId].score - 1;
            // delete state[action.objId].votes[action.voteId];

            return state;
        default:
            return state;
    }
}
export default questionsReducer;