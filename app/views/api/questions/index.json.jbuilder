json.array! @questions do |question|
    json.question do
        json.extract! question, :id, :title, :poster, :created_at, :updated_at
    end
end