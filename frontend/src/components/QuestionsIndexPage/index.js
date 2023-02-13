import React, { useState } from 'react';
import * as questionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import QuestionList from './QuestionsList';

const QuestionsIndexPage = () => {
    const dispatch = useDispatch();
    // useEffect(
    //     useDispatch(fetchQuestions)
    // )
    // const questions = useSelector(state => Object.values(state.questions))
    return(
        <QuestionList />
    )
}

export default QuestionsIndexPage