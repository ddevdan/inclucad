Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers:{
    registrations: 'overrides/registrations'

  }

  # devise_for :users

  resources :evaluations

  resources :disabled_people, param: :cpf
  
  resources :cif_codes,  only: [:index] do
    collection do
      get 'search'
      get ':initial', to: "cif_codes#show", as: 'show'
    end
  end

  resources :health_centers, param: :hc_code do
    collection do
      get 'search'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
