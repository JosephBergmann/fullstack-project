class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.references :poster, null: false, index: true foreign_key: {to_table: :users}
      t.references :question, null: false, index: true, foreign_key: {to_table: :questions}
      t.text :body, null: false
      t.timestamps
    end
  end
end
