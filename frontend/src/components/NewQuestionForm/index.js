import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { createQuestion } from "../../store/question"
import './NewQuestionForm.css'

const NewQuestionForm = () => {
    const currUser = useSelector(state => state.sessionsReducer.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!currUser){
            history.push('/login');
        }

        const data = {
            title,
            body,
            posterId: currUser.userId
        }
        debugger
        dispatch(createQuestion(data));
        history.push('/questions/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="title">Title:</label>
                    <input type="text"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label className="body">Body: </label>
                    <textarea 
                        id="body"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
            </div>
            <button className="submit-question" type="submit">Submit</button>
        </form>
    )
}

export default NewQuestionForm;