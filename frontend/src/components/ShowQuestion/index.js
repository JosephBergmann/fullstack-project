import { useParams } from "react-router-dom"
import { useEffect } from "react"
import * as questionActions from '../../store/question.js'
import { useDispatch, useSelector } from "react-redux"
import AnswersList from "./AnswersList.js"

const ShowQuestion = () => {
    const dispatch = useDispatch();
    const { questionId } = useParams();
    const question = useSelector(state => {
        return state.questionsReducer[questionId]})
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
                <h1>{question.title}</h1>
                <div>Asked {question.createdAt}</div>
                <div>Modified {question.updatedAt}</div>
            </div>
            <div className="question-body">
                <div className="votes"></div>
                <p>{question.body}</p>
            </div>
            <AnswersList />
        </>
    )
}

export default ShowQuestion;