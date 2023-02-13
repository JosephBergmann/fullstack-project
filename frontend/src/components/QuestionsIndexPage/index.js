import React, { useState } from 'react';
import * as questionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const QuestionsIndexPage = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => Object.values(state.questions))
}