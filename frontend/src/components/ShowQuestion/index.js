import { useParams } from "react-router-dom"
import { useEffect } from "react"
import * as questionActions from '../../store/question.js'
import { useDispatch, useSelector } from "react-redux"
import AnswersList from "./AnswersList.js"
import WriteAnswer from "./WriteAnswer.js"
import './ShowQuestion.css';

const ShowQuestion = () => {
    const dispatch = useDispatch();
    const { questionId } = useParams();
    const question = useSelector(state => {return state.questionsReducer[questionId]});
    const user = useSelector(state => {return state.sessionsReducer.user});
    console.log(user)
    //use effect dispatch request to get the specific question and its answers
    useEffect( () => {
        dispatch(questionActions.fetchQuestion(questionId))
    }, [dispatch, questionId])
    // debugger
    
    // debugger

    if (!question){
        return <div>Loading</div>
    }

    return (
        // <h1>hi</h1>
        <>
            <div className="question-header">
                <h1 className="question-title">{question.title}</h1>
                <div className="question-timestamp">Asked {question.createdAt}</div>
                <div className="question-timestamp">Modified {question.updatedAt}</div>
            </div>
            <div className="question-body">
                <div className="votes"></div>
                <p>{question.body}</p>
            </div>
            <div>
                {!user ? (<h2>Log in to Answer</h2>) : (<WriteAnswer />)}
            </div>
            <AnswersList />
        </>
    )
}

export default ShowQuestion;