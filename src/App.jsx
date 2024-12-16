import "./App.css";
import Greet from "./componenets/Greet";
import Toggle from "./componenets/toggle";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  async function getData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setUsers(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Greet name="ali" />

      <Toggle />

      <div>
        {users && users.length ? (
          <table border={1}>
            <thead>
              <tr>
                <td>ID</td>
                <td>Title</td>
                <td> Body</td>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}

export default App;
