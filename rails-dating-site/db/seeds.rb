# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
harry_potter = User.create(name: "Harry Potter", age: "26", gender: "M", description: "looking for wizardly love", looking_for: "M")
bridget_jones = User.create(name: "Bridget Jones", age: "45", gender: "F", description: "looking for anyone who is not alcoholic or smug married", looking_for: "M")
lizzie_bennet = User.create(name: "Elizabeth Bennet", age: "110", gender: "F", description: "Need rich husband", looking_for: "F")
george_wickham = User.create(name: "George Wickham", age: "120", gender: "M", description: "Cad", looking_for: "F")

harry_potter_match = Match.create(name: "Harry Potter", age: "26", gender: "M", description: "looking for wizardly love", looking_for: "M")
bridget_jones_match = Match.create(name: "Bridget Jones", age: "45", gender: "F", description: "looking for anyone who is not alcoholic or smug married", looking_for: "M")
lizzie_bennet_match = Match.create(name: "Elizabeth Bennet", age: "110", gender: "F", description: "Need rich husband", looking_for: "F")
george_wickham_match = Match.create(name: "George Wickham", age: "120", gender: "M", description: "Cad", looking_for: "F")

# harry_potter.matches = Match.all.select {|person| person.id != harry_potter.id}
# bridget_jones.matches = Match.all.select {|person| person.id != bridget_jones.id}
# lizzie_bennet.matches = Match.all.select {|person| person.id != lizzie_bennet.id}
# george_wickham.matches = Match.all.select {|person| person.id != george_wickham.id}
