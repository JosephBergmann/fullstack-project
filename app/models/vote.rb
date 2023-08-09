class Vote < ApplicationRecord
    validates :user_id, presence: true
    # validate :question_or_answer
    # validate :dupe?

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
    
    def question_or_answer
        if !question_id && !answer_id
            errors.add(:base, messsage: "there must be a question or answer attached to this vote")
        elsif question_id && answer_id
            errors.add(:base, message: "vote cannot be both to a question and an answer")
        end
    end

    def dupe?
        # if Vote.exists?(user_id: user_id, (question_id ? {question_id: question_id} : {answer_id: answer_id}))
        if question_answer
            if Vote.exists?(user_id: user_id, question_id: question_id)
                errors.add(:base, message: "vote already exists on this item for this user")
            end
        else
            if Vote.exists?(user_id: user_id, question_id: question_id)
                errors.add(:base, message: "vote already exists on this item for this user")
            end
        end
    end
end
