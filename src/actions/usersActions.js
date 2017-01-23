
export function getUsers() {
  let sampleUsers = [{id: 1, username: "Colin Firth", age: "12", gender: "M", description: "Looking for love, Mr. Darcy type"}]
  return {
    type: "GET_USERS",
    payload: sampleUsers
  }
}

export function addUser(id, username, age, gender, description) {
  return {
    type: "ADD_USER",
    payload: {id: id, username: username, age: age, gender: gender, description: description}
  }

}
