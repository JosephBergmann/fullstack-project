import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../../store/question.js';
import { useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import QuestionList from './QuestionsList';

const QuestionsIndexPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuestions());
}, [])

    const questions = useSelector(state => Object.values(state.questionsReducer))
    return(
        // <h1>hi</h1>
        <QuestionList questions={questions} />
    )
}

export default QuestionsIndexPage;