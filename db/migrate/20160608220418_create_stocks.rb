class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.string :name
      t.integer :percent_change
      t.integer :price
      t.integer :days_range
      t.integer :year_range
      t.integer :previous_close
      t.integer :eps
      t.integer :per
      t.integer :one_year_target

      t.timestamps null: false
    end
  end
end
