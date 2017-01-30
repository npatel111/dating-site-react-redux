class AddStateToMatches < ActiveRecord::Migration[5.0]
  def change
    add_column :matches, :state, :string
  end
end
