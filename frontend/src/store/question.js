const RECEIVE_QUESTION = 'question/RECEIVE_QUESTION';
const RECEIVE_QUESTIONS = 'question/RECEIVE_QUESTION';

const receiveQuestion = (question) => ({
    type: RECEIVE_QUESTION,
    question
})

const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions
})

export const fetchQuestion = (questionId) => async dispatch => {
    /*NOTE 
        Not sure if its a good idea to use csrfFetch here. Return here if there is an error
    */
    const response = await csrfFetch(`/api/questions/${questionId}`)
}

const questionsReducer = (state = {}, action) => {

}