
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# descomentar daqui pra baixo
codes = JSON.parse(File.read("#{Rails.root}/lib/cif_codes/codes.json"))
categorias = {"b"=>"Funções do Corpo", "s"=>"Estruturas do Corpo", "d"=>"Atividades e Participação", "e"=>"Fatores Ambientais"}
total = codes.count 
cont = 0
codes.each do |code|
    c = CifCode.create!(code: code['Categoria'], 
                        description: code['Descrição'],
                        type: categorias[code['Categoria'].first],
                        initial: code['Categoria'].first)
end


HealthCenter.create!(name:"Unidade de Saúde da Família Aurora",
                        hc_code: 12345,
                        address_attributes:{cep: "53401070", 
                                                street: "Rua da Aurora", number: "995",
                                                neighborhood: "Aurora",
                                                city: "Paulista", state: "Pernambuco",
                                                country: "Brasil", complement: ""},
                        
                        phones_attributes:[{ number: "81997741749", type: "celular" }])

HealthCenter.create!(name:"Posto de Saúde Francisco Pignatári",
                        hc_code: 12355,
                        address_attributes:{cep: "50010010", 
                                                street: "Estr. do Arraial", number: "4155",
                                                neighborhood: "Casa Amarela",
                                                city: "Recife", state: "Pernambuco",
                                                country: "Brasil", complement: ""},
                        
                        phones_attributes:[{ number: "8133554401", type: "fixo" }])


health_centers = [HealthCenter.first, HealthCenter.last]
User.create!(name:"Agente de Saúde", agente: true, agente_code: 12345, cpf: 11479618400,
                email: "agente@inclucad.com", fisio_code: nil,
                provider: "email", uid: "agente@inclucad.com", 
                password:123456, health_center: health_centers[0])

User.create!(name:"Fisioterapeuta", agente: false, agente_code: nil, cpf: 11479618401,
                email: "fisio@inclucad.com", fisio_code: 12345,
                provider: "email", uid: "fisio@inclucad.com", 
                password:123456, health_center: health_centers[0])

d1 = DisabledPerson.create(name: "Joao da Silva", cpf: "11479618402", 
                        email: "joao@inclucad.com", born_date: "2000-20-02", 
                        gender: "M", father_name: "Joao Silva Oliveira",
                        mother_name: "Maria da Silva Souza", 
                        card_id: "123456789", sus_id: "123456789",
                        work_card_id: "123456789", scholarity: "ensino fundamental incompleto",
                        acquisition_form: "queda", society_limitation: "limitação da sociedade",
                        social_situation: "nenhuma", infos_add: "", deficiency_type: "física",
                        health_center:health_centers[1],
                        address_attributes:{cep: "50010010", 
                                                street: "Estr. do Arraial", number: "4155",
                                                neighborhood: "Casa Amarela",
                                                city: "Recife", state: "Pernambuco",
                                                country: "Brasil", complement: ""},
                        
                        phones_attributes:[{ number: "8133554401", type: "fixo" }],
                        
                        )


e1 = Evaluation.new(health_center: d1.health_center, evaluated_at: Time.now)
d1.evaluation = e1

d2 = DisabledPerson.create(name: "Maria da Silva", cpf: "11479618409", 
                        email: "maria@inclucad.com", born_date: "2000-31-08", 
                        gender: "F", father_name: "Mario de Andrade",
                        mother_name: "Joana Machado da Silva", 
                        card_id: "123456788", sus_id: "123456788",
                        work_card_id: "123456788", scholarity: "ensino fundamental completo",
                        acquisition_form: "queda", society_limitation: "limitação da sociedade",
                        social_situation: "nenhuma", infos_add: "", deficiency_type: "visual",
                        health_center:health_centers[1],
                        address_attributes:{cep: "50010010", 
                                                street: "Estr. do Arraial", number: "4155",
                                                neighborhood: "Casa Amarela",
                                                city: "Recife", state: "Pernambuco",
                                                country: "Brasil", complement: ""},
                        
                        phones_attributes:[{ number: "8133554401", type: "fixo" }],
                        
                        )


e2 = Evaluation.new(health_center: d2.health_center, evaluated_at: Time.now)
d2.evaluation = e2



def person
cpf = 11111111111+rand(10000)

    scholarity = ['ensino fundamental completo', 
'ensino fundamental incompleto', 
'ensino médio completo','ensino médio imcompleto', 
'ensino superior completo','ensino superior incompleto']
social_situation = ["a", "b", "c", "d", "e"]

deficiency_type = [
    "auditiva",
    "física",
    "intelectual",
    "multiplas",
    "ostomia",
    "visual",]

    type=["celular", "fixo"]

    scholarity_rand = scholarity[rand(scholarity.length-1)]
    social_situation_rand = social_situation[rand(social_situation.length-1)]
    # health_center_rand = health_centers[rand(health_centers.length-1)]
    deficiency_type_rand = deficiency_type[rand(deficiency_type.length-1)]
    type_rand = type[rand(type.length-1)]
    {
        email:Faker::Internet.email,
        card_id: Faker::IDNumber.brazilian_id,
        work_card_id: Faker::IDNumber.brazilian_id,
        sus_id: Faker::IDNumber.brazilian_id,
        # cpf: Faker::IDNumber.brazilian_citizen_number,
        cpf: cpf,
        mother_name:Faker::Name.name,
        name:Faker::Name.name,
        father_name:Faker::Name.name,
        gender:Faker::Gender.short_binary_type,        
        born_date: Faker::Date.birthday(min_age: 18, max_age: 65),
        scholarity: scholarity_rand,
        acquisition_form: Faker::Lorem.paragraphs,
        society_limitation: Faker::Lorem.paragraphs,
        social_situation:social_situation_rand,
        # health_center:health_center_rand,
        infos_add: Faker::Lorem.paragraphs,
        deficiency_type:deficiency_type_rand,
        cep:Faker::Address.zip_code,
        ad_number: rand(200),
        street: Faker::Address.street_name,
        state: Faker::Address.state,
        neighborhood: Faker::Address.mail_box ,
        city:Faker::Address.city ,
        country: Faker::Address.country,
        ph_number: Faker::PhoneNumber.cell_phone_in_e164,
        type: type_rand

}
end

health_centers = [HealthCenter.first.id, HealthCenter.last.id]

1000.times do |i|
    puts "#{i}/1000"
    rand_health = health_centers[rand(health_centers.length-1)]
    person = person()
    d = DisabledPerson.create(name: person[:name], cpf: person[:cpf], 
                        email: person[:email], born_date: person[:born_date], 
                        gender: person[:gender], father_name: person[:father_name],
                        mother_name: person[:mother_name], 
                        card_id: person[:card_id], sus_id: person[:sus_id],
                        work_card_id: person[:work_card_id], scholarity: person[:scholarity],
                        acquisition_form: person[:acquisition_form], society_limitation: person[:society_limitation],
                        social_situation: person[:social_situation], infos_add: person[:infos_add], deficiency_type: person[:deficiency_type],
                        health_center_id: rand_health,
                        address_attributes:{cep: person[:cep], 
                                                street: person[:street], number: person[:ad_number],
                                                neighborhood: person[:neighborhood],
                                                city: person[:city], state: person[:state],
                                                country: person[:country], complement: ""},
                        
                        phones_attributes:[{ number: person[:ph_number], type:person[:type] }],
                        
                        )

born_with = [true, false]
born_with_rand = born_with[rand(born_with.length - 1)]
e = Evaluation.new(health_center: d.health_center, evaluated_at: Time.now)
d.evaluation = e

end


