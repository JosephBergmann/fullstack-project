class FixScoreInAnswers < ActiveRecord::Migration[7.0]
  def change
    remove_column :answers, :score
    add_column :answers, :score, :integer, default: 0
  end
end
