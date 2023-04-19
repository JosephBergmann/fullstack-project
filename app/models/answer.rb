class Answer < ApplicationRecord
    validates :poster_id, :question_id, :body, :score, presence: false

    belongs_to :poster,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: :User

    belongs_to :question,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Question
end
