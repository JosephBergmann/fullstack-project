class AddIndexToVotes < ActiveRecord::Migration[7.0]
  def change
    remove_column :votes, :vote_type
    add_index :votes, [:question_answer, :question_id]
  end
end
