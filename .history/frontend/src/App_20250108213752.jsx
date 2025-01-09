import { useState } from "react";
import "./App.css";

function AddUser() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", gender: "Male" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", gender: "Female" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
        </div>
      </div>
    </div>
  );
}

export default AddUser;
