import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import styles from './UserInput.module.css';

const UserInput = (props) => {
  const [enteredNameValue, setEnteredNameValue] = useState('');
  const [enteredAgeValue, setEnteredAgeValue] = useState('');
  const [error, setError] = useState();

  const inputNameHandler = (event) => {
    setEnteredNameValue(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setEnteredAgeValue(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredAgeValue.trim().length === 0 || enteredNameValue.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }

    if (+enteredAgeValue < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid  age (> 0).'
      });
      return;
    }

    const userData = {
      name: enteredNameValue,
      age: enteredAgeValue + ' years old',
      id: Math.random().toString()
    };

    props.onAddUser(userData);
    setEnteredNameValue('');
    setEnteredAgeValue('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles['form-wrapper']}>  
        <form onSubmit={formSubmitHandler}>
          <div className={styles['form-control']}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredNameValue} onChange={inputNameHandler}></input>
          </div>
          <div className={styles['form-control']}>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAgeValue} onChange={inputAgeHandler}></input>
          </div>
          <div className={styles['user-controls']}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;