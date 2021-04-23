class HealthCentersController < ApplicationController
  before_action :set_health_center, only: [:show, :update, :destroy]

  # GET /health_centers
  def index
    @health_centers = HealthCenter.all

    render json: @health_centers, except: [:_id, :phone_id,:phone_type, :address_type, :address_id], include: [:phone_number, :address, ]
  end

  # GET /health_center/:hc_code
  def show
    render json: @health_center, except: :_id
  end

  # POST /health_center
  def create
    @health_center = HealthCenter.new(health_center_params)
    @phone = PhoneNumber.create(phone_params)
    @address = Address.create(address_params)

    if @health_center.save
      @health_center.phone_number = @phone
      @health_center.address = @address
      render json: @health_center, status: :created, location: @health_center, except: :_id
    else
      render json: @health_center.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /health_center/:hc_code
  def update
    if @health_center.update(health_center_params)
      @health_center.phone_number.update_attributes(phone_params)
      @health_center.address.update_attributes(address_params)
      render json: @health_center, except: :_id
    else
      render json: @health_center.errors, status: :unprocessable_entity
    end
  end

  # DELETE /health_centers/:hc_code
  def destroy
    @health_center.destroy
  end

  # *Search for codes based on :description parameter*
  def search
    @health_centers = HealthCenter.where('$text' => {'$search' => "\"#{params[:name]}\"" }).order_by(name: :asc)
    render json: @health_centers, except: :_id
  end
  

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_health_center
      @health_center = HealthCenter.find_by(hc_code: params[:hc_code])
    end

    # Only allow a list of trusted parameters through.
    def health_center_params
      params.require(:health_center).permit(:name, :hc_code)
    end

    def address_params
      params.require(:address).permit(:cep, :street, :number, :neighborhood, :city, :state, :country, :complement)
    end

    def phone_params
      params.require(:phone_number).permit(:number, :type)
    end
end
