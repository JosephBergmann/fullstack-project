import { useParams } from "react-router-dom"

const ShowQuestion = (question) => {
    const {questionId} = useParams()
    //use effect dispatch request to get the specific question and its answers
    return (
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
        </>
    )
}