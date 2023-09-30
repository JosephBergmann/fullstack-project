class AddPolyRefToVotes < ActiveRecord::Migration[7.0]
  def change
    add_reference :votes, :votable_id, polymorphic: true
  end
end
