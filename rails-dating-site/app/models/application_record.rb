class ApplicationRecord < ActiveRecord::Base
  # protect_from_forgery with: :null_session
  self.abstract_class = true
end
