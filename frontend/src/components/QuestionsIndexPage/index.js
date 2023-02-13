import React, { useState } from 'react';
import * as questionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const QuestionsIndexPage = () => {
    const dispatch = useDispatch();
    useEffect(
        useDispatch(fetchQuestions)
    )
    // const questions = useSelector(state => Object.values(state.questions))
    return(
        <h1>hi</h1>
    )
}

export default QuestionsIndexPage