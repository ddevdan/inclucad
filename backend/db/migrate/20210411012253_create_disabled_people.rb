class CreateDisabledPeople < ActiveRecord::Migration[6.1]
  def change
    create_table :disabled_people do |t|
      t.string :cpf
      t.string :first_name
      t.string :last_name
      t.datetime :born_date
      t.string :gender
      t.string :father_name
      t.string :mother_name
      t.string :card_id
      t.string :sus_id
      t.string :scholarity
      t.string :work_card_id
      t.string :acquisition_form
      t.text :society_limitation
      t.text :social_situation
      t.text :infos_add
      t.string :deficiency_type

      t.timestamps
    end
  end
end
