import { useState } from "react";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");

  const saveUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name,
      email,
      gender,
    };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setGender("Male");
  };

  return (
    <div className="container mt-5">
      <div className="columns is-centered">
        <div className="column is-two-quarters">
          <form onSubmit={saveUser}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Gender</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </form>
          <table className="table is-striped is-fullwidth custom-table mt-5">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
