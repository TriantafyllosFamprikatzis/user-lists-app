import React from "react";

import Card from '../UI/Card/Card';
import User from '../User/User';
import styles from './UserList.module.css';

const Users = (props) => {
  return (
    <Card className={styles.user__list}>
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
