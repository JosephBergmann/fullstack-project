class Vote < ApplicationRecord
    validates :poster_id, :question_id, :value, presence: true

    belongs_to :poster,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: :User

    belongs_to :question, optional: true 
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Question

    belongs_to :answer, optional: true
    priamry_key: :id,
    foreign_key: :answer_id,
    class_name: :Answer
    
end
