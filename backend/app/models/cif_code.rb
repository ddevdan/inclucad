class CifCode
  include Mongoid::Document
  field :code, type: String
  field :initial, type: String
  field :type, type: String
  field :description, type: String

  index description: 'text'
end
