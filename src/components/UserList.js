import React from 'react';
import {Link} from 'react-router';

const UserList = (props) => {
  // debugger
  return (
    <ul className="list-group col-lg-6 col-lg-offset-3">
      {props.users.map((user, i) => {
        return <li key={i} className="list-group-item"><Link to={`/users/${user.id}`} >Name: {user.username}, Age: {user.age}, Gender: {user.gender}, Description: {user.description}</Link></li>
      })}
      <br />
    </ul>
  )
}

export default UserList;
