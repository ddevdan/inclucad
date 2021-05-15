
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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
                password:123456, health_center: health_centers[1])

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
                        health_center:health_centers[0],
                        address_attributes:{cep: "50010010", 
                                                street: "Estr. do Arraial", number: "4155",
                                                neighborhood: "Casa Amarela",
                                                city: "Recife", state: "Pernambuco",
                                                country: "Brasil", complement: ""},
                        
                        phones_attributes:[{ number: "8133554401", type: "fixo" }],
                        
                        )


e1 = Evaluation.new(health_center: d1.health_center)
d1.evaluation = e1

d2 = DisabledPerson.create(name: "Maria da Silva", cpf: "11479618409", 
                        email: "maria@inclucad.com", born_date: "2000-31-08", 
                        gender: "F", father_name: "Mario de Andrade",
                        mother_name: "Joana Machado da Silva", 
                        card_id: "123456788", sus_id: "123456788",
                        work_card_id: "123456788", scholarity: "ensino fundamental completo",
                        acquisition_form: "queda", society_limitation: "limitação da sociedade",
                        social_situation: "nenhuma", infos_add: "", deficiency_type: "visual",
                        health_center:health_centers[0],
                        address_attributes:{cep: "50010010", 
                                                street: "Estr. do Arraial", number: "4155",
                                                neighborhood: "Casa Amarela",
                                                city: "Recife", state: "Pernambuco",
                                                country: "Brasil", complement: ""},
                        
                        phones_attributes:[{ number: "8133554401", type: "fixo" }],
                        
                        )


e2 = Evaluation.new(health_center: d2.health_center)
d2.evaluation = e2


Graph::BarChart::Init.structure()
puts 'end'