class User < ApplicationRecord
  has_secure_password

  has_many :user_matches
  has_many :matches, through: :user_matches

  def find_matches
    @user = self
    debugger
    matches = Match.all.select do |person|
      distance = Adapter.new.get_distance(@user, person)
      debugger
      person.id != self.id && person.looking_for == self.gender && person.gender == self.looking_for && self.max_travel > distance && person.max_travel > distance
    end
    debugger
    return matches
  end

  def is_match?(user)
    debugger
    distance = Adapter.new.get_distance(self, user)
    return self.id != user.id && self.looking_for == user.gender && self.gender == user.looking_for && self.max_travel > distance && user.max_travel > distance
  end

end
