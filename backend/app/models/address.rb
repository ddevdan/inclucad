class Address
  include Mongoid::Document

  field :cep, type: String
  field :street, type: String
  field :number, type: String
  field :neighborhood, type: String
  field :city, type: String
  field :state, type: String
  field :country, type: String
  field :complement, type: String

  belongs_to :address, polymorphic: true

  validates :cep, :street, :number, :neighborhood, :city, :state, :country, :complement, presence: true
  validates :cep, length:{is: 8}
end
