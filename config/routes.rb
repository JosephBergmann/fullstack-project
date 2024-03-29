Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do
    # ...
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]

    resources :questions, only: [:index, :create, :show, :update, :destroy]
    resources :answers, only: [:show, :create, :update, :destroy]
    resources :votes, only: [:create, :update, :destroy]
  end
  get '*path', to: "static_pages#frontend_index"
end
