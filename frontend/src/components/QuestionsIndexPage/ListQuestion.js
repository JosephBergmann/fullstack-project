function ListQuestion({question}){
    const {title, body, author} = question
    console.log(question.question)
    return (
        <div className="list-item">
            <h2>{question.question.title}</h2>
            <p>{question.question.body}</p>
        </div>
        // <h2>hello</h2>
    )
}
export default ListQuestion;