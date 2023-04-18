class CreateQuestionVotes < ActiveRecord::Migration[7.0]
  def change
    create_table :question_votes do |t|
      t.references :user, null: false, foreign_key: {to_table: :users}
      t.references :question, null: false, foreign_key: {to_table: :questions}
      t.timestamps
    end
  end
end