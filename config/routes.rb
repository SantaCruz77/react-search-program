Rails.application.routes.draw do
  root to: redirect('/searchs')

  get 'searchs', to: 'site#index'
  get 'searchs/new', to: 'site#index'
  get 'searchs/:id', to: 'site#index'
  get 'searchs/:id/edit', to: 'site#index'

  namespace :api do
    resources :searchs, only: %i[index show]
  end
end
