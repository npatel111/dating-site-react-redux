class AddCityToMatches < ActiveRecord::Migration[5.0]
  def change
    add_column :matches, :city, :string
  end
end
