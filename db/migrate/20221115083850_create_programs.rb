class CreatePrograms < ActiveRecord::Migration[7.0]
  def change
    create_table :programs do |t|
      t.string :ch_logo
      t.string :start_time
      t.string :end_time
      t.string :title
      t.string :subtitle

      t.timestamps
    end
  end
end
