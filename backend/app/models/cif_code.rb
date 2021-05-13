class CifCode
  include Mongoid::Document
  field :code, type: String
  field :initial, type: String
  field :type, type: String
  field :description, type: String
  has_many :evaluations
  
  index description: 'text'

  validates :code, :initial, :type, presence: true
end
