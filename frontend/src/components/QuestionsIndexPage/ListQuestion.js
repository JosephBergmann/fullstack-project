import { NavLink } from "react-router-dom";

function ListQuestion({question}){
    const {id, votes, title, body, author, answers} = question.question
    console.log(votes)
    return (
        <div className="list-item">
            <div className="statistics">
               <div className="votes" title="votes">votes: {votes.length}</div>
               {/* <div className="answers" title="answers">answers: {answers.length}</div> */}
            </div>
            <NavLink to={`/questions/${id}`}>{title}</NavLink>
            <p>{body}</p>
        </div>
        // <h2>hello</h2>
    )
}
export default ListQuestion;