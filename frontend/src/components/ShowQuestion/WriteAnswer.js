import {useState} from "react"

const WriteAnswer = () => {
    let [body, setBody] = useState("");

    const handleSubmit = (e) => {
        
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