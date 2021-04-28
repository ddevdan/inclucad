class Phone
  include Mongoid::Document
  field :number, type: String
  field :type, type: String

  belongs_to :phone, polymorphic: true
  
  validates :number, :type, presence: true
end
