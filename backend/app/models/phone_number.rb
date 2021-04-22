class PhoneNumber
  include Mongoid::Document
  field :number, type: String
  field :type, type: String

  belongs_to :phone, polymorphic: true
  
end