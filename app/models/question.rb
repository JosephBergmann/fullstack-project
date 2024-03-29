class Question < ApplicationRecord
    validates :title, :poster_id, :body, presence: true
    
    belongs_to :poster,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: :User

    has_many :answers,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Answer,
    dependent: :destroy

    # has_many :votes,
    # primary_key: :id,
    # foreign_key: :question_id,
    # class_name: :Vote,
    # dependent: :destroy
    has_many :votes, :as => :votable,
    dependent: :destroy

    def score
        score = votes.sum(0){|vote| vote.value == true ? 1 : -1}
    end
    
end
