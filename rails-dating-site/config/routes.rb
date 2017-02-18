Rails.application.routes.draw do
  resources :matches
  resources :users
  resources :user_matches
  post '/login', to: "sessions#create"
  get '/login', to: "sessions#new"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
