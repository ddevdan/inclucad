  module Overrides
    class SessionsController < DeviseTokenAuth::SessionsController
        wrap_parameters format: []
        
    end
  end