class CreateDailyReturns < ActiveRecord::Migration
  def change
    create_table :daily_returns do |t|
      t.decimal :daily_return
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
