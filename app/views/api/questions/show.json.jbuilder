json.question do
    json.extract! @question, :id, :title, :body, :poster, :answers, :created_at, :updated_at
end