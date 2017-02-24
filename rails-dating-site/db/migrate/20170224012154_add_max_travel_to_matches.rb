class AddMaxTravelToMatches < ActiveRecord::Migration[5.0]
  def change
    add_column :matches, :max_travel, :integer
  end
end
