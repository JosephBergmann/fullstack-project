class FinalizePolymorphicVotesTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :votes, :votable_id
    add_reference :votes, :votable, polymorphic: true 
  end
end
