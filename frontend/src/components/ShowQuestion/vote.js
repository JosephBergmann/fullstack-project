import { useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import { createVote, updateVote, deleteVote } from "../../store/vote.js"
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";

const Vote = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { questionId } = useParams();

    const votes = useSelector(state => {return state.questionsReducer[questionId].votes});
    const user = useSelector(state => {return state.sessionsReducer.user});
    const userVotes = votes?.filter(vote => vote.user_id === user?.id);

    const [currentVote, setCurrentVote] = useState( userVotes ? userVotes[0]?.value : null);

    const options = [
        {id: 1, label: 'Upvote', value: true},
        {id: 2, label: 'Downvote', value: false}
    ]

    console.log(currentVote)
    const handleVoteChange = (e) => {
        if (!user) history.push('/login');
        e.preventDefault();
        if (e.target.value === currentVote){
            setCurrentVote(null);
            console.log(votes[user.id])
            dispatch(deleteVote(userVotes[0].id, questionId))
            // dispatch(deleteVote(votes[user.id].id)) needs to be updated
        } else {
            let vote = e.target.getAttribute("value");
            setCurrentVote(vote)
            dispatch(createVote({questionId: questionId, userId: user.id, value: currentVote}))
        }
    }

    return (
        <div>
            <button className={currentVote ==='true' ? "buttonChecked" : "buttonUnchecked"} name="upvote" value={true} checked={currentVote === 'true'} onClick={handleVoteChange}>
                Upvote
            </button>
            <button className={currentVote === 'false' ?  "buttonChecked" : "buttonUnchecked"}name="downvote" value={false} checked={currentVote === 'false'} onClick={(handleVoteChange)}>
                Downvote
            </button>
        </div>
    )
}

export default Vote;