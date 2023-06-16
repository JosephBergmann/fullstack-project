import { useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import { createVote, updateVote, deleteVote } from "../../store/vote.js"
import { useParams } from "react-router-dom";

const Vote = () => {
    const dispatch = useDispatch();
    const { questionId } = useParams();
    // console.log(questionId)
    const votes = useSelector(state => {return state.questionsReducer[questionId].votes});
    const user = useSelector(state => {return state.sessionsReducer.user});
    const userVotes = votes.filter(vote => vote.userId === user.id); 
    console.log(votes)
    console.log(user.id);

    const [currentVote, setCurrentVote] = useState(userVotes[0]);
    console.log(!!currentVote);
    const options = [
        {id: 1, label: 'Upvote', value: true},
        {id: 2, label: 'Downvote', value: false}
    ]

    console.log(currentVote)
    const handleVoteChange = (e) => {
        console.log(e.target.value)
        debugger
        e.preventDefault();
        console.log(!!currentVote)
        if (!!currentVote && e.target.value === currentVote){
            setCurrentVote(null);
            console.log(votes[user.id])
            dispatch(deleteVote(userVotes[0].id))
            // dispatch(deleteVote(votes[user.id].id)) needs to be updated
        } else {
            setCurrentVote(e.target.value)
            dispatch(createVote({questionId: questionId, userId: user.id, value: currentVote}))
        }

        // setCurrentVote(e)
    }

    return (
        <div>
            <label type="button" name="votes" value={true} checked={currentVote} onClick={handleVoteChange}>
                Upvote
            </label>
            <label type="button" name="votes" value={false} checked={currentVote} onClick={(handleVoteChange)}>
                Downvote
            </label>
        </div>
    )
}

export default Vote;