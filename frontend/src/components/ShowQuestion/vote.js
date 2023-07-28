import { useState, useEffect } from "react"
import {useDispatch, useSelector } from "react-redux"
import { createVote, updateVote, deleteVote } from "../../store/vote.js"
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";

const Vote = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { questionId } = useParams();

    const votes = useSelector(state => {return state.votesReducer});
    const user = useSelector(state => {return state.sessionsReducer.user});
    const userVotes = Object.values(votes)?.filter(vote => vote?.userId === user?.id || vote?.user_id === user?.id);

    const [currentVote, setCurrentVote] = useState(userVotes ? userVotes[0]?.value : null);

    const options = [
        {id: 1, label: 'Upvote', value: true},
        {id: 2, label: 'Downvote', value: false}
    ]

    console.log(currentVote)
    const handleVoteChange = (e) => {
        if (!user) history.push('/login')
        else {
            e.preventDefault();
            let vote = Boolean(e.target.value); 
            if (vote === currentVote){
                setCurrentVote(null);
                console.log(votes[user.id])
                debugger
                dispatch(deleteVote(userVotes[0].id, questionId))
                // dispatch(deleteVote(votes[user.id].id)) needs to be updated
            } else {
                setCurrentVote(vote)
                debugger
                dispatch(createVote({questionId: questionId, userId: user.id, value: vote, questionComment: true}))
            }
        }
    }

    return (
        <div>
            <button className={currentVote ? "buttonChecked" : "buttonUnchecked"} name="upvote" value={true} checked={currentVote} onClick={handleVoteChange}>
                Upvote
            </button>
            <button className={!currentVote ?  "buttonChecked" : "buttonUnchecked"}name="downvote" value={false} checked={!currentVote} onClick={(handleVoteChange)}>
                Downvote
            </button>
            <h1>
                current vote: {String(currentVote)}
            </h1>
        </div>
    )
}

export default Vote;