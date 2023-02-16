import Answer from "./Answer"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const AnswersList = () => {
    const {questionId} = useParams();
    const answers = useSelector (state => {
        let allAnswers = Object.values(state.answersReducer)
        // debugger
        return allAnswers.map(answer => {
            // debugger
            if (answer.questionId === parseInt(questionId))
            return answer;
        })
    })

    // const answerList = answers.map(answer => <Answer key={answer.id} answer={answer}/>)
    // debugger
    return (
        <div className="answer-list">
            {answers.map(answer => <Answer key={answer.id} answer={answer}/>)}
        </div>
    )
}

export default AnswersList;