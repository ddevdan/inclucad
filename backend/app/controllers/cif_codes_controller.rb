##
# This controller is for get cif_codes from database and render as json

class CifCodesController < ApplicationController
  ##
  # Get all cif codes
  def index
    @codes = CifCode.all 
    # render json: @codes, :include => :_id
    render json: @codes
    
  end
  ##
  # *Search for codes based on :description parameter*
  def search
    @codes = CifCode.where('$text' => {'$search' => "\"#{cif_codes_params[:description]}\""}).order_by(code: :asc)
    render json: @codes, :except => :_id
  end
  ##
  # Get a list of codes based on its initials
  def show
    @codes = CifCode.where(initial: cif_codes_params[:initial]).order_by(code: :asc)
    render json: @codes, :except => :_id
  end


  private
  def cif_codes_params
    params.permit(:description, :initial)
  end

  
end
