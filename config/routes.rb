Rails.application.routes.draw do
  root 'application#angular'
  devise_for :users

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :stocks, only: [:index, :show, :create]
      delete 'stocks' => 'stocks#destroy'
    end
  end
end
