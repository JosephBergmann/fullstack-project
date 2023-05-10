json.question do
    json.extract! @question, :id, :title, :body, :votes, :created_at, :updated_at
    json.poster @question.poster.username
end

json.answers do
    @question.answers.each do |answer|
        json.set! answer.id do
            json.extract! answer, :body, :question_id, :created_at, :updated_at
            json.poster answer.poster.username 
        end
    end
end