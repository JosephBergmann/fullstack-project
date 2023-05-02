class ChangeVotes < ActiveRecord::Migration[7.0]
  def change
    add_column :votes, :vote_type, :boolean
    change_column_null :votes, :user_id, true
    change_column_null :votes, :question_id, true
  end
end
