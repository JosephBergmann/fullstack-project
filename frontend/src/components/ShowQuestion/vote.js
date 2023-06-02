import { useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import { createVote, updateVote, deleteVote } from "../../store/vote.js"

const vote = (questionId) => {
    const dispatch = useDispatch();
    const [currentVote, setCurrentVote] = useState(true);

    const options = [
        {id: 1, label: 'Upvote', value: true},
        {id: 2, label: 'Downvote', value: false}
    ]

    const handleOptionChange = (e) => {
        // e.preventDefault();
        console.log(currentVote)
        if (e === currentVote){
            setCurrentVote(!e);
            // dispatch(deleteVote(questionId.questionId))
        }

        setCurrentVote(e)
    }

    return (
        <div>
            <label type="button" name="votes" value={true} checked={currentVote===true} onChange={handleVoteChange(true)}>
                Upvote
            </label>
            <label type="button" name="votes" value={false} checked={currentVote === false} onChange={(handleVoteChange(false))}>
                Downvote
            </label>
        </div>
    )
}