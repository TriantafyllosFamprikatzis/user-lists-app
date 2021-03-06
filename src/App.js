import React, { useState, Fragment } from "react";

import Card from "./components/UI/Card/Card";
import UserInput from "./components/UserInput/UserInput";
import UsersList from "./components/UsersList/UsersList";

const DUMMY_DATA = [
  {
    name: "Max",
    age: 31 + " years old",
    id: "g1",
  },
  {
    name: "Alice",
    age: 25 + " years old",
    id: "g2",
  },
];

const App = () => {
  const [usersList, setUsersList] = useState(DUMMY_DATA);

  const addUserHandler = (user) => {
    setUsersList((prevUsers) => {
      const updatedUsers = [...prevUsers, user];
      return updatedUsers;
    });
  };

  const deleteItemHandler = (userId) => {
    setUsersList((prevUsers) => {
      const updatedUsers = prevUsers.filter(
        (usersList) => usersList.id !== userId
      );
      return updatedUsers;
    });
  };

  let content = (
    <Card>
      <p style={{ textAlign: "center", padding: "20px 85px" }}>
        No goals found. Maybe add one?
      </p>
    </Card>
  );

  if (usersList.length > 0) {
    content = <UsersList users={usersList} deleteItem={deleteItemHandler} />;
  }

  return (
    <Fragment>
      <UserInput onAddUser={addUserHandler} />
      {content}
    </Fragment>
  );
};

export default App;
