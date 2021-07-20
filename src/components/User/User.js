import React from 'react';

import styles from './User.module.css';

const User = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <li onClick={deleteHandler}>
      <div className={styles['user']}>
        <div className={styles['user__info']} id={props.id}>{props.name + `(${props.age})`}</div>
      </div>
    </li>
  );
};

export default User;