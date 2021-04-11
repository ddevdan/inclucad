class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :zip_code
      t.string :street
      t.string :number
      t.string :neighbor
      t.string :city
      t.string :state
      t.string :country
      t.references :disabled_person, null: false, foreign_key: true

      t.timestamps
    end
  end
end
