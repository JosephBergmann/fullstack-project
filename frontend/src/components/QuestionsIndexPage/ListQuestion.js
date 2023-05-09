import { NavLink } from "react-router-dom";

function ListQuestion({question}){
    const {votes, title, body, author} = question
    console.log(question.question)
    return (
        <div className="list-item">
            <div className="votes">
                
            </div>
            <NavLink to={`/questions/${question.question.id}`}>{question.question.title}</NavLink>
            <p>{question.question.body}</p>
        </div>
        // <h2>hello</h2>
    )
}
export default ListQuestion;