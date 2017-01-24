# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
harry_potter = User.create(name: "Harry Potter", age: "26", gender: "M", description: "looking for wizardly love")
bridget_jones = User.create(name: "Bridget Jones", age: "45", gender: "F", description: "looking for anyone who is not alcoholic or smug married")
lizzie_bennet = User.create(name: "Elizabeth Bennet", age: "110", gender: "F", description: "Need rich husband")
george_wikham = User.create(name: "George Wikham", age: "120", gender: "M", description: "Cad")
