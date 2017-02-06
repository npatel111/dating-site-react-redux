class User < ApplicationRecord
  has_many :user_matches
  has_many :matches, through: :user_matches

  def find_matches
    Match.all.select {|person| person.id != self.id && person.looking_for == self.gender && person.gender == self.looking_for}
  end

  def is_match?(user)
    self.id != user.id && self.looking_for == user.gender && self.gender == user.looking_for
  end

end
