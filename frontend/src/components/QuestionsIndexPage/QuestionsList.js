import React from 'react';
import ListQuestion from './ListQuestion.js'
const QuestionList = ({questions}) => {
    return (
        <div>
            <h1>All Questions</h1>
            {questions.map((question, i) => (
              <ListQuestion key={i} question={question}/>
            ))}
    </div>
    )
}
export default QuestionList;