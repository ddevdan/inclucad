class CreatePhones < ActiveRecord::Migration[6.1]
  def change
    create_table :phones do |t|
      t.string :type
      t.string :number
      t.references :disabled_person, null: false, foreign_key: true

      t.timestamps
    end
  end
end
