class AddScoreToQuestionsAndAnswers < ActiveRecord::Migration[7.0]
  def change
    add_column :questions, :score, :integer, default: 0
    add_column :answers, :score, :integer, default: 0
  end
end
