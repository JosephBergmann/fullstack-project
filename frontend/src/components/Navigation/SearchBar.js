import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function SearchBar(){
    const { query, setQuery } = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

}

export default SearchBar