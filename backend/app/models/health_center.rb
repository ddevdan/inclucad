class HealthCenter
  include Mongoid::Document
  field :name, type: String
  field :hc_code, type: String
  has_one :address, as: :address, dependent: :destroy 
  has_one :phone_number, as: :phone, dependent: :destroy 
  has_many :disabled_people
  
  accepts_nested_attributes_for :address, :phone_number

  index name: 'text'

  validates :name, :hc_code, presence: true


end
