class CreateMatches < ActiveRecord::Migration[5.0]
  def change
    create_table :matches do |t|
      t.string :name
      t.string :age
      t.string :gender
      t.string :description

      t.timestamps
    end
  end
end
