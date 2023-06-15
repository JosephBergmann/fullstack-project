json.question do
    json.extract! @question, :id, :title, :body, :votes, :score, :created_at, :updated_at
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

json.votes do
    @question.votes.each do |vote|
        json.set! vote.id do
            json.extract! vote
        end
    end
end