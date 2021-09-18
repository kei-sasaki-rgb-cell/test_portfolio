class ChatsController < ApplicationController
  def index
    @chats = Chat.all.order(id: "DESC")
  end

  def create
    chat = Chat.create(name: params[:name], subject: params[:subject], content: params[:content])
    redirect_to action: :index
  end

  def checked
    #binding.pry
    chat = Chat.find(params[:id])
    if chat.checked
      chat.update(checked: false)
    else
      chat.update(checked: true)
    end
    item = Chat.find(params[:id])
    render json: { chat: item }
  end

end
