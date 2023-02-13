function ListQuestion({question}){
    const {title, body, author} = question

    return (
        <div className="list-item">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
export default ListQuestion;