import Answer from "./Answer"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

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
    // const answerList = answers.map(answer => <Answer key={answer.id} answer={answer}/>)

    return (
        <div className="answer-list">
            {answers.map((answer, idx, ele) => <Answer key={idx} answer={answer}/>)}
        </div>
    )
}

export default AnswersList;