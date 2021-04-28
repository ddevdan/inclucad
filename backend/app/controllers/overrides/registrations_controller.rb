module Overrides
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      before_action :set_user, only: [:update, :destroy]
      

        def destroy
          
          if @resource
            @resource.destroy
            yield @resource if block_given?
            render_destroy_success
          else
            render_destroy_error
          end
        end


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