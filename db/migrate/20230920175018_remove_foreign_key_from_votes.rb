class RemoveForeignKeyFromVotes < ActiveRecord::Migration[7.0]
  def change
    remove_index :votes, :question_id
  end
end
