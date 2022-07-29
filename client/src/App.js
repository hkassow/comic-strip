import logo from './logo.svg';
import './App.css';
import Login_form from './components/Login_form';
import {useEffect, useState } from "react"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return <h2>Welcome, {user.username}!</h2>;
  } else {
    return <Login_form onLogin={setUser} />;
  }
}

export default App;
