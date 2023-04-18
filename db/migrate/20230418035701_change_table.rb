class ChangeTable < ActiveRecord::Migration[7.0]
  def change
    add_column :question_votes, :value, :boolean
  end
end
