json.question do
    json.extract! @question, :id, :title, :poster, :answers, :created_at, :updated_at
end