class RenameQuestionVotesToVotes < ActiveRecord::Migration[7.0]
  def change
    rename_table :question_votes, :votes
  end
end
