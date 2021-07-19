import React from 'react';

import './User.css';

const User = (props) => {
  return (
    <li>
      <div className="user">
        <div className="user__info">{props.name + `(${props.age})`}</div>
      </div>
    </li>
  );
};

export default User;