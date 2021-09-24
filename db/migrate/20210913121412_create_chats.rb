class CreateChats < ActiveRecord::Migration[6.0]
  def change
    create_table :chats do |t|
      t.string :name
      t.string :subject
      t.string :content
      t.string :number
      t.boolean :checked
      t.timestamps
    end
  end
end
