require 'jwt'

class Auth
  ALGORITHM = 'HS256'
  def self.issue(payload)
    # responsible for generating a JWT from a given user's info
    JWT.encode(
      payload,
      auth_secret,
      ALGORITHM)
  end

  def self.decode(token)
    # decodes a given JWT
    JWT.decode(token,
      auth_secret,
      true,
      {algorithm: ALGORITHM}).first
  end

  def self.auth_secret
    # ENV["AUTH_SECRET"]
    Rails.application.secrets[:secret_key_base]
  end

end
