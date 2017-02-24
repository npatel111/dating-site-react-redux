# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
harry_potter = User.create(name: "Harry Potter", age: "26", gender: "M", description: "looking for wizardly love", looking_for: "M", street: "13414 Spruce Hollow Ct", city: "Houston", state: "TX", image_url: "http://cnb.cx/2juNgRr", password:"a", max_travel: 500)
bridget_jones = User.create(name: "Bridget Jones", age: "45", gender: "F", description: "looking for anyone who is not alcoholic or smug married", looking_for: "M", street: "71 4th Avenue", city: "Brooklyn", state: "NY", image_url: "http://bit.ly/2kYKxjk", password:"a", max_travel: 1000)
lizzie_bennet = User.create(name: "Elizabeth Bennet", age: "110", gender: "F", description: "Need rich husband", looking_for: "M", street: "262 W 24th St", city: "New York", state: "NY", image_url: "http://bit.ly/2kWMeRG", password:"a", max_travel: 1500)
george_wickham = User.create(name: "George Wickham", age: "120", gender: "M", description: "Cad", looking_for: "F", street: "11 Broadway", city: "New York", state: "NY", image_url: "http://bit.ly/2kmlneP", password:"a", max_travel: 2000)

harry_potter_match = Match.create(name: "Harry Potter", age: "26", gender: "M", description: "looking for wizardly love", looking_for: "M", street: "13414 Spruce Hollow Ct", city: "Houston", state: "TX", image_url: "http://cnb.cx/2juNgRr", max_travel: 500)
bridget_jones_match = Match.create(name: "Bridget Jones", age: "45", gender: "F", description: "looking for anyone who is not alcoholic or smug married", looking_for: "M", street: "71 4th Avenue", city: "Brooklyn", state: "NY", image_url: "http://bit.ly/2kYKxjk", max_travel: 1000)
lizzie_bennet_match = Match.create(name: "Elizabeth Bennet", age: "110", gender: "F", description: "Need rich husband", looking_for: "M", street: "262 W 24th St", city: "New York", state: "NY", image_url: "http://bit.ly/2kWMeRG", max_travel: 1500)
george_wickham_match = Match.create(name: "George Wickham", age: "120", gender: "M", description: "Cad", looking_for: "F", street: "11 Broadway", city: "New York", state: "NY", image_url: "http://bit.ly/2kmlneP", max_travel: 2000)

UserMatch.create(user_id: 2, match_id: 4, distance: 500 )
UserMatch.create(user_id: 3, match_id: 4, distance: 5000 )
UserMatch.create(user_id: 4, match_id: 2, distance: 500 )
UserMatch.create(user_id: 4, match_id: 3, distance: 5000 )
