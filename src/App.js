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
      const updatedUsers = [user, ...prevUsers]
      return updatedUsers;
    });
  };

  const deleteItemHandler = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter(users => users.id !== userId);
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (users.length > 0) {
    content = (
      <Users items={users} deleteItem={deleteItemHandler} />
    )
  };

  return(
    <div className="App">
      <Card>
        <UserInput onAddUser={addUserHandler} />
      </Card>
      <Card>
        {content}
      </Card>
    </div>
  );
}

export default App;
