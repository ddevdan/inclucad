class HealthCenter
  include Mongoid::Document
  field :name, type: String
  field :hc_code, type: String
  has_one :address, as: :address, dependent: :destroy
  has_many :phones, as: :phone, dependent: :destroy 
  has_many :users
  has_many :evaluations
  has_many :disabled_people
  
  accepts_nested_attributes_for :phones
  accepts_nested_attributes_for :address, update_only:true

  index name: 'text'

  validates :name, :hc_code, presence: true


end
