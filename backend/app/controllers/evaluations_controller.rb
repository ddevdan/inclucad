class EvaluationsController < ApplicationController
  before_action :authenticate_user!

  before_action :set_evaluation, only: [:show, :update, :destroy]

  # GET /evaluations
  def index
    @evaluations = Evaluation.all
    render json: @evaluations
  end

  # GET /evaluations/1
  def show
    render json: @evaluation
  end

  # POST /evaluations
  def create
    byebug
    @evaluation = Evaluation.new!(evaluation_params)
    @disabled_person = DisabledPerson.only(:_id).find_by(cpf: params[:disabled_person_cpf])
    @evaluation.disabled_person_id = @disabled_person._id
    @evaluation.user_id = current_user.id

    if @evaluation.save
      render json: @evaluation, status: :created, location: @evaluation
    else
      render json: @evaluation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /evaluations/1
  def update
    if @evaluation.update(evaluation_params)
      render json: @evaluation
    else
      render json: @evaluation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /evaluations/1
  def destroy
    @evaluation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_evaluation
      @evaluation = Evaluation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def evaluation_params
      params.require(:evaluation).permit(:cif_code, :cid_code, :disabled_type, :born_with, :date, :user_id, :disabled_person_id)
    end
end
