import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", gender: "Male" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", gender: "Female" },
  ]);

  return (
    <div className="container mt-5">
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <table className="table is-striped is-fullwidth custom-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button className="button is-small is-info">Edit</button>
                    <button className="button is-small is-danger ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
