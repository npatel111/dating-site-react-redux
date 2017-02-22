class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate

  attr_accessor :current_user

  def logged_in?
    debugger
    !!@current_user
  end

  def current_user
    debugger
    if token.present?
      user = User.find(auth["user"])
      debugger
      if user
        @current_user ||= user
      end
      debugger
    end
    return @current_user
  end
  # User.find(Auth.decode(token)["user_id"]) if token.present?


  def authenticate
    debugger
    render json: {error: "unauthorized"}, status: 401 unless current_user
  end

  private

    def token
      debugger
      request.env["HTTP_AUTHORIZATION"]
    end

    def auth
      debugger
      Auth.decode(token)
    end

    # def auth_present?
    #   debugger
    #   !!request.env.fetch("HTTP_AUTHORIZATION", "").scan(/Bearer/).flatten.first
    # end
end
