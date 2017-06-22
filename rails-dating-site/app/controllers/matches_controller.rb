class MatchesController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate
  # above line removed means you have to authenticate everything

  def index
    @matches = Match.all
    render json: @matches
  end

  # GET /matches/1
  def show
    render json: @match
  end

  def create
    @match = Match.new(match_params)
    if @match.save
      render json: @match, status: :created, location: @match
    else
      render json: @match.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /matches/1
  def update
    @match = Match.find(params[:id])
    if @match.update(match_params)
      render json: @match
    else
      render json: @match.errors, status: :unprocessable_entity
    end
  end

  # DELETE /matches/1
  def destroy
    @match = Match.find(params[:id])
    @match.destroy
    #should this destroy that match as well?
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_match
      @match = Match.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def match_params
      params.require(:match).permit(:id, :name, :age, :gender, :description, :looking_for, :image_url)
    end

end
