class RemoveScoreFromQuestionsAndAnswers < ActiveRecord::Migration[7.0]
  def change
    remove_column :questions, :score
    remove_column :answers, :score
  end
end
