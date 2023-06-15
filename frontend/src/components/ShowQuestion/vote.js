import { useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import { createVote, updateVote, deleteVote } from "../../store/vote.js"
import { useParams } from "react-router-dom";

const Vote = () => {
    const dispatch = useDispatch();
    const { questionId } = useParams();
    // console.log(questionId)
    const votes = useSelector(state => {return state.questionsReducer[questionId].votes})
    const user = useSelector(state => {return state.sessionsReducer.user})
    console.log(votes)
    console.log(user.id);

    const [currentVote, setCurrentVote] = useState(votes[user.id]);
    console.log(currentVote);
    const options = [
        {id: 1, label: 'Upvote', value: true},
        {id: 2, label: 'Downvote', value: false}
    ]

    console.log(currentVote)
    const handleVoteChange = (e) => {
        e.preventDefault();
        console.log(currentVote)
        if (currentVote !== null && e.target.value === currentVote){
            setCurrentVote(null);
            console.log(votes[user.id])
            dispatch(deleteVote(votes[user.id].id))
        } else {
            setCurrentVote(e.target.value)
            dispatch(createVote({questionId: questionId.questionId, userId: user.id, value: currentVote}))
        }

        // setCurrentVote(e)
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