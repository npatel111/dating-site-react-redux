class AddDistanceToUserMatches < ActiveRecord::Migration[5.0]
  def change
    add_column :user_matches, :distance, :integer
  end
end
