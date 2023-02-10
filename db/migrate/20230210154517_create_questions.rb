class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :title, null: false, index: true
      t.references :poster, null: false, foreign_key: {to_table: :users}
      t.text :body, null: false
      t.timestamps
    end
  end
end
