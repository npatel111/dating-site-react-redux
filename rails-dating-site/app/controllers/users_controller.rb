class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token#, :only => [:index, :create]
  skip_before_action :authenticate, :only => [:index, :create]
  # above line removed means you have to authenticate everything


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
    viable_matches = Match.all.select {|person| person.id != @user.id && person.looking_for == @user.gender && person.gender == @user.looking_for}
    matches_with_distance = {}
    viable_matches.each do |match|
      distance = Adapter.new.get_distance(@user, match)
      # byebug
      matches_with_distance[match] = distance
    end
    return matches_with_distance.sort_by {|key, value| value}.to_h.keys
    # byebug
  end


  def create
    @user = User.new(user_params)
    if @user.save
      @match = Match.create(match_params)
      usermatches = @user.find_matches
      # byebug
      usermatches.each do |match|
        distance = Adapter.new.get_distance(@user, match)
        @usermatch = UserMatch.create(user_id: @user.id, match_id: match.id, distance: distance)
        previous_users = User.where("id < ?", @usermatch.user_id)
        previous_users.each do |previous_user|
          if previous_user.is_match?(@user)
            distance = Adapter.new.get_distance(previous_user, @user)
            UserMatch.create(user_id: previous_user.id, match_id: @user.id, distance: distance)
          end
        end
        # Even old user's matches should refresh when new user is added
      end
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    # byebug
    @user = User.find(params[:id])
    @match = Match.find(params[:id])
    if @user.update(user_params) && @current_user.id == @user.id
      @match.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user = User.find(params[:id])
    if @current_user.id == @user.id
      @match = Match.find(params[:id])
      @user.destroy
      @match.destroy
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      # byebug
      params.require(:user).permit(:id, :name, :password, :age, :gender, :description, :looking_for, :max_travel, :street, :city, :state, :image_url, :password_digest)
    end

    def match_params
      params.require(:user).permit(:id, :name, :age, :gender, :description, :looking_for, :max_travel, :street, :city, :state, :image_url)
    end


end
