import { useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import { createVote, updateVote, deleteVote } from "../../store/vote.js"

const vote = (questionId) => {
    const dispatch = useDispatch();
    const [currentVote, setCurrentVote] = useState(null);

    const options = [
        {id: 1, label: 'Upvote', value: true},
        {id: 2, label: 'Downvote', value: false}
    ]

    const handleOptionChange = (e) => {
        // e.preventDefault();

        if (e === currentVote){
            setCurrentVote(null);
            dispatch(deleteVote(questionId.questionId))
        }

        setCurrentVote(e)
    }

    return (
        <div>
            <label type="radio" name="votes" value={true} checked={currentVote===true} onChange={handleVoteChange(true)}>
                Upvote
            </label>
            <label type="radio" name="votes" value={false} checked={currentVote === false} onChange={(handleVoteChange(false))}>
                Downvote
            </label>
        </div>
    )
}