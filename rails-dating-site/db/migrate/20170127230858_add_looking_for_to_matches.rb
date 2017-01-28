class AddLookingForToMatches < ActiveRecord::Migration[5.0]
  def change
    add_column :matches, :looking_for, :string
  end
end
