class PostosController < ApplicationController
  before_action :set_posto, only: [:show, :update, :destroy]

  # GET /postos
  def index
    @postos = Posto.all

    render json: @postos, except: [:_id, :phone_id,:phone_type, :address_type, :address_id], include: [:phone_number, :address, ]
  end

  # GET /postos/:posto_code
  def show
    render json: @posto, except: :_id
  end

  # POST /postos
  def create
    @posto = Posto.new(posto_params)
    @phone = PhoneNumber.create(phone_params)
    @address = Address.create(address_params)

    if @posto.save
      @posto.phone_number = @phone
      @posto.address = @address
      render json: @posto, status: :created, location: @posto, except: :_id
    else
      render json: @posto.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /postos/:posto_code
  def update
    if @posto.update(posto_params)
      @posto.phone_number.update_attributes(phone_params)
      @posto.address.update_attributes(address_params)
      render json: @posto, except: :_id
    else
      render json: @posto.errors, status: :unprocessable_entity
    end
  end

  # DELETE /postos/1
  def destroy
    @posto.destroy
  end

  # *Search for codes based on :description parameter*
  def search
    @postos = Posto.where('$text' => {'$search' => posto_params[:name]}).order_by(name: :asc)
    render json: @postos, except: :_id
  end
  

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_posto
      @posto = Posto.find_by(posto_code: params[:posto_code])
    end

    # Only allow a list of trusted parameters through.
    def posto_params
      params.require(:posto).permit(:name, :posto_code)
    end

    def address_params
      params.require(:address).permit(:street, :number, :neighborhood, :city, :state, :country, :complement)
    end

    def phone_params
      params.require(:phone_number).permit(:number, :type)
    end
end
