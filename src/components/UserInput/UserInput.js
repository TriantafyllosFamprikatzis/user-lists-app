import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import './UserInput.css';

const UserInput = (props) => {
  const [enteredNameValue, setEnteredNameValue] = useState('');
  const [enteredAgeValue, setEnteredAgeValue] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);
  const [ageIsValid, setAgeIsValid] = useState(true);

  const inputNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setNameIsValid(true);
    };

    setEnteredNameValue(event.target.value);
  };

  const inputAgeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setAgeIsValid(true);
    };

    setEnteredAgeValue(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredNameValue.trim().length === 0) {
      setNameIsValid(false);
    }

    if (enteredAgeValue.trim().length === 0) {
      setAgeIsValid(false);
    }

    if ( enteredAgeValue.trim().length && enteredNameValue.trim().length > 0) {
      const userData = {
        name: enteredNameValue,
        age: enteredAgeValue + ' years old',
        id: Math.random().toString()
      };
  
      props.onAddUser(userData);
      setEnteredNameValue('');
      setEnteredAgeValue('');
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmitHandler}>
        <div className={nameIsValid ? "form-control" : "form-control invalid"}>
          <label>Username</label>
          <input type="text" value={enteredNameValue} onChange={inputNameHandler}></input>
        </div>
        <div className={ageIsValid ? "form-control" : "form-control invalid"}>
          <label>Age(Years)</label>
          <input type="number" value={enteredAgeValue} onChange={inputAgeHandler} min="1" max="110"></input>
        </div>
        <div className="user-controls">
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;