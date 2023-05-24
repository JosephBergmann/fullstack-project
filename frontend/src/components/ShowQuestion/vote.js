import { useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import { createVote } from "../../store/vote.js"

const vote = () => {
    const dispatch = useDispatch();
    const [currentVote, setCurrentVote] = useState(null);

    const options = [
        {id: 1, label: 'Upvote'},
        {id: 2, label: 'Downvote'}
    ]

    const handleOptionChange = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <label type="radio" name="votes" value={null} checked={currentVote===null} onChange={handleVoteChange()}></label>
        </div>
    )
}