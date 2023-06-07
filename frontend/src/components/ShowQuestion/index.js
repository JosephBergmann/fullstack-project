import { useParams } from "react-router-dom"
import { useEffect } from "react"
import * as questionActions from '../../store/question.js'
import * as voteActions from '../../store/vote.js'
import { useDispatch, useSelector } from "react-redux"
import AnswersList from "./AnswersList.js"
import WriteAnswer from "./WriteAnswer.js"
import './ShowQuestion.css';
import Vote from "./Vote.js";

const ShowQuestion = () => {
    const dispatch = useDispatch();
    const { questionId } = useParams();
    const question = useSelector(state => {return state.questionsReducer[questionId]});
    const user = useSelector(state => {return state.sessionsReducer.user});

    //use effect dispatch request to get the specific question and its answers
    useEffect( () => {
        dispatch(questionActions.fetchQuestion(questionId))
    }, [dispatch, questionId])


    if (!question){
        return <div>Loading</div>
    }
    

    const handleUpVote = (e) => {
        e.preventDefault();
        const data = {
            userId: user.id,
            questionId: question.id,
            status: true
        }

        dispatch(voteActions.createVote(data))
    }

    const handleDownVote = (e) => {
        e.preventDefault();
        const data = {
            userId: user.id,
            questionId: question.id,
            status: false
        }
    }

    const handleVoteChange = (status) => {

    }

    return (
        // <h1>hi</h1>
        <>
            <div className="question-header">
                <h1 className="question-title">{question.title}</h1>
                <div className="question-timestamp">Asked {question.createdAt}</div>
                <div className="question-timestamp">Modified {question.updatedAt}</div>
            </div>
            <div className="question-body">
                {/* <div className="votes">
                    <button title="upvote" onClick={handleUpVote}></button>
                    <button title="downvote" onClick={handleDownVote}></button>
                </div> */}

                <p>{question.body}</p>
            </div>
            <div>
                {!user ? (<h2>Log in to Answer</h2>) : (<WriteAnswer questionId={questionId}/>)}
            </div>
            <AnswersList />
        </>
    )
}

export default ShowQuestion;