import React from 'react';

import styles from './User.module.css';

const User = (props) => {
  return (
    <li>
      <div className={styles['user']}>
        <div className={styles['user-info']}>{props.name + `(${props.age})`}</div>
      </div>
    </li>
  );
};

export default User;