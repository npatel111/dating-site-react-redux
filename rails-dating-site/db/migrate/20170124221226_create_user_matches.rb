class CreateUserMatches < ActiveRecord::Migration[5.0]
  def change
    create_table :user_matches do |t|
      t.integer :user_id
      t.integer :match_id
    end
  end
end
