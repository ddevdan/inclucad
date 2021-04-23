class User
  include Mongoid::Document
  field :cpf, type: String
  field :name, type: String
  field :agente, type: Mongoid::Boolean
  field :agente_code, type: String
  field :fisio_code, type: String
end
