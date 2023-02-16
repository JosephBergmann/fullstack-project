import Answer from "./Answer"

const AnswersList = (answers) => {
    const answerList = answers.answers.map(answer => <Answer key={answer.id} answer={answer} />)

    return (
        <div className="answer-list">
            {answerList}
        </div>
    )
}

export default AnswersList;