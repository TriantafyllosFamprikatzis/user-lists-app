import React from "react";

import User from "../User/User";

const Users = (props) => {
  return (
    <ul>
      {props.items.map((user) => (
        <User key={user.id} name={user.name} age={user.age}></User>
      ))}
    </ul>
  );
};

export default Users;
