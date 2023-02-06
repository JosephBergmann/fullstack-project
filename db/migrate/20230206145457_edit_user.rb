class EditUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :email, :string, null: false, unique: true
  end
end
