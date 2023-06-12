class Vote < ApplicationRecord
    validates :user_id, :question_id, :value, presence: true

    has_one :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_one :question, optional: true, 
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Question

    has_one :answer, optional: true,
    primary_key: :id,
    foreign_key: :answer_id,
    class_name: :Answer
    
end
