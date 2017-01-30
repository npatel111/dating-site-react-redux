class AddStreetToMatches < ActiveRecord::Migration[5.0]
  def change
    add_column :matches, :street, :string
  end
end
