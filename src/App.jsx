import React from "react";
import "./App.css";
import UsersList from "./Components/UsersList";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UsersForms from "./Components/UsersForm";


export default function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setuserSelectec] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const deleteUser = (users) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${users.id}/`)
      .then(() => getUsers());
  };

  const selectedUser = (user) => setuserSelectec(user);
  const deselectUser = () => setuserSelectec(null);

  return (
    <div className="App">
      <div className="topSection">
        <h1 className="title">Users Database</h1>
        <h3 className="title">CRUD Exercise</h3>
        <p className="title">Developed by Juanery Gonzalez for Academlo, 2022</p>
      </div>
      <UsersForms
        deselectUser={deselectUser}
        userSelected={userSelected}
        getUsers={getUsers}
      />
      <h1 className="subTitle">Users List</h1>
      <UsersList
        deleteUser={deleteUser}
        selectedUser={selectedUser}
        users={users}
      ></UsersList>
    </div>
  );
}
