class UserMatchesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # def show
  #     render json: @user_artist
  #   end
end
