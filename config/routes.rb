Rails.application.routes.draw do
  get 'stocks/create'

  devise_for :users
  root 'application#angular'
end
