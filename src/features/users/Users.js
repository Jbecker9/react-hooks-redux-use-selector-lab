import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector((state)=>state.users);
  // console.log(users)

  return (
    <div>
      <ul>
        Users!
        { users.map((user) => <li key={user.username}> {user.username} </li>)}
        { <p>Total Users: {users.length}</p> }
      </ul>
    </div>
  );
}

export default Users;
