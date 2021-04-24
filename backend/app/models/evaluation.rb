class Evaluation
  include Mongoid::Document
  field :cif_code, type: String
  field :cid_code, type: String
  field :disabled_type, type: String
  field :born_with, type: Mongoid::Boolean
  field :date, type: Date
  belongs_to :user
  belongs_to :disabled_person
end
