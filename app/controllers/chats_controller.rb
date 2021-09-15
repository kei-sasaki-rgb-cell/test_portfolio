class ChatsController < ApplicationController
  def index
    @chats = Chat.all.order(id: "DESC")
  end

  def new
    @chat = Chat.new
  end

  def create
    chat = Chat.create(content: params[:content], checked: false)
    render json:{ chat: chat}
  end

  def checked
    chat = Chat.find(params[:id])
    if chat.checked
      chat.update(checked: false)
    else
      chat.update(checked: true)
    end

    item = Chat.find(params[:id])
    render json:{ chat: item }
  end

  private
  def chat_params
    params.require(:chat).permit(:name, :text)
  end

end
