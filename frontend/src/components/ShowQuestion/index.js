import { useParams } from "react-router-dom"
import { useEffect } from "react"
import * as questionActions from '../../store/question.js'
import { useDispatch, useSelector } from "react-redux"
const ShowQuestion = () => {
    const dispatch = useDispatch();
    const question = useSelector(state => {
        return state.questionsReducer.question})

    const { questionId } = useParams();
    //use effect dispatch request to get the specific question and its answers
    useEffect( () => {
        dispatch(questionActions.fetchQuestion(questionId))
    }, [dispatch, questionId])
    // debugger
    
    // debugger

    if (!question){
        return <div>Loading</div>
    }

    debugger
    return (
        // <h1>hi</h1>
        <>
            <div className="question-header">
                <h1>{question.question.title}</h1>
                <div>Asked {question.question.createdAt}</div>
                <div>Modified {question.question.updatedAt}</div>
            </div>
            {/* <div className="question-body"> */}
                <div className="votes"></div>
                <p>{question.question.body}</p>
            {/* </div> */}
        </>
    )
}

export default ShowQuestion;