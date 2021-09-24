Rails.application.routes.draw do
  devise_for :users

  root to: 'chats#index'
  post 'chats', to: 'chats#create'
  get 'chats/:id', to: 'chats#checked'
end
