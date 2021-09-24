class Chat < ApplicationRecord
  UID_RANGE = ('a'..'z').to_a + ('A'..'Z').to_a + ('0'..'9').to_a
  generate_public_uid generator: PublicUid::Generators::RangeString.new(8, UID_RANGE)

  def to_param
    public_uid
  end

  with_options presence: true do
    validates :name
    validates :subject, length: { maximum: 30 }
    validates :content, length: { maximum: 200}
  end
end
