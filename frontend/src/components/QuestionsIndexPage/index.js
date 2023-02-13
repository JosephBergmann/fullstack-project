import React, { useState, useEffect } from 'react';
import * as questionActions from '../../store/question';
import { useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import QuestionList from './QuestionsList';

const QuestionsIndexPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(questionActions.fetchQuestions())
        // console.log('hi')
}, [])
    const questions = useSelector(state => Object.values(state.questionsReducer))
    return(
        <QuestionList />
    )
}

export default QuestionsIndexPage