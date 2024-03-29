json.question do
    json.extract! @question, :id, :title, :body, :score, :created_at, :updated_at
    json.poster @question.poster.username
end

json.answers do
    @question.answers.each do |answer|
        json.set! answer.id do
            json.extract! answer, :body, :question_id, :score, :created_at, :updated_at
            json.poster answer.poster.username
            json.votes do
            # json.answer.votes do
                answer.votes.each do |vote|
                    json.set! vote.id do
                        json.extract! vote, :id, :votable_id, :votable_type, :user_id, :value
                    end
                end
            end
        end
    end
end

json.votes do
    @question.votes.each do |vote|
        json.set! vote.id do
            json.extract! vote, :id, :votable_id, :votable_type, :user_id, :value
        end
    end
end