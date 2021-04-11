# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_11_044416) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "zip_code"
    t.string "street"
    t.string "number"
    t.string "neighbor"
    t.string "city"
    t.string "state"
    t.string "country"
    t.bigint "disabled_person_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["disabled_person_id"], name: "index_addresses_on_disabled_person_id"
  end

  create_table "disabled_people", force: :cascade do |t|
    t.string "cpf"
    t.string "first_name"
    t.string "last_name"
    t.datetime "born_date"
    t.string "gender"
    t.string "father_name"
    t.string "mother_name"
    t.string "card_id"
    t.string "sus_id"
    t.string "scholarity"
    t.string "work_card_id"
    t.string "acquisition_form"
    t.text "society_limitation"
    t.text "social_situation"
    t.text "infos_add"
    t.string "deficiency_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "job_experiences", force: :cascade do |t|
    t.datetime "start_date"
    t.datetime "end_date"
    t.string "company"
    t.string "role"
    t.bigint "disabled_person_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["disabled_person_id"], name: "index_job_experiences_on_disabled_person_id"
  end

  create_table "phones", force: :cascade do |t|
    t.string "type"
    t.string "number"
    t.bigint "disabled_person_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["disabled_person_id"], name: "index_phones_on_disabled_person_id"
  end

  add_foreign_key "addresses", "disabled_people"
  add_foreign_key "job_experiences", "disabled_people"
  add_foreign_key "phones", "disabled_people"
end
