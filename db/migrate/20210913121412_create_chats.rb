class CreateChats < ActiveRecord::Migration[6.0]
  def change
    create_table :chats do |t|
      t.text :name
      t.string :subject
      t.text :content
      t.boolean :checked
      t.timestamps
    end
  end
end
