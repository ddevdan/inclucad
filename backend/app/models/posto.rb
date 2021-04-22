class Posto
  include Mongoid::Document
  field :name, type: String
  field :posto_code, type: String
  has_one :address, as: :address, dependent: :destroy 
  has_one :phone_number, as: :phone, dependent: :destroy 
  has_many :disabled_people
  
  accepts_nested_attributes_for :address, :phone_number

  index description: 'text'

  validates :name, :posto_code, presence: true


end
