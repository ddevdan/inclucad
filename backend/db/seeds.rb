# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

20.times do 
    first_name = Faker::Name.name
    last_name = Faker::Name.name
    born_date = Faker::Date.between(from: '1970-01-01', to: '2003-12-31')
    gender = Faker::Gender.type
    father_name = Faker::Name.name
    mother_name = Faker::Name.name
    cpf = Faker::IDNumber.brazilian_citizen_number
    card_id = Faker::IDNumber.brazilian_id
    sus_id = "#{cpf}#{card_id}"
    scholarity = 
    work_card_id = sus_id
    acquisition_form = Faker::Lorem.paragraph 
    society_limitation = Faker::Lorem.paragraph 
    social_situation = Faker::Lorem.paragraph 
    infos_add = Faker::Lorem.paragraph 
    deficiency_type = Faker::Lorem.word 
    DisabledPerson.create(first_name: first_name, last_name:last_name,cpf:cpf, born_date: born_date, gender: gender, father_name: father_name, mother_name: mother_name,
                        card_id: card_id, sus_id: sus_id, scholarity: scholarity, work_card_id: work_card_id, 
                        acquisition_form: acquisition_form, society_limitation: society_limitation, social_situation: social_situation, 
                        infos_add: infos_add, deficiency_type: deficiency_type)
end