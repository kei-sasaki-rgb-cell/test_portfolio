class ChatsController < ApplicationController
  def index
    @chats = Chat.all.order(id: "DESC")
  end

  def create
    Chat.create(content: params[:content])
    redirect_to action: :index
  end

end
