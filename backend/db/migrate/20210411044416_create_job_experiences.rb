class CreateJobExperiences < ActiveRecord::Migration[6.1]
  def change
    create_table :job_experiences do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.string :company
      t.string :role
      t.references :disabled_person, null: false, foreign_key: true

      t.timestamps
    end
  end
end
