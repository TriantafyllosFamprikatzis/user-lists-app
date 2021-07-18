import React, { useState } from 'react';

import './UserInput.css';

const UserInput = (props) => {
  const [enteredNameValue, setEnteredNameValue] = useState('');
  const [enteredAgeValue, setEnteredAgeValue] = useState('');

  const inputNameHandler = (event) => {
    setEnteredNameValue(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setEnteredAgeValue(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: enteredNameValue,
      age: enteredAgeValue + ' years old',
      id: Math.random().toString()
    };

    props.onAddUser(userData);
    setEnteredNameValue('');
    setEnteredAgeValue('');
  };



  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Username</label>
        <input type="text" onChange={inputNameHandler}></input>
      </div>
      <div className="form-control">
        <label>Age(Years)</label>
        <input type="number" onChange={inputAgeHandler}></input>
      </div>
      <div className="user-controls">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserInput;