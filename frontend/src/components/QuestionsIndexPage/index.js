import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../../store/question.js';
import { useDispatch, useSelector} from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import QuestionList from './QuestionsList';

const QuestionsIndexPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchQuestions());
}, [])

    const questions = useSelector(state => Object.values(state.questionsReducer))
    const currUser = useSelector(state => state.sessionsReducer.user)

    const handleClick = (e) => {
        e.preventDefault();
        
        if (currUser)
        {
            history.push('/questions/new')
        } else
        {
            history.push('/login')
        }
    }

    return(
        // <h1>hi</h1>
        <div>
            <h1>All Questions</h1>
            <button onClick={handleClick}>Ask Question</button>
            <QuestionList questions={questions} />
        </div>
    )
}

export default QuestionsIndexPage;