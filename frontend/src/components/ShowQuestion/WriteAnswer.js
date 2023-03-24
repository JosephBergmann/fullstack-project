import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import { createAnswer } from "../../store/answer";

const WriteAnswer = (questionId) => {
    const dispatch = useDispatch();
    let history = useHistory();
    let [body, setBody] = useState("");
    const currUser = useSelector(state => state.sessionsReducer.user)
    // const questionId = useSelector(state => state.questionsReducer)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!currUser){
            history.push('/login');
        }

        const data = {
            posterId: currUser.id,
            questionId: questionId,
            body
        }

        dispatch(createAnswer(data));
    }
    return(
        <form onSubmit={handleSubmit}>
            <textarea id="body" value={body} 
            onChange={e => setBody(e.target.value)} />
            <button className="submit-answer" type="submit">Submit Answer</button>
        </form>
    )
}

export default WriteAnswer;