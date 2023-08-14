json.answer do
    # @question.answers.each do |answer|
        json.set! @answer.id do
            json.extract! @answer, :poster, :body, :question_id, :created_at, :updated_at
            json.poster @answer.poster.username 
        end
    # end
end