# React + Redux :Dating Site

## Objectives

* Build a basic dating site
- Make User List smart
- Then UserDetail show dumb Component
-

{this.state.editFormVisible ?
    <form onSubmit={this.handleClick} >
      Edit this user: <br />
      <label>Name:</label>
      <input type="text" value={user.name}  /><br />
      <label>Age: </label>
      <input type="text" value={user.age} /><br />
      <label>Gender: </label>
      <input type="text" value={user.gender} /><br />
      <label>Description: </label>
      <input type="text" value={user.description}/><br />
      <input type="submit" />
    </form>
   : null}

   <button onClick={this.handleEdit} type="submit">Edit user</button>

   <UserShow users=this.props.users user=user/>

   <Link to={`/users/${this.props.user.id}`}></Link>
