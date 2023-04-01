import Answer from "./Answer"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { createAnswer } from "../../store/answer"

const AnswersList = () => {
    const {questionId} = useParams();
    const answers = useSelector (state => {
        let allAnswers = Object.values(state.answersReducer)

        return allAnswers.map(answer => {
            if (answer.questionId === parseInt(questionId))
            return answer;
        })
    })

    debugger
    const dispatch = useDispatch();
    useEffect(() => {
        // const unsubscribe = dispatch(createAnswer());
        // return () => unsubscribe();
        return dispatch(createAnswer())();
    }, [dispatch])

    // const answerList = answers.map(answer => <Answer key={answer.id} answer={answer}/>)

    return (
        <div className="answer-list">
            {answers.map((answer, idx, ele) => <Answer key={idx} answer={answer}/>)}
        </div>
    )
}

export default AnswersList;