class AddScoreToAnswersw < ActiveRecord::Migration[7.0]
  def change
    add_column :answers, :score, :integer
  end
end
