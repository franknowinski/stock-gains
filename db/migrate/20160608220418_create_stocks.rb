class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.integer :shares
      t.integer :user_id
      # t.string :name
      # t.decimal :percent_change
      # t.decimal :ask
      # t.decimal :days_range
      # t.decimal :year_range
      # t.decimal :previous_close
      # t.decimal :earnings_share
      # t.integer :volume
      # t.decimal :oneyr_target_price

      t.timestamps null: false
    end
  end
end
