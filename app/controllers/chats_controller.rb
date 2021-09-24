class ChatsController < ApplicationController
  helper_method :set_chat

  def index
    @chats = Chat.all.order(id: "DESC")
  end

  def create
    chat = Chat.create(name: params[:name], subject: params[:subject], content: params[:content], number: params[:number], public_uid: params[:public_uid])
    render json:{ chat: chat}
  end

  private
  def set_chat
    @chat = Chat.find_by(public_uid: params[:id])
  end

end
