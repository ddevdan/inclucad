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
    render json: @evaluation, include:[:user, :disabled_person, :cif_code]
  end

  # POST /evaluations
  def create
    @evaluation = Evaluation.new(evaluation_params)

    if @evaluation.save
      render json: @evaluation, status: :created, location: @evaluation
    else
      render json: @evaluation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /evaluations/1
  def update
    binding.pry
    @evaluation.user = current_user
    if @evaluation.update(evaluation_params)
      render json: @evaluation, include:[:user, :disabled_person, :cif_code]
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
      params.require(:evaluation).permit(:evaluated_at, :cif_code_id, :disabled_type, :cid_code, :born_with, 
                                          :user_id, :disabled_person_id,
                                          disabled_person_attributes:[:id], 
                                          user_attributes:[:id])
    end
end
