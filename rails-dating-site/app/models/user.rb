class User < ApplicationRecord
  has_many :user_matches
  has_many :matches, through: :user_matches

  def find_matches
    Match.all.select {|person| person.id != self.id && person.looking_for == self.gender && person.gender == self.looking_for}
  end
end
