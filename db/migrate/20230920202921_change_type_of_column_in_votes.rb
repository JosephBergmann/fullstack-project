class ChangeTypeOfColumnInVotes < ActiveRecord::Migration[7.0]
  def change
    change_column :votes, :votable_type, :string
  end
end
