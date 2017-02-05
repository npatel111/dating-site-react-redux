require 'net/http'
require 'json'

class Adapter
  def get_distance(user, match)
    # byebug
    # result is match.distance
    # then sort by match.distance
    url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=#{user.street}+#{user.city}+#{user.state}&destinations=#{match.street}+#{match.city}+#{match.state}&key=AIzaSyAAuXuyYTYeB4v8smjXWpeBs-1c4M_QQ2w"
    uri = URI(url)
    response = JSON.parse(Net::HTTP.get(uri))
    return response["rows"][0]["elements"][0]["distance"]["value"] || "address not found"
    
  end

end
