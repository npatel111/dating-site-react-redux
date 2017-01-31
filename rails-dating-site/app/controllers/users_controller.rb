class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  def get_user_matches
    # byebug
    # for each match, figure out distance from user. Sort by distance
    viable_matches = Match.all.select {|person| person.id != @user.id && person.looking_for == @user.gender && person.gender == @user.looking_for}
    matches_with_distance = {}
    viable_matches.each do |match|
      distance = Adapter.new.get_distance(@user, match)
      # byebug
      matches_with_distance[match] = distance
      # byebug
    end
    return matches_with_distance.sort_by {|key, value| value}.to_h.keys
    # byebug

  end

  def create
    @user = User.new(user_params)
    if @user.save
      @match = Match.create(user_params)
      # get matches here?
      # byebug
      @user.matches = self.get_user_matches
      # byebug
      render json: @user, status: :created, location: @user
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    # byebug
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    #should this destroy that match as well?
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      # byebug
      params.require(:user).permit(:id, :name, :age, :gender, :description, :looking_for, :street, :city, :state)
    end


end
