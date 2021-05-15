class EvaluationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_evaluation, only: [:show, :update, :destroy]
  before_action :set_cif_codes, only: [:update]

  # GET /evaluations
  # Rota que retorna todas as avaliações 
  def index
    @health_center = current_user.health_center unless current_user.nil?
    @evaluations = Evaluation.where(health_center: @health_center)

    render json: @evaluations, include: [:user, :disabled_person, :cif_codes]
  end
  

  # GET /evaluations/1
  # Mostra avaliação
  def show
    render json: @evaluation, include:[:user, :disabled_person, :cif_codes]
  end

  # POST /evaluations
  # Rota de criação de avaliações
  def create
    @evaluation = Evaluation.new(evaluation_params)
    if @evaluation.save
      render json: @evaluation, status: :created, location: @evaluation
    else
      render json: @evaluation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /evaluations/1
  # Rota de atualização
  def update

    @evaluation.user = current_user
    @evaluation.evaluated_at = Time.now
    @evaluation.cif_codes = @cif_codes unless @cif_codes.nil?
    @evaluation.done = true
    if @evaluation.update(evaluation_params)
      render json: @evaluation, include:[:user, :disabled_person, :cif_codes]
    else
      render json: @evaluation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /evaluations/1
  # Rota para deletar
  def destroy
    @evaluation.destroy
  end

  private
    # Definir avaliação para ser editada, destruída, deletada e mostrada.
    def set_evaluation
      @evaluation = Evaluation.find(params[:id])
    end

    def set_cif_codes      
      @cif_codes = CifCode.in(code: params[:evaluation][:cif_codes].map{|c| c[:value]})

    end

    # Paramentros permitidos pelo controller.
    def evaluation_params
      params.require(:evaluation).permit(:evaluated_at, :cif_code_id, :disabled_type, :cid_code, :born_with, 
                                          :user_id, :disabled_person_id,
                                          disabled_person_attributes:[:id], 
                                          user_attributes:[:id])
    end
end
