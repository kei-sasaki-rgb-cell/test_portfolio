class ChatsController < ApplicationController
  def index
    @chats = Chat.all.order(id: "DESC")
  end

  def create
    chat = Chat.create(name: params[:name], subject: params[:subject], content: params[:content])
    render json:{ chat: chat}
  end

end
