class Vote < ApplicationRecord
    validates :user_id, :question_id, :value, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :question, optional: true, 
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Question

    belongs_to :answer, optional: true,
    primary_key: :id,
    foreign_key: :answer_id,
    class_name: :Answer
    
end
