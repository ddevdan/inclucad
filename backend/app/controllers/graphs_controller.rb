class GraphsController < ApplicationController
  def index
    @graphs = Graph.where(city: graphs_params[:city]).to_a
    render json: @graphs
    
  end

  private
  def graphs_params
    params.permit(:city)
  end
end
