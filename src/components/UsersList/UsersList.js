import React from "react";

import Card from '../UI/Card/Card';
import User from "../User/User";

const Users = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            age={user.age}
            id={user.id}
            onDelete={props.deleteItem}
          ></User>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
