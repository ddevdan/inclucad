module Overrides
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      before_action :set_user, only: [:update, :destroy]
      before_action :authenticate_user!, only:[:destroy, :update]
      def create
          @resource            = resource_class.new(sign_up_params)
          @resource.uid        = resource_params[:email]
          @resource.provider   = "email"
          binding.pry
          begin
            if @resource.save
              render json: {
                status: 'success',
                data:   @resource.as_json
              }
            else
              clean_up_passwords @resource
              render json: {
                status: 'error',
                data:   @resource,
                errors: @resource.errors
              }, status: 403
            end
          rescue ActiveRecord::RecordNotUnique
            clean_up_passwords @resource
            render json: {
              status: 'error',
              data:   @resource,
              errors: ["An account already exists for #{@resource.email}"]
            }, status: 403
          end
        end

        def update
          if @resource
            @health_center = HealthCenter.find(account_update_params[:health_center_attributes][:id])
            @health_center.users << @resource unless @health_center.nil?
            if @resource.send(resource_update_method, account_update_params.except(:hc_code))
              yield @resource if block_given?
              render_update_success
            else
              render_update_error
            end
          else
            render_update_error_user_not_found
          end
        end

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