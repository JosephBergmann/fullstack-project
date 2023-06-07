import { useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import { createVote, updateVote, deleteVote } from "../../store/vote.js"

const Vote = (questionId) => {
    const dispatch = useDispatch();

    const votes = useSelector(state => {return state.questionsReducer[questionId.questionId]})
    const user = useSelector(state => {return state.sessionsReducer.user})
    console.log(votes)
    // console.log(user);

    const [currentVote, setCurrentVote] = useState(true);

    const options = [
        {id: 1, label: 'Upvote', value: true},
        {id: 2, label: 'Downvote', value: false}
    ]

    const handleVoteChange = (e) => {
        e.preventDefault();
        console.log(currentVote)
        if (e === currentVote){
            setCurrentVote(null);
            dispatch(deleteVote(votes[user.id].id))
        } else {
            setCurrentVote(e.target.value)
            debugger
            dispatch(createVote({questionId: questionId.questionId, userId: user.id, value: currentVote}))
        }

        setCurrentVote(e)
    }

    return (
        <div>
            <label type="button" name="votes" value={true} checked={currentVote}onClick={handleVoteChange}>
                Upvote
            </label>
            <label type="button" name="votes" value={false} checked={currentVote} onClick={(handleVoteChange)}>
                Downvote
            </label>
        </div>
    )
}

export default Vote;