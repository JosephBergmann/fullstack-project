import React from 'react';
import ListQuestion from './ListQuestion.js'
const QuestionList = ({questions}) => {
    return (
        <div className="qlist">
            {questions.map((question, i) => (
              <ListQuestion key={i} question={question}/>
            ))}
        </div>
    )
}
export default QuestionList;