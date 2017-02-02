class AddImageUrlToMatches < ActiveRecord::Migration[5.0]
  def change
    add_column :matches, :image_url, :string
  end
end
