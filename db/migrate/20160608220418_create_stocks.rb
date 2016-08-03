class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.decimal :shares
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
