class CreateJoinTableUserMatch < ActiveRecord::Migration[5.0]
  def change
    create_join_table :users, :matches do |t|
      t.integer :user_id
      t.integer :match_id
    end
  end
end
