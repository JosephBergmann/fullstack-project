class AddQuestionOrCommentToVotes < ActiveRecord::Migration[7.0]
  def change
    add_column :votes, :question_answer, :boolean
  end
end
