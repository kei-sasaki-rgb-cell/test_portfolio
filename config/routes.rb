Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'chats#index'
  post 'chats', to: 'chats#create'
  #get 'chats/:id', to: 'chats#checked'
  #resources :chats, only: [:index, :new, :create]
end
