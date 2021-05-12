module Overrides
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      before_action :set_user, only: [:update, :destroy]
      



        def set_user
          @resource = User.find(account_update_params[:id])
        end

        def sign_up_params
          params.require(:user).permit(*params_for_resource(:sign_up))
        end

        def account_update_params
          params.require(:user).permit(*params_for_resource(:account_update))
        end
    end
  end