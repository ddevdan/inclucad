class Address
  include Mongoid::Document

  field :street, type: String
  field :number, type: String
  field :neighborhood, type: String
  field :city, type: String
  field :state, type: String
  field :country, type: String
  field :complement, type: String

  belongs_to :address, polymorphic: true

end
