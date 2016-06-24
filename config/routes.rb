# Rails.application.routes.draw do
#   get 'stocks/create'
#
#   devise_for :users
#   root 'application#angular'
# end


Rails.application.routes.draw do
  root 'application#angular'
  devise_for :users

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :stocks, only: [:create]
    end
  end
end
