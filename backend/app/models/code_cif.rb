class CodeCif
  include Mongoid::Document
  field :code, type: String
  field :type, type: String
  field :description, type: String
end
