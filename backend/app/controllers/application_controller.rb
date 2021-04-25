class ApplicationController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken
    before_action :configure_permitted_parameters, if: :devise_controller?




    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:id, :cpf, :name, :agente, :agente_code, :fisio_code, health_center_attributes:[:id, :name, :hc_code]])
        devise_parameter_sanitizer.permit(:account_update, keys: [:id, :cpf, :name, :agente, :agente_code, :fisio_code,  health_center_attributes:[:id, :name, :hc_code,:_destroy]])
    end
end
