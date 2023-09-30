class FixPolymorphicVotes < ActiveRecord::Migration[7.0]
  def change
    remove_column :votes, :votable_id_type
    add_reference :votes, :index_votes_on_votable_type_and_voteable_id, polymorphic: true
  end
end
