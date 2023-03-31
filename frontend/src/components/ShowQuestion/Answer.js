const Answer = ({answer}) => {
    console.log(answer)
    return (
        <div className="answer">
            <h3>{answer.poster}</h3>
            <p>{answer.body}</p>
        </div>
    )
}
export default Answer;