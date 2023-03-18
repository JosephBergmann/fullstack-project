import {useState} from "react"
import {useHistory} from "react-router-dom"
import { createAnswer } from "../../store/answer";
const WriteAnswer = () => {
    let history = useHistory();
    let [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!currUser){
            history.push('/login');
        }

        const data = {
            
        }

        dispatchEvent(createAnswer(data));
    }
    return(
        <form onSubmit={handleSubmit}>
            <textarea id="body" value="body" 
            onChange={e => setBody(e.target.value)} />
            <button className="submit-answer" type="submit">Submit Answer</button>
        </form>
    )
}

export default WriteAnswer;