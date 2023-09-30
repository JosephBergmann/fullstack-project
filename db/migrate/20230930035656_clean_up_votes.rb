class CleanUpVotes < ActiveRecord::Migration[7.0]
  def change
    remove_column :votes, :index_votes_on_votable_type_and_voteable_id_type
    remove_column :votes, :votable_type
    remove_column :votes, :votable_id_id
    remove_column :votes, :index_votes_on_votable_type_and_voteable_id_id
  end
end
