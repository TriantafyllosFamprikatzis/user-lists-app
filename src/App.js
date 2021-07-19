import React, { useState } from 'react';

import UserInput from './components/UserInput/UserInput';
import Users from './components/Users/Users';
import './App.css';

const DUMMY_DATA = [
  {
    name: 'Max',
    age: 31 + ' years old',
    id: 'g1'
  },
  {
    name: 'Alice',
    age: 25 + ' years old',
    id: 'g2'
  }
];

const App = () => {
  const [users, setUsers] = useState(DUMMY_DATA);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  console.log(users);


  return(
    <div className="App">
      <UserInput onAddUser={addUserHandler}/>
      <Users items={users}/>
    </div>
  );
}

export default App;
