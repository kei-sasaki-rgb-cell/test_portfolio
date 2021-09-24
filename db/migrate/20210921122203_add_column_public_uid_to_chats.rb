class AddColumnPublicUidToChats < ActiveRecord::Migration[6.0]
  def change
    add_column :chats, :public_uid, :string
    add_index  :chats, :public_uid, unique: true
  end
end
