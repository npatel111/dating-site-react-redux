class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  skip_before_action :authenticate
  def new
  end

  def create
    # byebug
    user = User.find_by(name: auth_params[:name])
    if user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt, user: user}
    else
    end
  end

  def new
  end

  private
  def auth_params
    params.require(:auth).permit(:name, :password)
  end
end
