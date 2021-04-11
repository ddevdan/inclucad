class DisabledPeopleController < ApplicationController
  before_action :set_disabled_person, only: [:show, :update, :destroy]

  # GET /disabled_people
  def index
    @disabled_people = DisabledPerson.all

    render json: @disabled_people, include: [:phones, :job_experiences, :address]
  end

  # GET /disabled_people/1
  def show
    render json: {
      id: @disabled_person.id,
      cpf: @disabled_person.cpf,
      first_name: @disabled_person.first_name,
      last_name: @disabled_person.last_name,
      born_date: @disabled_person.born_date,
      gender: @disabled_person.gender,
      father_name: @disabled_person.father_name,
      mother_name: @disabled_person.mother_name,
      card_id: @disabled_person.card_id,
      sus_id: @disabled_person.sus_id,
      scholarity: @disabled_person.scholarity,
      work_card_id: @disabled_person.work_card_id,
      acquisition_form: @disabled_person.acquisition_form,
      society_limitation: @disabled_person.society_limitation,
      social_situation: @disabled_person.social_situation,
      infos_add: @disabled_person.infos_add,
      deficiency_type: @disabled_person.deficiency_type,
      created_at: @disabled_person.created_at,
      updated_at: @disabled_person.updated_at,
      phones: @disabled_person.phones,
      job_experiences: @disabled_person.job_experiences
    }
  end

  # POST /disabled_people
  def create
    @disabled_person = DisabledPerson.new(disabled_person_params)

    if @disabled_person.save
      render json: @disabled_person, status: :created, location: @disabled_person
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
      params.require(:disabled_person).permit(:name, :born_date, :gender, :father_name, :mother_name, :card_id, :sus_id, :scholarity, :work_card_id, :acquisition_form, :society_limitation, :social_situation, :infos_add, :deficiency_type)
    end
end
