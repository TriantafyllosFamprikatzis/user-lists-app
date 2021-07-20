import React from "react";

import User from "../User/User";
import Card from "../UI/Card/Card";

const Users = (props) => {
  return (
    <Card>
      <ul>
        {props.items.map((user) => (
          <User key={user.id} name={user.name} age={user.age}></User>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
