class ChangeColumnNamesInVotes < ActiveRecord::Migration[7.0]
  def change
    rename_column :votes, :question_id, :votable_id
    rename_column :votes, :question_answer, :votable_type
  end
end
