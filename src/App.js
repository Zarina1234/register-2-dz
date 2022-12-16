import React from "react";
import "./style.css";
import { newUser } from "./api";
import Loader from "react-loader-spinner";

function Form() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [registered, setRegistered] = React.useState(false);

  const registerUser = (e) => {
    e.preventDefault();
    const userData = { username, email, password };

    setLoading(true);

    if (username === "") {
      setLoading(false);
      setError("Username must not be empty");
      return;
    }
    if (email === "") {
      setLoading(false);
      setError("Email must not be empty");
      return;
    }
    if (password === "") {
      setLoading(false);
      setError("Password must not be empty");
      return;
    }

    if (username === "" || email === "" || password === "") {
      setLoading(false);
      setError("All must be not be empty");
      return;
    }

    newUser(userData)
      .then((res) => {
        setRegistered(true);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setRegistered(false);
        setLoading(false);
        console.log(err);
      });
  };

  if (registered) {
    return (
      <React.Fragment>
        <h2>Thank you for registering</h2>
        <button onClick={() => setRegistered(false)}>Return to register</button>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <h1>Register</h1>
      {error ? <p className="error">{error}</p> : null}
      <form onSubmit={registerUser}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={30}
            width={30}
            timeout={10000}
          />
        ) : (
          <button type="submit" onClick={() => {}}>
            Register
          </button>
        )}
      </form>
      <p>hello</p>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="register">
      <Form />
    </div>
  );
}

export default App;
