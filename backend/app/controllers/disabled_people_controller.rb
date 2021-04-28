class DisabledPeopleController < ApplicationController
  before_action :authenticate_user!
  before_action :set_disabled_person, only: [:show, :update, :destroy]

  # GET /disabled_people
  # Mostrar todas as pessoas com deficiência.
  def index
    @disabled_people = DisabledPerson.all

    render json: @disabled_people
  end

  # GET /disabled_people/1
  # Mostrar uma pessoa, a passada pelo paramentro.
  def show
    render json: @disabled_person
  end

  # POST /disabled_people
  # Cadastrar pessoa.
  def create
    @disabled_person = DisabledPerson.new(disabled_person_params)
    if @disabled_person.save
      @disabled_person.evaluation = Evaluation.new
      @disabled_person.evaluation.save!
      render json: @disabled_person, include:[:address, :phones], status: :created, location: @disabled_person
    else
      render json: @disabled_person.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /disabled_people/1
  # Atualizar pessoa.
  def update
    @health_center = HealthCenter.find(disabled_person_params[:health_center_attributes][:id])
    @health_center.disabled_people << @disabled_person unless @health_center.nil?
    unless @disabled_person.nil?
      if @disabled_person.update(disabled_person_params) 
        render json: @disabled_person
      else
        render json: @disabled_person.errors, status: :unprocessable_entity
      end
    else
      render json: {status: 'error', message:"there are not disabled people with params passed"}
    end
  end

  # DELETE /disabled_people/1
  # Deletar pessoa.
  def destroy
    unless @disabled_person.nil?
      email = @disabled_person.email
      if @disabled_person.destroy
        render json: {status:true, uid:email}
      else
        render json: {status: 'error', message:"there are not disabled people with params passed"}
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # Definir pessoa para ser editada, atualizada, excluida.
    def set_disabled_person
      @disabled_person = DisabledPerson.find_by(cpf: params[:cpf])
    end

    # Only allow a list of trusted parameters through.
    # Paramentro permitido pelo controller.
    def disabled_person_params
      params.require(:disabled_person).permit(:id, :name, :cpf, :email, :born_date, 
                                              :gender, :father_name, :mother_name, 
                                              :card_id, :sus_id, :work_card_id, :scholarity, 
                                              :acquisition_form, :society_limitation, :social_situation, 
                                              :infos_add, :deficiency_type,
                                              address_attributes:[:cep, :street, :number, :neighborhood, 
                                              :city, :state, :country, :complement],
                                              phones_attributes:[:number, :type],
                                              health_center_attributes: [:id]
                                              )
    end
end
