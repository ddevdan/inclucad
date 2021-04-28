class HealthCentersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_health_center, only: [:show, :update, :destroy]

  # GET /health_centers
  # Rota que retorna os postos de saúde.
  def index
    @health_centers = HealthCenter.all

    render json: @health_centers, include: [:phone_number, :address, ]
  end

  # GET /health_center/:hc_code
  # Rota que retorno o posto de saúde de acordo com parametro.
  def show
    render json: @health_center, include: [:phones, :address]
  end

  # POST /health_center
  # Rota de criação do posto saúde.
  def create
    @health_center = HealthCenter.new(health_center_params)
    if @health_center.save
      render json: @health_center, include: [:phones, :address], status: :created, location: @health_center
    else
      render json: @health_center.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /health_center/:hc_code
  # Rota de atualização do posto de saúde.
  def update
    if @health_center.update(health_center_params)
      render json: @health_center, include: [:phones, :address]
    else
      render json: @health_center.errors, status: :unprocessable_entity
    end
  end

  # DELETE /health_centers/:hc_code
  # Rota que deleta o posto de saúde.
  def destroy
    @health_center.destroy
  end

  # *Search for codes based on :description parameter*
  # Rota de busca o posto de saúde pelo nome.
  def search
    @health_centers = HealthCenter.where('$text' => {'$search' => "\"#{params[:name]}\"" }).order_by(name: :asc)
    render json: @health_centers, include: [:address, :phones]
  end
  
  private

  
    # Use callbacks to share common setup or constraints between actions.
    # Definir avaliação para ser editada, destruída, deletada e mostrada do posto de saúde.
    def set_health_center
      @health_center = HealthCenter.find_by(hc_code: params[:hc_code])
    end

    # Only allow a list of trusted parameters through.
    # Paramentros permitidos pelo controller.
    def health_center_params
      params.require(:health_center).permit(:name, :hc_code, address_attributes:[:cep, :street, :number, :neighborhood, :city, :state, :country, :complement],
                                              phones_attributes:[:number, :type])
    end

end
