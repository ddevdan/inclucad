class DisabledPeopleController < ApplicationController
  before_action :set_disabled_person, only: [:show, :update, :destroy]

  # GET /disabled_people
  def index
    @disabled_people = DisabledPerson.all

    render json: @disabled_people
  end

  # GET /disabled_people/1
  def show
    render json: @disabled_person
  end

  # POST /disabled_people
  def create
    # Register disabled people
    # With address and phone number associated to them
    byebug

    @disabled_person = DisabledPerson.new(disabled_person_params)
    @address = Address.create(address_params)
    @phone = PhoneNumber.create(phone_params)
    if @disabled_person.save
      @disabled_person.phone_number = @phone
      @disabled_person.address = @address
      render json: {status: "created", created: true,  created_at:"#{Time.now}"}
      
    else
      render json: @disabled_person.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /disabled_people/1
  def update
    if @disabled_person.update(disabled_person_params)
      render json: @disabled_person
    else
      render json: @disabled_person.errors, status: :unprocessable_entity
    end
  end

  # DELETE /disabled_people/1
  def destroy
    @disabled_person.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_disabled_person
      @disabled_person = DisabledPerson.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def disabled_person_params
      params.require(:disabled_person).permit(:name, :cpf, :born_date, :gender, 
                                                :father_name, :mother_name, :card_id, 
                                                :sus_id, :scholarity, :work_card_id, :acquisition_form, 
                                                :society_limitation, :social_situation, :infos_add, 
                                                :deficiency_type)
      end

    def address_params
      params.require(:address).permit(:street, :number, :neighborhood, :city, :state, :country, :complement)
    end

    def phone_params
      params.require(:phone_number).permit(:number, :type)
    end

    
end
