Rails.application.routes.draw do
  root to: 'chats#index'
  post 'chats', to: 'chats#create'
end
