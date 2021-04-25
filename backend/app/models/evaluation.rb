class Evaluation
  include Mongoid::Document
  field :evaluated_at, type: Time
  field :disabled_type, type: String
  field :cid_code, type: String
  field :born_with, type: Mongoid::Boolean, default: false
  field :done, type: Mongoid::Boolean, default: false
  belongs_to :user, optional:true
  belongs_to :disabled_person
  belongs_to :cif_code, optional:true
  accepts_nested_attributes_for :user, :disabled_person

end
