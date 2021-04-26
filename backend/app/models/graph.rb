class Graph
  include Mongoid::Document
  field :city, type: String
  field :state, type: String
  field :type, type: String
  field :title, type: String
  field :data, type: Array
end
