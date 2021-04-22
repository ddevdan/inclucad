class CifCodesController < ApplicationController
  def index
    @codes = CifCode.all 
    render json: @codes, :except => :_id
  end

  def search
    @codes = CifCode.where('$text' => {'$search' => cif_codes_params[:description].to_s}).order_by(code: :asc)
    render json: @codes, :except => :_id
  end

  def show
    @codes = CifCode.where(initial: cif_codes_params[:initial]).order_by(code: :asc)
    render json: @codes, :except => :_id
  end

  private
  def cif_codes_params
    params.permit(:description, :initial)
  end

  
end
