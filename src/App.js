import React, { useState } from 'react';

import Card from './components/UI/Card/Card';
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

  return(
    <div className="App">
      <Card>
        <UserInput onAddUser={addUserHandler}/>
      </Card>
      <Card>
        <Users items={users}/>
      </Card>
    </div>
  );
}

export default App;
