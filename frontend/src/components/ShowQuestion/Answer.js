import Vote from "./vote";
const Answer = ({answer}) => {
    return (
        <div className="answer">
            <h3>{answer.poster}</h3>
            {answer.score}
            <Vote answerId={answer.id}/>
            <p>{answer.body}</p>
        </div>
    )
}
export default Answer;