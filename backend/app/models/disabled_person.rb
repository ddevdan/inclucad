class DisabledPerson
  include Mongoid::Document
  field :name, type: String
  field :cpf, type: String
  field :email, type: String
  field :born_date, type: Date
  field :gender, type: String
  field :father_name, type: String
  field :mother_name, type: String
  field :card_id, type: String
  field :sus_id, type: String
  field :work_card_id, type: String
  field :scholarity, type: String
  field :acquisition_form, type: String
  field :society_limitation, type: String
  field :social_situation, type: String
  field :infos_add, type: String
  field :deficiency_type, type: String
  validates :name, :cpf, :email, :born_date, presence: true
  validates :gender, :father_name, :mother_name, presence: true 
  validates :card_id, :sus_id, :work_card_id, presence: true
  validates :scholarity,:acquisition_form, :society_limitation, presence: true
  validates :social_situation, :infos_add, :deficiency_type, presence: true

  validates :cpf, :work_card_id length:{is: 11}
  validates :card_id, :sus_id, length:{is: 9}
  validates :cpf,:card_id,:sus_id, :work_card_id, uniqueness:true

  belongs_to :health_center
  accepts_nested_attributes_for :health_center

  has_one :address, as: :address, dependent: :destroy
  has_many :phones, as: :phone, dependent: :destroy 
  has_one :evaluation, dependent: :destroy

  accepts_nested_attributes_for :phones
  accepts_nested_attributes_for :address, update_only:true

end
