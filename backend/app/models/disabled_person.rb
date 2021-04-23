class DisabledPerson
  include Mongoid::Document

  field :name, type: String
  field :cpf, type: String
  field :born_date, type: Date
  field :gender, type: String
  field :father_name, type: String
  field :mother_name, type: String
  field :card_id, type: String
  field :sus_id, type: String
  field :scholarity, type: String
  field :work_card_id, type: String
  field :acquisition_form, type: String
  field :society_limitation, type: String
  field :social_situation, type: String
  field :infos_add, type: String
  field :deficiency_type, type: String
  belongs_to :health_center
  has_one :address, as: :address, dependent: :destroy 
  has_one :phone_number, as: :phone, dependent: :destroy 
  validates :address, :phone_number, presence: true

  accepts_nested_attributes_for :address, :phone_number, :health_center
  # validates :cpf, length: {is: 11}, uniqueness: true
end
