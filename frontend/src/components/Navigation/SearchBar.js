import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux"
import { fetchQuestions } from "../../store/question";
function SearchBar(){
    const [query, setQuery] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchQuestions(query))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input  type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
         </form> 
        </div>
    )

}

export default SearchBar