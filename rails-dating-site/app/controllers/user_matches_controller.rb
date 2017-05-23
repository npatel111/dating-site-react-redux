class UserMatchesController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate, :only => [:index, :create, :show]
  # def show
  #     render json: @user_artist
  #   end

  before_action :set_user_match, only: [:show, :update, :destroy]

  # GET /user_matches
  def index
    @user_matches = UserMatch.all

    render json: @user_matches
  end

  # GET /user_matches/1
  def show
    # debugger
    @id = params[:id].to_i
    # if @current_user.id == @id
    if @id
      @matches_for_user = UserMatch.where("user_id = ?", @id)
      render json: @matches_for_user
    else
      render json: User.find(@id).errors, status: :unprocessable_entity
    end
  end

  # # POST /users_artists
  # def create
  #   byebug
  #   @users_artist = UsersArtist.new(users_artist_params)
  #
  #   if @users_artist.save
  #     render json: @users_artist, status: :created, location: @users_artist
  #   else
  #     render json: @users_artist.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /users_artists/1
  # def update
  #   if @users_artist.update(users_artist_params)
  #     render json: @users_artist
  #   else
  #     render json: @users_artist.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # # DELETE /users_artists/1
  # def destroy
  #   @users_artist.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_match
      # should we find by user_id?
      # UserMatch.where("user_id = ?", 4)
      @user_match = UserMatch.find_by(user_id: params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_match_params
      params.require(:user_match).permit(:user_id, :match_id, :distance)
    end
end
